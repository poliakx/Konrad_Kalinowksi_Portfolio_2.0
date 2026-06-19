import CldStaticImage from "@/src/components/ui/CldStaticImage";
import Link from "next/link";

export default function FooterShowcase() {
  return (
    <section className="relative bg-white pt-14 pb-6 md:pt-20 md:pb-0">

      {/* Mobile: inset card with rounded corners */}
      {/* Desktop: full-bleed */}
      <Link
        href="/projects"
        aria-label="Open Projects"
        className="group block relative mx-4 overflow-hidden rounded-2xl h-[78vw] sm:h-[60vw] md:mx-0 md:rounded-none md:h-[38rem] lg:h-[46rem]"
      >
        <CldStaticImage
          src="footer-photo_qufa7h"
          alt="Featured portfolio preview image from Konrad Kalinowski projects"
          fill
          loading="lazy"
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.02]"
          sizes="100vw"
        />

        {/* Mobile: always-visible bottom label */}
        <div className="absolute inset-x-0 bottom-0 md:hidden bg-gradient-to-t from-black/65 to-transparent pt-14 pb-5 px-5 flex items-end justify-between">
          <span className="text-white text-xs uppercase tracking-[0.2em] font-light">Open Projects</span>
          <svg width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden="true" className="text-white mb-0.5">
            <path d="M1 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Desktop: hover overlay */}
        <div className="hidden md:flex absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white text-sm uppercase tracking-[0.2em] font-light">
            Open Projects
          </span>
        </div>
      </Link>

    </section>
  );
}
