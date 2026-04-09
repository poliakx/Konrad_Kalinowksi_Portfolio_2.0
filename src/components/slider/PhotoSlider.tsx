"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const ENABLE_AUTO_SCROLL = true;
const SPEED_PX_PER_SEC = 50;

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

  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const rafRef = useRef<number | null>(null);
  const lastTs = useRef<number | null>(null);

  const [isMobile, setIsMobile] = useState(false);

  // manual hold / drag state
  const pointerDownRef = useRef(false);
  const isDraggingRef = useRef(false);
  const isHoldingRef = useRef(false);

  const startXRef = useRef(0);
  const startYRef = useRef(0);
  const startTranslateRef = useRef(0);

  // inertia
  const velocityRef = useRef(0);
  const lastPointerXRef = useRef(0);
  const lastPointerTsRef = useRef(0);
  const inertiaVelocityRef = useRef(0);

  // touchpad / wheel gesture
  const wheelHoldTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const DRAG_THRESHOLD_PX = 8;
  const INERTIA_FRICTION = 0.92;
  const MIN_INERTIA_SPEED = 8;

  const normalizeTranslate = (value: number, half: number) => {
    if (!half) return value;

    let next = value;

    while (next <= -half) next += half;
    while (next > 0) next -= half;

    return next;
  };

  const setTranslate = (value: number) => {
    const el = trackRef.current;
    if (!el) return;

    const half = el.scrollWidth / 2 || 0;
    const normalized = normalizeTranslate(value, half);

    el.dataset.translateX = String(normalized);
    el.style.transform = `translate3d(${normalized}px, 0, 0)`;
  };

  useEffect(() => {
    if (!ENABLE_AUTO_SCROLL) return;

    const speed = (() => {
      if (typeof window === "undefined") return SPEED_PX_PER_SEC;
      const mobile =
        window.matchMedia?.("(max-width: 768px)").matches || "ontouchstart" in window;
      return mobile ? SPEED_PX_PER_SEC * 0.55 : SPEED_PX_PER_SEC;
    })();

    let mq: MediaQueryList | undefined;
    let update: (() => void) | undefined;

    if (typeof window !== "undefined") {
      mq = window.matchMedia?.("(max-width: 768px)");
      update = () => setIsMobile(!!(mq ? mq.matches : "ontouchstart" in window));
      update();
      mq?.addEventListener?.("change", update as EventListener);
    }

    const step = (ts: number) => {
      if (lastTs.current === null) lastTs.current = ts;

      const dt = (ts - lastTs.current) / 1000;
      lastTs.current = ts;

      const el = trackRef.current;
      if (!el) {
        rafRef.current = requestAnimationFrame(step);
        return;
      }

      let pos = Number(el.dataset.translateX) || 0;

      // поки користувач утримує або drag-ає — автоскрол стоїть
      if (isHoldingRef.current || isDraggingRef.current) {
        rafRef.current = requestAnimationFrame(step);
        return;
      }

      // інерція після drag / touchpad swipe
      if (Math.abs(inertiaVelocityRef.current) > MIN_INERTIA_SPEED) {
        pos += inertiaVelocityRef.current * dt;
        inertiaVelocityRef.current *= Math.pow(INERTIA_FRICTION, dt * 60);
        setTranslate(pos);

        rafRef.current = requestAnimationFrame(step);
        return;
      }

      inertiaVelocityRef.current = 0;

      // звичайний auto-scroll
      pos -= speed * dt;
      setTranslate(pos);

      rafRef.current = requestAnimationFrame(step);
    };

    if (trackRef.current) {
      trackRef.current.style.willChange = "transform";
      trackRef.current.dataset.translateX ??= "0";
    }

    rafRef.current = requestAnimationFrame(step);

    return () => {
      mq?.removeEventListener?.("change", update as EventListener);

      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }

      if (wheelHoldTimeoutRef.current) {
        clearTimeout(wheelHoldTimeoutRef.current);
      }

      rafRef.current = null;
      lastTs.current = null;
      pointerDownRef.current = false;
      isDraggingRef.current = false;
      isHoldingRef.current = false;
      velocityRef.current = 0;
      inertiaVelocityRef.current = 0;
    };
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;

    pointerDownRef.current = true;
    isDraggingRef.current = false;
    isHoldingRef.current = true;

    startXRef.current = e.clientX;
    startYRef.current = e.clientY;
    startTranslateRef.current = Number(track.dataset.translateX) || 0;

    lastPointerXRef.current = e.clientX;
    lastPointerTsRef.current = performance.now();
    velocityRef.current = 0;
    inertiaVelocityRef.current = 0;

    viewport.setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!pointerDownRef.current) return;

    const dx = e.clientX - startXRef.current;
    const dy = e.clientY - startYRef.current;

    if (!isDraggingRef.current) {
      const absX = Math.abs(dx);
      const absY = Math.abs(dy);

      if (absX < DRAG_THRESHOLD_PX && absY < DRAG_THRESHOLD_PX) {
        return;
      }

      // якщо користувач пішов вертикально — просто відпускаємо hold
      // щоб сторінка могла скролитись нормально
      if (absY > absX) {
        pointerDownRef.current = false;
        isHoldingRef.current = false;

        const viewport = viewportRef.current;
        if (viewport?.hasPointerCapture?.(e.pointerId)) {
          viewport.releasePointerCapture(e.pointerId);
        }
        return;
      }

      isDraggingRef.current = true;
    }

    const nextTranslate = startTranslateRef.current + dx;
    setTranslate(nextTranslate);

    const now = performance.now();
    const deltaX = e.clientX - lastPointerXRef.current;
    const deltaT = (now - lastPointerTsRef.current) / 1000;

    if (deltaT > 0) {
      velocityRef.current = deltaX / deltaT;
    }

    lastPointerXRef.current = e.clientX;
    lastPointerTsRef.current = now;
  };

  const finishPointerGesture = (pointerId?: number) => {
    const viewport = viewportRef.current;

    if (pointerId !== undefined && viewport?.hasPointerCapture?.(pointerId)) {
      viewport.releasePointerCapture(pointerId);
    }

    const wasDragging = isDraggingRef.current;

    pointerDownRef.current = false;
    isDraggingRef.current = false;
    isHoldingRef.current = false;

    if (wasDragging) {
      inertiaVelocityRef.current = velocityRef.current;
    } else {
      velocityRef.current = 0;
    }

    lastTs.current = null;
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    finishPointerGesture(e.pointerId);
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    finishPointerGesture(e.pointerId);
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;

    const absX = Math.abs(e.deltaX);
    const absY = Math.abs(e.deltaY);

    // тільки горизонтальний жест тачпаду
    if (absX <= absY || absX === 0) return;

    e.preventDefault();

    // поки wheel gesture триває — вважаємо це hold
    isHoldingRef.current = true;
    inertiaVelocityRef.current = 0;

    const currentTranslate = Number(track.dataset.translateX) || 0;
    const nextTranslate = currentTranslate - e.deltaX;
    setTranslate(nextTranslate);

    if (wheelHoldTimeoutRef.current) {
      clearTimeout(wheelHoldTimeoutRef.current);
    }

    wheelHoldTimeoutRef.current = setTimeout(() => {
      isHoldingRef.current = false;
      lastTs.current = null;
    }, 90);
  };

  const handleContextMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    // щоб two-finger tap на тачпаді не відкривав меню браузера
    e.preventDefault();

    // коротко зупиняємо, поки йде сам жест
    isHoldingRef.current = true;

    if (wheelHoldTimeoutRef.current) {
      clearTimeout(wheelHoldTimeoutRef.current);
    }

    wheelHoldTimeoutRef.current = setTimeout(() => {
      isHoldingRef.current = false;
      lastTs.current = null;
    }, 90);
  };

  return (
    <section
      id="slider-section"
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#f6f3ee] pt-8 pb-6 sm:py-12 md:py-0 md:pt-[7rem] md:pb-12 lg:pt-32 lg:pb-16"
    >
      <div className="relative flex h-full items-center justify-start px-0 md:justify-start md:px-0">
        <div
          ref={viewportRef}
          className="flex h-full w-full items-center overflow-hidden px-0 cursor-grab active:cursor-grabbing"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          onWheel={handleWheel}
          onContextMenu={handleContextMenu}
          style={{
            touchAction: "pan-y",
          }}
        >
          <div
            ref={trackRef}
            className="flex w-max items-center gap-4 md:gap-6"
            style={{
              WebkitOverflowScrolling: "touch",
              overscrollBehavior: "none",
            }}
          >
            {duplicatedPhotos.map((photo, index) => (
              <div
                key={`${photo.src}-${index}`}
                className="relative w-[80vw] aspect-[3/4] shrink-0 overflow-hidden sm:w-[48vw] md:h-[72vh] md:w-[36vw] md:aspect-[4/3]"
                style={{ minHeight: "220px" }}
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  loading={index < 2 ? "eager" : "lazy"}
                  decoding="async"
                  className="pointer-events-none object-cover object-center"
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  style={{
                    WebkitTouchCallout: "none",
                    WebkitUserSelect: "none",
                    userSelect: "none",
                  }}
                  sizes="(max-width: 640px) 95vw, (max-width: 1024px) 48vw, 36vw"
                  quality={isMobile ? 60 : 80}
                  priority={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute left-0 top-0 z-50 hidden h-full w-24 bg-gradient-to-r from-[#f6f3ee] to-transparent md:block" />
      <div className="pointer-events-none absolute right-0 top-0 z-50 hidden h-full w-24 bg-gradient-to-l from-[#f6f3ee] to-transparent md:block" />
    </section>
  );
}