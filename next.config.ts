import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "192.168.34.7",
    "192.168.34.7:3000",
    "http://192.168.34.7:3000",
  ],
};

export default nextConfig;
