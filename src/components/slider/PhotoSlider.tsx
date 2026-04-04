"use client"
import Image from "next/image";
import { useRef, useEffect } from "react";

const photos = [
  {
    src: "/images/slider/photo-1.jpg",
    alt: "Editorial food photography of a plated dish",
  },
  {
    src: "/images/slider/photo-2.jpg",
    alt: "Modern restaurant food composition photographed in studio light",
  },
  {
    src: "/images/slider/photo-3.jpg",
    alt: "Dessert close-up from Konrad Kalinowski photography portfolio",
  },
  {
    src: "/images/slider/photo-4.jpg",
    alt: "Cocktail photography with cinematic bar styling",
  },
];

export default function PhotoSlider() {
  const duplicatedPhotos = [...photos, ...photos];

  const trackRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startY = useRef(0);
  const startScroll = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastTs = useRef<number | null>(null);
  const pauseUntil = useRef<number>(0);
  const SPEED_PX_PER_SEC = 40; // adjust auto-scroll speed
  const PAUSE_AFTER_INTERACTION_MS = 1200;
  const activePointerId = useRef<number | null>(null);
  const verticalScroll = useRef(false);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;
    // record start positions; decide intent on move
    startX.current = e.clientX;
    startY.current = e.clientY;
    startScroll.current = el.scrollLeft;
    activePointerId.current = e.pointerId;
    verticalScroll.current = false;
    pauseUntil.current = Date.now() + PAUSE_AFTER_INTERACTION_MS;
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = trackRef.current;
    if (!el) return;

    const dx = e.clientX - startX.current;
    const dy = e.clientY - startY.current;
    const absDx = Math.abs(dx);
    const absDy = Math.abs(dy);
    const THRESH = 6;

    // If not yet dragging and not decided, determine intent
    if (!isDragging.current && !verticalScroll.current) {
      if (absDx > absDy && absDx > THRESH) {
        // start horizontal dragging
        isDragging.current = true;
        try {
          el.setPointerCapture(e.pointerId);
          activePointerId.current = e.pointerId;
        } catch {}
        // reset start for smooth drag
        startX.current = e.clientX;
        startScroll.current = el.scrollLeft;
      } else if (absDy > absDx && absDy > THRESH) {
        // vertical gesture -> let browser handle scrolling
        verticalScroll.current = true;
        try {
          el.releasePointerCapture(e.pointerId);
        } catch {}
        return;
      } else {
        return;
      }
    }

    if (isDragging.current) {
      const walk = (e.clientX - startX.current) * 1; // sensitivity
      el.scrollLeft = startScroll.current - walk;
      e.preventDefault();
      pauseUntil.current = Date.now() + PAUSE_AFTER_INTERACTION_MS;
    }
  };

  const stopDragging = (e?: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging.current && !activePointerId.current) return;
    isDragging.current = false;
    verticalScroll.current = false;
    const el = trackRef.current;
    if (!el) return;
    const pid = e?.pointerId ?? activePointerId.current;
    if (pid != null) {
      try {
        el.releasePointerCapture(pid);
      } catch {}
    }
    activePointerId.current = null;
    pauseUntil.current = Date.now() + PAUSE_AFTER_INTERACTION_MS;
  };

  useEffect(() => {
    const step = (ts: number) => {
      if (!lastTs.current) lastTs.current = ts;
      const dt = (ts - (lastTs.current || ts)) / 1000;
      lastTs.current = ts;

      const el = trackRef.current;
      if (el && !isDragging.current && Date.now() > pauseUntil.current) {
        const distance = SPEED_PX_PER_SEC * dt;
        el.scrollLeft += distance;

        // seamless loop: when we've scrolled past half (duplicated content), rewind
        const half = el.scrollWidth / 2;
        if (el.scrollLeft >= half) {
          el.scrollLeft -= half;
        }
      }

      rafRef.current = requestAnimationFrame(step);
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      className="relative overflow-hidden bg-[#f6f3ee] text-black"
      style={{ height: 'calc(var(--vh, 1vh) * 100)', minHeight: '60vh' }}
    >
      <div className="relative flex h-full items-center px-6 md:px-12">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-transparent from-[#f6f3ee] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-transparent from-[#f6f3ee] to-transparent" />

        <div
          ref={trackRef}
          className="flex w-max items-center gap-6 overflow-x-auto"
          style={{ scrollBehavior: 'auto', WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={stopDragging}
          onPointerCancel={stopDragging}
          onPointerLeave={stopDragging}
        >
          {duplicatedPhotos.map((photo, index) => (
            <div
              key={`${photo.src}-${index}`}
              className="group relative h-[68vh] w-[86vw] shrink-0 overflow-hidden sm:w-[48vw] md:h-[72vh] md:w-[36vw]"
              style={{ minHeight: '220px' }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                loading="lazy"
                decoding="async"
                className="object-cover"
                draggable={false}
                sizes="(max-width: 768px) 85vw, 36vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}