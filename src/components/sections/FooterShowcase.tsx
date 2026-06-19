import CldStaticImage from "@/src/components/ui/CldStaticImage";
import Link from "next/link";

export default function FooterShowcase() {
  return (
    <section className="relative bg-white pt-14 md:pt-20">

      {/* Full-bleed image — links to projects */}
      <Link href="/projects" aria-label="Open Projects" className="group block relative w-full overflow-hidden h-[68vw] sm:h-[55vw] md:h-[38rem] lg:h-[46rem]">
        <CldStaticImage
          src="footer/footer-photo"
          alt="Featured portfolio preview image from Konrad Kalinowski projects"
          fill
          loading="lazy"
          className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-[1.02]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-white text-sm uppercase tracking-[0.2em] font-light">
            Open Projects
          </span>
        </div>
      </Link>

    </section>
  );
}
