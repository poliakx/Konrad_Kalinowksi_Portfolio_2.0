import Image from "next/image";
import Link from "next/link";

export default function FooterShowcase() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-[#f6f3ee] text-[#18130f]">
      <div className="absolute -left-12 top-20 h-44 w-44 rounded-full bg-[#dcc8b6]/35 blur-3xl" />
      <div className="absolute -right-12 bottom-8 h-56 w-56 rounded-full bg-[#cfb39a]/30 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1.4fr_0.6fr] lg:gap-16">

          <div className="relative overflow-hidden rounded-lg border border-[#18130f]/10 bg-[#e9e0d7]">
            <div className="relative h-[62vw] sm:h-[48vw] md:h-[32rem] lg:h-[40rem]">
              <Image
                src="/images/footer/footer-photo.jpg"
                alt="Featured portfolio preview image from Konrad Kalinowski projects"
                fill
                loading="lazy"
                decoding="async"
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
              />
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 md:pl-4 lg:pl-8">
            <p className="text-[0.65rem] uppercase tracking-[0.32em] text-[#6f6257]">
              Portfolio
            </p>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-md border border-[#18130f] bg-[#18130f] px-6 py-2 text-xs md:px-8 md:py-3 md:text-sm uppercase tracking-[0.24em] text-white transition-colors hover:opacity-80"
            >
              Open Projects
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
