import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* IMAGE */}
      <Image
        src="/images/hero/konrad-kalinowski-food-hero1.jpg"
        alt="Hero banner featuring styled food photography by Konrad Kalinowski"
        fill
        priority
        className="object-cover object-left"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT CONTAINER */}
      <div className="relative z-10 flex h-full w-full items-center justify-end px-10 md:px-20">

        {/* TEXT BLOCK */}
        <div className="max-w-[900px] text-right text-white">

          <p className="tracking-[0.4em] text-[0.6rem] md:text-xs mb-4 text-neutral-300">
            KONRAD KALINOWSKI
          </p>

          <h1 className="
            font-light
            leading-[0.9]
            text-[clamp(2rem,5vw,5rem)]
            uppercase
          ">
            Food <br />
            Photography
          </h1>

          <p className="mt-6 tracking-[0.3em] text-[0.6rem] md:text-xs text-neutral-300">
            FOR RESTAURANTS, CAFES AND BARS
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