import type { Metadata } from "next";

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

export default function OtherProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
