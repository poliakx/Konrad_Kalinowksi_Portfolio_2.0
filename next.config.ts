import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.34.7",
    "192.168.34.7:3000",
    "http://192.168.34.7:3000",
  ],
  images: {
    // Configure allowed output quality values used by next/image
    qualities: [60, 75, 80],
  },
};

export default nextConfig;
