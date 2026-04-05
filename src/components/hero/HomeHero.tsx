
"use client"
import { useEffect } from "react";
import Link from "next/link";
import { CldImage } from "next-cloudinary";

export default function HomeHero() {
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight / 100}px`);
    };
    setVh();
    window.addEventListener('resize', setVh);
    return () => window.removeEventListener('resize', setVh);
  }, []);

  return (
    <section id="hero-section"
      className="relative w-full overflow-hidden bg-black px-6 sm:px-10 md:px-20 lg:px-24"
      style={{ height: 'calc(var(--vh, 1vh) * 100)' }}
    >

      {/* IMAGE */}
      <CldImage
        src="Artboard_1_jgoyzb"
        alt="Hero banner featuring styled food photography by Konrad Kalinowski"
        fill
        sizes="100vw"
        priority
        className="object-cover object-[40%_center] sm:object-[20%_center] lg:object-[0%_center]"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT CONTAINER */}
      <div className="absolute inset-0 z-10 flex items-center justify-end">

        {/* TEXT BLOCK */}
        <div className="max-w-[900px] mx-auto text-right text-white sm:pr-[5%] md:pr-0 transform lg:mx-0 lg:absolute lg:top-1/2 lg:right-[8%] lg:-translate-y-1/2">

          <h1 className="font-light leading-[0.9] text-5xl sm:text-[clamp(3rem,8vw,5rem)] lg:text-[clamp(2rem,5vw,5rem)] uppercase">
            Konrad <br />
            Kalinowski
          </h1>

          <p className="tracking-[0.4em] text-white/70 text-xs sm:text-sm md:text-sm mb-4 sm:text-neutral-500">
            Photography
          </p>

          <p className="mt-6 tracking-[0.3em] text-xs sm:text-sm md:text-xs text-neutral-300">
            FOOD, DRINKS & PEOPLE
          </p>

          {/* Mobile-only: Open Projects button (smaller, lower, transparent, white text and border) */}
          <div className="mt-8 sm:hidden flex justify-end">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center border border-white bg-transparent px-6 py-2 text-sm uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-80"
            >
              Open Projects
            </Link>
          </div>

        </div>

      </div>

      {/* SCROLL INDICATOR */}
      <div aria-hidden="true" className="scroll-indicator absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-xs sm:text-sm tracking-[0.3em]">
        SCROLL
      </div>

    </section>
  );
}