import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/src/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Konrad Kalinowski for photography commissions, collaborations, or any enquiries.",
  openGraph: {
    title: "Contact | Konrad Kalinowski",
    description:
      "Get in touch with Konrad Kalinowski for photography commissions, collaborations, or any enquiries.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Konrad Kalinowski",
    description:
      "Get in touch with Konrad Kalinowski for photography commissions, collaborations, or any enquiries.",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-[60vh] bg-[#f7f5f1] px-4 pb-2 pt-[calc(4rem+env(safe-area-inset-top))] text-[#171310] md:px-8 md:pb-12 md:pt-20 overflow-x-hidden">
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="absolute -right-10 top-12 h-36 w-36 rounded-full bg-[#d8c7b8]/35 blur-3xl" />
        <div className="absolute -left-10 bottom-6 h-40 w-40 rounded-full bg-[#e5d8cd]/45 blur-3xl" />

        <section id="contact" className="relative scroll-mt-24 md:scroll-mt-32 overflow-hidden border border-[#171310]/12 bg-[#f6f2ec]/95 shadow-[0_18px_60px_rgba(23,19,16,0.08)]">
          <div className="grid lg:grid-cols-[1fr_1.08fr]">
            <div className="relative hidden lg:block lg:min-h-[360px]">
              <Image
                src="/images/hero/konrad-kalinowski-food-hero1.jpg"
                alt="Photographer working with a professional camera"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 0px, 44vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/20 to-transparent" />
            </div>
            <div className="flex min-h-[40vh] md:min-h-[460px] flex-col p-4 md:p-8 lg:p-12">
              <p className="mb-3 text-[0.68rem] uppercase tracking-[0.34em] text-[#6f6257]">
                Contact Us
              </p>
              <h1 className="max-w-md text-[calc(18px+2.6vw)] font-light leading-[1.03] md:text-4xl">
                Let&apos;s Connect, Collaborate,
                <br />
                and Create Together
              </h1>
              <p className="mt-4 max-w-[86vw] text-[calc(12px+1.2vw)] leading-6 text-[#5f5348] md:text-sm md:max-w-sm">
                Share your project details and I&apos;ll reply with availability, timeline, and next steps.
              </p>

              <div className="mt-6 max-w-[92vw] md:mt-8 md:max-w-xl">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>

        <div className="mt-4 flex items-center justify-between border-t border-[#171310]/12 pt-2 text-[0.62rem] uppercase tracking-[0.22em] text-[#6f6257]">
          <p>Konrad Kalinowski</p>
        </div>
      </div>
    </main>
  );
}
