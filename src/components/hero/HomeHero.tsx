// import Image from "next/image";
"use client"
import { CldImage } from "next-cloudinary";

export default function HomeHero() {
  return (
    <section className="relative w-full overflow-hidden bg-black aspect-[3/5] sm:aspect-[16/11] lg:aspect-[16/9] min-h-[70svh] max-h-screen">

      {/* IMAGE */}
      <CldImage
        src="Artboard_1_jgoyzb"
        alt="Hero banner featuring styled food photography by Konrad Kalinowski"
        fill
        sizes="100vw"
        priority
        className="object-cover object-[16%_center] sm:object-[30%_center] lg:object-[20%_center]"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 flex h-full w-full items-center justify-end px-6 sm:px-10 md:px-20">

        {/* TEXT BLOCK */}
        <div className="max-w-[900px] text-right text-white pr-[5%] md:pr-0">

          

          <h1 className="
            font-light
            leading-[0.9]
            text-[clamp(3rem,8vw,5rem)] sm:text-[clamp(2rem,5vw,5rem)]
            uppercase
          ">
            Konrad <br />
            Kalinowski
          </h1>
          <p className="tracking-[0.4em] text-sm md:text-xs mb-4 text-neutral-500">
            Photography
          </p>

          <p className="mt-6 tracking-[0.3em] text-sm md:text-xs text-neutral-300">
            FOOD, DRINKS & PEOPLE
          </p>

        </div>

      </div>

      {/* SCROLL INDICATOR */}
      <div
  aria-hidden="true"
  className=" scroll-indicator absolute bottom-[3vh] left-1/2 -translate-x-1/2 text-white text-[clamp(0.6rem,1vw,0.875rem)] tracking-[0.3em]"
>
  SCROLL
</div>

    </section>
  );
}