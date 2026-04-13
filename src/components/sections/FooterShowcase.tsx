import Image from "next/image";
import Link from "next/link";

export default function FooterShowcase() {
  return (
    <section className="relative overflow-hidden pt-20 bg-[#f6f3ee] text-[#18130f]">
      <div className="absolute -left-12 top-20 h-44 w-44 rounded-full bg-[#dcc8b6]/35 blur-3xl" />
      <div className="absolute -right-12 bottom-8 h-56 w-56 rounded-full bg-[#cfb39a]/30 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-4 pb-12 md:px-10 md:py-16">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <div className="md:pt-2 pb-8 md:pb-12 lg:pb-16">
            <blockquote className="relative max-w-3xl text-[clamp(1.4rem,3.6vw,2.5rem)] pt-4 pb-4 pl-10 pr-10 font-light leading-[1.06] md:text-[clamp(1.6rem,3vw,2.6rem)]">
              <span
                className="absolute left-3 text-[1.8em] text-black pointer-events-none"
                style={{ top: 0, transform: "translateY(-20%)", lineHeight: 0.9 }}
              >
                “
              </span>
              <span className="inline">Photography that goes beyond the lens - capturing the story of food, people, places and the moments that connect them.</span>
              <span
                className="absolute right-3 text-[1.8em] text-black pointer-events-none"
                style={{ bottom: 0, transform: "translateY(20%)", lineHeight: 0.9 }}
              >
                ”
              </span>
            </blockquote>

            <Link
              href="/projects"
              className="mt-10 md:mt-14 lg:mt-16 inline-flex items-center justify-center rounded-md border border-[#18130f] bg-[#18130f] px-6 py-2 text-xs md:px-8 md:py-3 md:text-sm uppercase tracking-[0.24em] text-white transition-colors hover:opacity-80"
            >
              Open Projects
            </Link>
          </div>

          <div className="relative block overflow-hidden rounded-lg border border-[#18130f]/10 bg-[#e9e0d7]">
            <div className="relative pb-6 h-[44vw] sm:h-[38vw] md:h-[28rem] lg:h-[34rem]">
              <Image
                src="/images/footer/footer-photo.jpg"
                alt="Featured portfolio preview image from Konrad Kalinowski projects"
                fill
                loading="lazy"
                decoding="async"
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}