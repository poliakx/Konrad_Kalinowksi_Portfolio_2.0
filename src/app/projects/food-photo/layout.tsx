import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Food Photo",
  description:
    "Explore the complete food photography gallery by Konrad Kalinowski, featuring editorial dishes, cocktails, and restaurant visuals.",
  openGraph: {
    title: "Food Photo | Konrad Kalinowski",
    description:
      "Explore the complete food photography gallery by Konrad Kalinowski, featuring editorial dishes, cocktails, and restaurant visuals.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Food Photo | Konrad Kalinowski",
    description:
      "Explore the complete food photography gallery by Konrad Kalinowski, featuring editorial dishes, cocktails, and restaurant visuals.",
  },
};

export default function FoodPhotoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
