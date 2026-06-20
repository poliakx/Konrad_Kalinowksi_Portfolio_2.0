import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

import HomeHero from "@/src/components/hero/HomeHero";
import FooterShowcase from "@/src/components/sections/FooterShowcase";
import HomeIntroSection from "@/src/components/sections/HomeIntroSection";
import PhotoSlider from "@/src/components/slider/PhotoSlider";
import { getSliderPhotos } from "@/src/lib/cloudinary";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: { absolute: t("homeTitle") },
    description: t("homeDescription"),
    openGraph: {
      title: t("homeTitle"),
      description: t("homeDescription"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("homeTitle"),
      description: t("homeDescription"),
    },
  };
}

export default async function Home() {
  const sliderPhotos = await getSliderPhotos();

  return (
    <>
      <HomeHero />
      <PhotoSlider photos={sliderPhotos} />
      <HomeIntroSection />
      <FooterShowcase />
    </>
  );
}
