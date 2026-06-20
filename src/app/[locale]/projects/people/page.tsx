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
    title: t("peopleTitle"),
    description: t("peopleDescription"),
    openGraph: {
      title: `${t("peopleTitle")} | Konrad Kalinowski`,
      description: t("peopleDescription"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("peopleTitle")} | Konrad Kalinowski`,
      description: t("peopleDescription"),
    },
  };
}

export default async function PeoplePage() {
  const photos = await getGalleryPhotos("konrad/gallery/people");
  return <PhotoGallery photos={photos} />;
}
