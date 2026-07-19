import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/samad",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
