import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.34.7",
    "192.168.34.7:3000",
    "http://192.168.34.7:3000",
  ],
  images: {
    qualities: [60, 75, 80],
  },
};

export default withNextIntl(nextConfig);
