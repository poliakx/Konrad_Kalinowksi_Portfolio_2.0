import Image from "next/image";
import Link from "next/link";

export default function FooterShowcase() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#f6f3ee] text-[#18130f]">
      <div className="absolute -left-14 top-24 h-56 w-56 rounded-full bg-[#dcc8b6]/45 blur-3xl" />
      <div className="absolute -right-16 bottom-12 h-72 w-72 rounded-full bg-[#cfb39a]/35 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-12 md:px-10 md:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <p className="mb-5 text-[0.7rem] uppercase tracking-[0.34em] text-[#766457]">
              Final section
            </p>
            <blockquote className="max-w-3xl text-4xl font-light leading-[1.05] md:text-6xl">
              "Every project tells a unique visual story."
            </blockquote>
            <p className="mt-6 max-w-xl text-sm leading-7 text-[#584c43] md:text-base">
              Creative direction and visual design crafted to bring brands and ideas to life with premium, modern storytelling.
            </p>

            <Link
              href="/projects"
              className="mt-8 inline-flex items-center justify-center border border-[#18130f] bg-[#18130f] px-6 py-3 text-[0.68rem] uppercase tracking-[0.28em] text-white transition-colors hover:opacity-80"
            >
              Open Projects
            </Link>
          </div>

          <Link
            href="/projects"
            className="group relative block overflow-hidden rounded-[1.2rem] border border-[#18130f]/10 bg-[#e9e0d7]"
            aria-label="Check out my projects"
          >
            <div className="relative h-[22rem] md:h-[29rem]">
              <Image
                src="/images/footer/footer-photo.jpg"
                alt="Featured portfolio preview image from Konrad Kalinowski projects"
                fill
                loading="lazy"
                decoding="async"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <p className="text-[0.68rem] uppercase tracking-[0.28em] text-white/80">
                  Featured project preview
                </p>
                <span className="border border-white/60 px-4 py-2 text-[0.6rem] uppercase tracking-[0.24em] text-white">
                  View
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}