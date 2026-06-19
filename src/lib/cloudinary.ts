import type { GalleryPhoto } from "@/src/components/gallery/gallery.types";

type CloudinaryResource = {
  public_id: string;
  context?: { custom?: { alt?: string } };
};

async function listFolder(folder: string): Promise<CloudinaryResource[]> {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) return [];

  const credentials = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");
  const params = new URLSearchParams({
    prefix: folder,
    type: "upload",
    max_results: "500",
    context: "true",
  });

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/resources/image?${params}`,
    {
      headers: { Authorization: `Basic ${credentials}` },
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) return [];
  const data = await res.json();
  return (data.resources ?? []) as CloudinaryResource[];
}

export async function getGalleryPhotos(folder: string): Promise<GalleryPhoto[]> {
  const resources = await listFolder(folder);
  return resources.map((r, i) => ({
    src: r.public_id,
    alt: r.context?.custom?.alt ?? "Photography by Konrad Kalinowski",
    className: i === 0 ? "md:col-span-2 xl:row-span-2" : undefined,
  }));
}

export async function getSliderPhotos(): Promise<{ src: string; alt: string }[]> {
  const resources = await listFolder("konrad/slider");
  resources.sort((a, b) => a.public_id.localeCompare(b.public_id));
  return resources.map((r) => ({
    src: r.public_id,
    alt: r.context?.custom?.alt ?? "Photography by Konrad Kalinowski",
  }));
}
