import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/src/i18n/navigation";
import CldStaticImage from "@/src/components/ui/CldStaticImage";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("projectsTitle"),
    description: t("projectsDescription"),
    openGraph: {
      title: `${t("projectsTitle")} | Konrad Kalinowski`,
      description: t("projectsDescription"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("projectsTitle")} | Konrad Kalinowski`,
      description: t("projectsDescription"),
    },
  };
}

export default async function ProjectsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Projects" });

  return (
    <section className="bg-[#f7f5f1] px-6 text-[#171310] md:px-10 min-h-[calc(100svh-(6rem+env(safe-area-inset-top)))] pt-[calc(6rem+env(safe-area-inset-top))] pb-4 md:pt-24 md:min-h-auto md:pb-24">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid gap-6 md:gap-8 lg:grid-cols-2">
          <Link
            href="/projects/food-photo"
            className="group relative block overflow-hidden rounded-2xl border border-[#171310]/10 bg-[#ece7e0]"
          >
            <div className="relative h-[26rem] md:h-[34rem]">
              <CldStaticImage
                src="food-photo_acw1ob"
                alt="Food photography project collection cover image"
                fill
                loading="eager"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.26em] text-white/75">
                    {t("collection")}
                  </p>
                  <h2 className="mt-2 text-2xl font-light uppercase tracking-[0.08em] text-white md:text-3xl">
                    {t("food")}
                  </h2>
                  <p className="mt-1.5 text-[0.62rem] text-white/55 tracking-[0.12em] font-light">
                    {t("foodSub")}
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link
            href="/projects/other-projects"
            className="group relative block overflow-hidden rounded-2xl border border-[#171310]/10 bg-[#ece7e0]"
          >
            <div className="relative h-[26rem] md:h-[34rem]">
              <CldStaticImage
                src="20-5_aujjgr_lbpydf"
                alt="Other creative projects collection cover image"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.26em] text-white/75">
                    {t("collection")}
                  </p>
                  <h2 className="mt-2 text-2xl font-light uppercase tracking-[0.08em] text-white md:text-3xl">
                    {t("places")}
                  </h2>
                  <p className="mt-1.5 text-[0.62rem] text-white/55 tracking-[0.12em] font-light">
                    {t("placesSub")}
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link
            href="/projects/people"
            className="group relative block overflow-hidden rounded-2xl border border-[#171310]/10 bg-[#ece7e0]"
          >
            <div className="relative h-[26rem] md:h-[34rem]">
              <CldStaticImage
                src="ARCZI_PROFIL_whdxb0_ctpeup"
                alt="People photography project collection cover image"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.26em] text-white/75">
                    {t("collection")}
                  </p>
                  <h2 className="mt-2 text-2xl font-light uppercase tracking-[0.08em] text-white md:text-3xl">
                    {t("people")}
                  </h2>
                  <p className="mt-1.5 text-[0.62rem] text-white/55 tracking-[0.12em] font-light">
                    {t("peopleSub")}
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link
            href="/projects/drinks"
            className="group relative block overflow-hidden rounded-2xl border border-[#171310]/10 bg-[#ece7e0]"
          >
            <div className="relative h-[26rem] md:h-[34rem]">
              <CldStaticImage
                src="WARMUT_DRINK_rssirp_1_ixmiwe"
                alt="Drinks photography project collection cover image"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
                <div>
                  <p className="text-[0.68rem] uppercase tracking-[0.26em] text-white/75">
                    {t("collection")}
                  </p>
                  <h2 className="mt-2 text-2xl font-light uppercase tracking-[0.08em] text-white md:text-3xl">
                    {t("drinks")}
                  </h2>
                  <p className="mt-1.5 text-[0.62rem] text-white/55 tracking-[0.12em] font-light">
                    {t("drinksSub")}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
