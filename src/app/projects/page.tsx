import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Browse project collections including food photography and other creative visual work by Konrad Kalinowski.",
  openGraph: {
    title: "Projects | Konrad Kalinowski",
    description:
      "Browse project collections including food photography and other creative visual work by Konrad Kalinowski.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Konrad Kalinowski",
    description:
      "Browse project collections including food photography and other creative visual work by Konrad Kalinowski.",
  },
};

export default function ProjectsPage() {
  return (
    <section className="min-h-screen bg-[#f7f5f1] px-6 pb-20 pt-24 text-[#171310] md:px-10 md:pb-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          <Link
            href="/projects/food-photo"
            className="group relative block overflow-hidden rounded-2xl border border-[#171310]/10 bg-[#ece7e0]"
          >
            <div className="relative h-[26rem] md:h-[34rem]">
              <Image
                src="/images/section-icons/food-photo.jpg"
                alt="Food photography project collection cover image"
                fill
                loading="lazy"
                decoding="async"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.26em] text-white/75">
                    Collection
                  </p>
                  <h2 className="mt-2 text-2xl font-light uppercase tracking-[0.08em] text-white md:text-3xl">
                    Food Photo
                  </h2>
                </div>
                <span className="rounded-full border border-white/35 px-4 py-2 text-[0.62rem] uppercase tracking-[0.25em] text-white">
                  Open
                </span>
              </div>
            </div>
          </Link>

          <Link
            href="/projects/other-projects"
            className="group relative block overflow-hidden rounded-2xl border border-[#171310]/10 bg-[#ece7e0]"
          >
            <div className="relative h-[26rem] md:h-[34rem]">
              <Image
                src="/images/section-icons/other-projects.jpg"
                alt="Other creative projects collection cover image"
                fill
                loading="lazy"
                decoding="async"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.26em] text-white/75">
                    Collection
                  </p>
                  <h2 className="mt-2 text-2xl font-light uppercase tracking-[0.08em] text-white md:text-3xl">
                    Other Projects
                  </h2>
                </div>
                <span className="rounded-full border border-white/35 px-4 py-2 text-[0.62rem] uppercase tracking-[0.25em] text-white">
                  Open
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
