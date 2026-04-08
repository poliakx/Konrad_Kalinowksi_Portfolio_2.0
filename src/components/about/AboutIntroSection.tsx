"use client";

import { CldImage } from "next-cloudinary";

export default function AboutIntroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#f6f3ee] py-12 px-6">
      <div className="w-full max-w-5xl">
        <div className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(16,24,40,0.08)] overflow-hidden md:flex md:items-stretch">
          {/* Image column */}
          <div className="md:w-1/2 bg-gray-50 flex items-center justify-center p-6">
            <div className="w-full h-[56vw] sm:h-[48vw] rounded-lg overflow-hidden relative md:max-w-[520px] md:w-[520px] md:aspect-square">
              <CldImage
                src="ZDJECIEKONRAD_ycdawd"
                alt="Konrad Kalinowski holding a camera"
                fill
                priority
                sizes="(max-width: 1024px) 45vw, 520px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Text column */}
          <div className="md:w-1/2 p-6 md:p-12 flex items-center">
            <div className="w-full">
              <h1 className="text-3xl md:text-5xl font-light leading-tight text-[#171310] mb-4">
                 Hello there!
              </h1>

              <p className="text-base md:text-xl font-medium text-[#171310] max-w-[42ch] mb-4">
                 I am Konrad Kalinowski. In my photography, I focus on the story of the place, the details, and the identity of the venue — images that not only resonate with regular guests but also capture the attention of new ones.
              </p>

              <p className="text-sm leading-relaxed text-[#53483f] max-w-[56ch] mb-4">
                 Whether you want to improve your menu, strengthen your social media presence, or build a cohesive visual identity, photography is a powerful tool that highlights your culinary skills and supports the growth of your business. I’d love to tell the story of your place through tailored food photography.
              </p>

              <p className="text-sm leading-relaxed text-[#53483f] max-w-[56ch] mb-6">
                 <strong>Why me?</strong> Because I combine the experience of a professional chef with the work of a photographer, I truly understand the needs of restaurateurs when it comes to capturing the perfect shot.
              </p>

              <div>
                <a href="/contact" className="w-full md:w-auto text-center rounded-full border border-[#171310] text-[#171310] px-6 py-3 text-sm hover:opacity-90 transition md:bg-[#171310] md:text-white">Get in touch</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
