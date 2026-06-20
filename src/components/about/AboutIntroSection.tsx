"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/navigation";
import { CldImage } from "next-cloudinary";

export default function AboutIntroSection() {
  const t = useTranslations("About");

  return (
    <section className="bg-[#f7f5f1] px-4 pt-[calc(4rem+env(safe-area-inset-top))] pb-8 md:px-8 md:pt-20">
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative mx-auto w-full">
          {/* Mobile: show photo above the card */}
          <div className="block lg:hidden mb-6 pt-[calc(2rem+env(safe-area-inset-top))]">
            <div className="relative w-full overflow-hidden h-[70vw] sm:h-[56vw]">
              <CldImage
                src="ZDJECIEKONRAD_ycdawd"
                alt="Konrad Kalinowski holding a camera"
                fill
                priority
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </div>
          <section className="relative overflow-hidden border border-[#171310]/12 bg-[#f6f2ec]/95 shadow-[0_18px_60px_rgba(23,19,16,0.08)]">
            <div className="grid lg:grid-cols-[1fr_1.08fr]">
              <div className="relative hidden lg:block lg:min-h-[360px]">
                <div className="absolute inset-0">
                  <CldImage
                    src="ZDJECIEKONRAD_ycdawd"
                    alt="Konrad Kalinowski holding a camera"
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 0px, 44vw"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/20 to-transparent" />
              </div>

              <div className="flex min-h-[40vh] md:min-h-[460px] flex-col p-4 md:p-8 lg:p-12 items-start justify-start text-left">
                <p className="mb-3 text-[0.68rem] uppercase tracking-[0.34em] text-[#6f6257]">{t("label")}</p>
                <h1 className="text-2xl md:text-3xl font-light uppercase tracking-[0.06em] leading-tight text-[#171310]">Konrad Kalinowski</h1>
                <p className="mt-1 mb-4 text-[0.68rem] uppercase tracking-[0.22em] text-[#6f6257]">{t("subtitle")}</p>

                <p className="mt-2 text-[15px] leading-[1.75] text-[#5f5348] max-w-[52ch]">
                  {t("p1")}
                </p>

                <p className="mt-4 text-[15px] leading-[1.75] text-[#53483f] max-w-[52ch]">
                  {t("p2")}
                </p>

                <p className="mt-5 text-[15px] leading-[1.75] text-[#53483f] max-w-[52ch]">
                  <strong>{t("whyMe")}</strong>
                </p>

                <p className="mt-2 text-[15px] leading-[1.75] text-[#53483f] max-w-[52ch]">
                  {t("p3")}
                </p>

                <p className="mt-3 text-[15px] leading-[1.75] text-[#53483f] max-w-[52ch]">
                  {t("p4")}
                </p>

                <div className="mt-6 max-w-[92vw] md:mt-8 md:max-w-xl">
                  <Link href="/contact" className="inline-flex w-fit items-center justify-center border border-[#171310] bg-[#171310] px-7 py-3 text-[0.68rem] uppercase tracking-[0.24em] text-white transition-colors hover:opacity-80">
                    {t("cta")}
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <div className="mt-4 flex items-center justify-between border-t border-[#171310]/12 pt-2 text-[0.62rem] uppercase tracking-[0.22em] text-[#6f6257]">
            <p>Konrad Kalinowski</p>
          </div>
        </div>
      </div>
    </section>
  );
}
