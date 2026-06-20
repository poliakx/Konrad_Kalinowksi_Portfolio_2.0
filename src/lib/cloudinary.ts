import type { GalleryPhoto } from "@/src/components/gallery/gallery.types";

type CloudinaryResource = {
  public_id: string;
  context?: { custom?: { alt?: string } };
};

async function listAssetFolder(folder: string): Promise<CloudinaryResource[]> {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) return [];

  const credentials = Buffer.from(`${apiKey}:${apiSecret}`).toString("base64");

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/resources/search`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${credentials}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        expression: `asset_folder="${folder}"`,
        max_results: 500,
      }),
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) return [];
  const data = await res.json();
  return (data.resources ?? []) as CloudinaryResource[];
}

export async function getGalleryPhotos(folder: string): Promise<GalleryPhoto[]> {
  const resources = await listAssetFolder(folder);
  return resources.map((r, i) => ({
    src: r.public_id,
    alt: r.context?.custom?.alt ?? "Photography by Konrad Kalinowski",
    className: i === 0 ? "md:col-span-2 xl:row-span-2" : undefined,
  }));
}

export async function getSliderPhotos(): Promise<{ src: string; alt: string }[]> {
  const resources = await listAssetFolder("konrad/slider");
  resources.sort((a, b) =>
    a.public_id.localeCompare(b.public_id, undefined, { numeric: true, sensitivity: "base" })
  );
  return resources.map((r) => ({
    src: r.public_id,
    alt: r.context?.custom?.alt ?? "Photography by Konrad Kalinowski",
  }));
}
