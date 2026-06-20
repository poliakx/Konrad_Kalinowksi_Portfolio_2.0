import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PhotoGallery from "@/src/components/gallery/PhotoGallery";
import { getGalleryPhotos } from "@/src/lib/cloudinary";

export const revalidate = 60;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("drinksTitle"),
    description: t("drinksDescription"),
    openGraph: {
      title: `${t("drinksTitle")} | Konrad Kalinowski`,
      description: t("drinksDescription"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("drinksTitle")} | Konrad Kalinowski`,
      description: t("drinksDescription"),
    },
  };
}

export default async function DrinksPage() {
  const photos = await getGalleryPhotos("konrad/gallery/drinks");
  return <PhotoGallery photos={photos} />;
}
