"use client";

import { CldImage } from "next-cloudinary";

export default function AboutIntroSection() {
  return (
    <section className="bg-[#f7f5f1] px-4 pt-[calc(4rem+env(safe-area-inset-top))] pb-8 md:px-8 md:pt-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative mx-auto w-full">
          <section className="relative overflow-hidden border border-[#171310]/12 bg-[#f6f2ec]/95 shadow-[0_18px_60px_rgba(23,19,16,0.08)]">
            <div className="grid lg:grid-cols-[1fr_1.08fr]">
              <div className="relative hidden lg:block lg:min-h-[360px]">
                <div className="absolute inset-0">
                  <CldImage
                    src="ZDJECIEKONRAD_ycdawd"
                    alt="Konrad Kalinowski holding a camera"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 0px, 44vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/20 to-transparent" />
              </div>

              <div className="flex min-h-[40vh] md:min-h-[460px] flex-col p-4 md:p-8 lg:p-12 items-start justify-start text-left">
                <p className="mb-3 text-[0.68rem] uppercase tracking-[0.34em] text-[#6f6257]">About me</p>

                <p className="mt-4 max-w-[86vw] text-[calc(12px+1.2vw)] leading-6 text-[#5f5348] md:text-sm md:max-w-sm">
                  In my photography, I focus on the story of the place, the details, and the identity of the venue — images that not only resonate with regular guests but also capture the attention of new ones.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-[#53483f] max-w-[56ch]">
                  Whether you want to improve your menu, strengthen your social media presence, or build a cohesive visual identity, photography is a powerful tool that highlights your culinary skills and supports the growth of your business. I’d love to tell the story of your place through tailored food photography.
                </p>

                <p className="mt-4 text-sm leading-relaxed text-[#53483f] max-w-[56ch]">
                  <strong>Why me?</strong>
                </p>

                <p className="mt-2 text-sm leading-relaxed text-[#53483f] max-w-[56ch]">
                  Because I combine the experience of a professional chef with the work of a photographer, I truly understand the needs of restaurateurs when it comes to capturing the perfect shot.
                </p>

                <div className="mt-6 max-w-[92vw] md:mt-8 md:max-w-xl">
                  <a href="/contact" className="inline-flex w-fit items-center justify-center border border-[#171310] bg-[#171310] px-7 py-3 text-[0.68rem] uppercase tracking-[0.24em] text-white transition-colors hover:opacity-80">
                    Get in touch
                  </a>
                </div>
              </div>
            </div>
          </section>
          <div className="mt-4 flex items-center justify-between border-t border-[#171310]/12 pt-2 text-[0.62rem] uppercase tracking-[0.22em] text-[#6f6257]">
          <p>Konrad Kalinowski</p>
          </div>
        </div>
      </div>
    </section>
  );
}
