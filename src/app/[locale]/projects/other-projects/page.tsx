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
    title: t("placesTitle"),
    description: t("placesDescription"),
    openGraph: {
      title: `${t("placesTitle")} | Konrad Kalinowski`,
      description: t("placesDescription"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("placesTitle")} | Konrad Kalinowski`,
      description: t("placesDescription"),
    },
  };
}

export default async function OtherProjectsPage() {
  const photos = await getGalleryPhotos("konrad/gallery/other projects");
  return <PhotoGallery photos={photos} />;
}
