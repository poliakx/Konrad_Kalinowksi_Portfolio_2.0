import type { Metadata } from "next";
import PhotoGallery from "@/src/components/gallery/PhotoGallery";
import { getGalleryPhotos } from "@/src/lib/cloudinary";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "People & Places",
  description:
    "Explore the people and places gallery by Konrad Kalinowski — portraits, events, and lifestyle visuals.",
  openGraph: {
    title: "People & Places | Konrad Kalinowski",
    description:
      "Explore the people and places gallery by Konrad Kalinowski — portraits, events, and lifestyle visuals.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "People & Places | Konrad Kalinowski",
    description:
      "Explore the people and places gallery by Konrad Kalinowski — portraits, events, and lifestyle visuals.",
  },
};

export default async function OtherProjectsPage() {
  const photos = await getGalleryPhotos("konrad/gallery/other projects");
  return <PhotoGallery photos={photos} />;
}
