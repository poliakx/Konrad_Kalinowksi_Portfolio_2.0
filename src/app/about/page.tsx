import type { Metadata } from "next";
import AboutIntroSection from "@/src/components/about/AboutIntroSection";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Konrad Kalinowski and the story behind his photography portfolio.",
  openGraph: {
    title: "Konrad Kalinowski | About",
    description:
      "About Konrad Kalinowski and the story behind his photography portfolio.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Konrad Kalinowski | About",
    description:
      "About Konrad Kalinowski and the story behind his photography portfolio.",
  },
};

export default function AboutPage() {
  return <AboutIntroSection />;
}
