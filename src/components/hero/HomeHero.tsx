// import Image from "next/image";
"use client"
import { CldImage } from "next-cloudinary";

export default function HomeHero() {
  return (
    <section className="relative w-full overflow-hidden bg-black min-h-screen sm:aspect-[16/11] lg:aspect-[16/9] px-6 sm:px-10 md:px-20 lg:px-24">

      {/* IMAGE */}
      <CldImage
        src="Artboard_1_jgoyzb"
        alt="Hero banner featuring styled food photography by Konrad Kalinowski"
        fill
        sizes="100vw"
        priority
        className="object-cover object-center sm:object-[30%_center] lg:object-[20%_center]"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT CONTAINER */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">

        {/* TEXT BLOCK */}
        <div className="max-w-[900px] mx-auto text-right text-white md:pr-0">

          <h1 className="font-light leading-[0.9] text-5xl sm:text-6xl lg:text-7xl uppercase">
            Konrad <br />
            Kalinowski
          </h1>

          <p className="tracking-[0.4em] text-white/70 text-xs sm:text-sm mb-4">
            Photography
          </p>

          <p className="mt-6 tracking-[0.3em] text-xs sm:text-sm text-neutral-300">
            FOOD, DRINKS & PEOPLE
          </p>

        </div>

      </div>

      {/* SCROLL INDICATOR */}
      <div aria-hidden="true" className="scroll-indicator absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-xs sm:text-sm tracking-[0.3em]">
        SCROLL
      </div>

    </section>
  );
}