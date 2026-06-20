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
    title: t("foodTitle"),
    description: t("foodDescription"),
    openGraph: {
      title: `${t("foodTitle")} | Konrad Kalinowski`,
      description: t("foodDescription"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("foodTitle")} | Konrad Kalinowski`,
      description: t("foodDescription"),
    },
  };
}

export default async function FoodPhotoPage() {
  const photos = await getGalleryPhotos("konrad/gallery/food photos");
  return <PhotoGallery photos={photos} />;
}
