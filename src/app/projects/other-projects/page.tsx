import type { Metadata } from "next";
import PhotoGallery from "@/src/components/gallery/PhotoGallery";
import { getGalleryPhotos } from "@/src/lib/cloudinary";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Other Projects",
  description:
    "Explore the other projects gallery by Konrad Kalinowski with selected creative and editorial visuals.",
  openGraph: {
    title: "Other Projects | Konrad Kalinowski",
    description:
      "Explore the other projects gallery by Konrad Kalinowski with selected creative and editorial visuals.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Other Projects | Konrad Kalinowski",
    description:
      "Explore the other projects gallery by Konrad Kalinowski with selected creative and editorial visuals.",
  },
};

export default async function OtherProjectsPage() {
  const photos = await getGalleryPhotos("konrad/gallery/other");
  return <PhotoGallery photos={photos} />;
}
