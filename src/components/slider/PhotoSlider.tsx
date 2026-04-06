"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

// Auto-enable the auto-scroll while in development (localhost).
// Toggle to `false` to disable the auto-scroll while debugging on device.
const ENABLE_AUTO_SCROLL = true;

const SPEED_PX_PER_SEC = 40;

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
  // Always duplicate photos to allow seamless continuous looping.
  const duplicatedPhotos = [...photos, ...photos];
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const rafRef = useRef<number | null>(null);
  const lastTs = useRef<number | null>(null);

  useEffect(() => {
    if (!ENABLE_AUTO_SCROLL) return;
    const speed = ((): number => {
      if (typeof window === "undefined") return SPEED_PX_PER_SEC;
      const mobile = window.matchMedia?.("(max-width: 768px)").matches || "ontouchstart" in window;
      return mobile ? SPEED_PX_PER_SEC * 0.55 : SPEED_PX_PER_SEC;
    })();

    // keep isMobile state for responsive image quality/sizes
    if (typeof window !== "undefined") {
      const mq = window.matchMedia?.("(max-width: 768px)");
      const update = () => setIsMobile(!!(mq ? mq.matches : ("ontouchstart" in window)));
      update();
      mq?.addEventListener?.("change", update);
      // cleanup will remove listener later
    }

    // Use transform-based animation for smoother GPU-accelerated motion (better on mobile Safari).
    const step = (ts: number) => {
      if (lastTs.current === null) lastTs.current = ts;

      const dt = (ts - lastTs.current) / 1000;
      lastTs.current = ts;

      const el = trackRef.current;
      if (el) {
        const half = el.scrollWidth / 2 || 0;

        // store current translate in data attribute to avoid reflows reading computedStyle
        let pos = Number(el.dataset.translateX) || 0;
        pos -= speed * dt;

        if (half && Math.abs(pos) >= half) {
          pos += half * Math.floor(Math.abs(pos) / half);
        }

        el.dataset.translateX = String(pos);
        el.style.transform = `translate3d(${pos}px,0,0)`;
      }

      rafRef.current = requestAnimationFrame(step);
    };

    // ensure will-change is set for smoother animation
    if (trackRef.current) trackRef.current.style.willChange = "transform";

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
      rafRef.current = null;
      lastTs.current = null;
    };
  }, []);

  // Set --vh CSS variable to handle mobile browser chrome (address bar) resizing.
  // `--vh` is now set globally by `SetVh` in the layout.

    return (
    <section
      id="slider-section"
      className="relative overflow-hidden bg-[#f6f3ee] text-black min-h-screen pt-4 pb-6 md:pt-[7rem] md:pb-12 lg:pt-32 lg:pb-16"
    >
      <div className="relative flex h-full items-center justify-center md:justify-start px-6 md:px-12">
        <div className="hidden md:block pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-[#f6f3ee] to-transparent" />
        <div className="hidden md:block pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-[#f6f3ee] to-transparent" />

        <div className="w-full overflow-hidden h-full px-4 md:px-0 flex items-center" ref={viewportRef}>
          <div
            ref={trackRef}
            className="flex w-max items-center gap-4 md:gap-6"
            style={{ WebkitOverflowScrolling: "touch", overscrollBehavior: "auto" }}
          >
            {duplicatedPhotos.map((photo, index) => (
              <div
                key={`${photo.src}-${index}`}
                className="relative h-[50vh] w-[80vw] shrink-0 overflow-hidden sm:w-[48vw] md:aspect-[4/3] md:h-[72vh] md:w-[36vw]"
                style={{ minHeight: "220px" }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding="async"
                  className="object-cover object-center"
                  draggable={false}
                  sizes="(max-width: 640px) 95vw, (max-width: 1024px) 48vw, 36vw"
                  quality={isMobile ? 60 : 80}
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}