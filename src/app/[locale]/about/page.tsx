import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import AboutIntroSection from "@/src/components/about/AboutIntroSection";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("aboutTitle"),
    description: t("aboutDescription"),
    openGraph: {
      title: `${t("aboutTitle")} | Konrad Kalinowski`,
      description: t("aboutDescription"),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("aboutTitle")} | Konrad Kalinowski`,
      description: t("aboutDescription"),
    },
  };
}

export default function AboutPage() {
  return <AboutIntroSection />;
}
