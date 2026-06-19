import Link from "next/link";

export default function HomeIntroSection() {
  return (
    <section className="bg-[#f7f5f1] py-20 md:py-28 px-6 sm:px-10">
      <div className="max-w-2xl mx-auto text-center">

        <p className="text-[0.68rem] uppercase tracking-[0.34em] text-[#6f6257] mb-8">
          The work
        </p>

        <p className="text-xl sm:text-2xl md:text-3xl font-light leading-relaxed text-[#171310]">
          I focus on the story of the place — the details, the light, the identity of the venue.
          As a photographer with a chef&apos;s background, I understand what makes a dish worth remembering.
        </p>

        <Link
          href="/about"
          className="mt-10 inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.28em] text-[#6f6257] hover:text-[#171310] transition-colors"
        >
          About Konrad
          <svg width="14" height="9" viewBox="0 0 16 10" fill="none" aria-hidden="true">
            <path d="M1 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>

      </div>
    </section>
  );
}
