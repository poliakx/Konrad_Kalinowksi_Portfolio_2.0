import CldStaticImage from "@/src/components/ui/CldStaticImage";
import Link from "next/link";

export default function FooterShowcase() {
  return (
    <section className="relative">

      <div className="group relative w-full overflow-hidden h-[100svh] sm:h-[60vw] md:h-[38rem] lg:h-[46rem]">
        <CldStaticImage
          src="footer-photo_qufa7h"
          alt="Featured portfolio preview image from Konrad Kalinowski projects"
          fill
          loading="lazy"
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.02]"
          sizes="100vw"
        />

        {/* Hover overlay — text centered over full image, desktop only */}
        <div className="absolute inset-0 bg-black/0 md:group-hover:bg-black/50 transition-colors duration-500 pointer-events-none flex items-center justify-center">
          <div className="text-center px-6 w-full max-w-4xl opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
            <p className="text-white/70 text-xs uppercase tracking-[0.25em] font-light mb-3">
              Let&apos;s work together
            </p>
            <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              Food, Drinks & People<br /> Photography.
            </h2>
          </div>
        </div>

        {/* Bottom gradient — always visible */}
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent h-1/3 pointer-events-none" />

        {/* Get in Touch button — always visible, bottom right */}
        <div className="absolute bottom-7 right-6 sm:bottom-8 sm:right-10 md:bottom-12 md:right-14">
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 border border-white bg-transparent px-6 py-3 text-sm uppercase tracking-[0.18em] text-white transition-opacity hover:opacity-70 whitespace-nowrap"
          >
            Get in Touch
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true">
              <path d="M1 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>

    </section>
  );
}
