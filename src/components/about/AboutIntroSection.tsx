"use client";

import { CldImage } from "next-cloudinary";

export default function AboutIntroSection() {
  return (
    <section className="flex flex-1 items-center bg-[#f7f5f1] text-[#171310]">
      <div className="mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-6 px-8 pb-12 pt-28 sm:px-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:px-16 lg:pb-12 lg:pt-28 xl:px-20">
        <div className="flex items-center">
          <div className="max-w-[420px]">
            <p className="text-[0.68rem] uppercase tracking-[0.28em] text-[#6f655c]">
              About Me
            </p>

            <h1 className="mt-4 max-w-[13ch] text-[clamp(1.7rem,3.2vw,2.9rem)] font-light leading-[1.02] text-[#171310]">
              Visual Storytelling
            </h1>

            <p className="mt-5 max-w-[38ch] text-[clamp(0.86rem,0.9vw,0.96rem)] leading-[1.55] text-[#3f3934]">
              I am Konrad Kalinowski, a photographer focused on food, hospitality,
              and editorial visual work. I build clean compositions where texture,
              light, and atmosphere tell the story before a single word appears.
            </p>

            <p className="mt-3 max-w-[38ch] text-[clamp(0.86rem,0.9vw,0.96rem)] leading-[1.55] text-[#3f3934]">
              My approach is minimal and intentional: every frame should feel
              precise, emotional, and modern, while still true to the personality
              of the brand behind it.
            </p>

            <p className="mt-6 text-[0.66rem] uppercase tracking-[0.22em] text-[#171310]">
              Konrad
            </p>
          </div>
        </div>

        <div className="flex h-full justify-start lg:justify-center">
          <div className="relative aspect-square w-full max-w-[400px] lg:max-w-[430px]">
          <CldImage
            src="Artboard_1_jgoyzb"
            alt="Konrad Kalinowski holding a camera in an open field"
            fill
            priority
            sizes="(max-width: 1024px) min(100vw - 4rem, 400px), 430px"
            className="object-cover object-[58%_center]"
          />

          </div>
        </div>
      </div>
    </section>
  );
}
