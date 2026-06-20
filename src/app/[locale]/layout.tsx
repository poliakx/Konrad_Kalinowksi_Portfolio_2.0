import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import SiteNavbar from "@/src/components/sections/SiteNavbar";
import SiteFooter from "@/src/components/sections/SiteFooter";
import SetVh from "@/src/components/SetVh";
import { routing } from "@/src/i18n/routing";
import "../globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Konrad Kalinowski | Visual Portfolio",
    template: "%s | Konrad Kalinowski",
  },
  description:
    "Portfolio website featuring food photography and creative visual projects by Konrad Kalinowski.",
  openGraph: {
    title: "Konrad Kalinowski | Visual Portfolio",
    description:
      "Explore photography and creative project collections by Konrad Kalinowski.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Konrad Kalinowski | Visual Portfolio",
    description:
      "Explore photography and creative project collections by Konrad Kalinowski.",
  },
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as "en" | "pl")) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={`${inter.className} flex min-h-screen flex-col bg-black text-white`}
      >
        <NextIntlClientProvider messages={messages}>
          <SetVh />
          <SiteNavbar />
          <main className="flex flex-1 flex-col">{children}</main>
          <SiteFooter />
        </NextIntlClientProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
