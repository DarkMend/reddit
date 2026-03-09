import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
  },
  reactStrictMode: false,
  sassOptions: {
    includePaths: ["./src"],
    additionalData: `
      @import "@/assets/styles/mixins.scss";
      @import "@/assets/styles/consts.scss";
    `,
  },
  reactCompiler: true,
};

export default nextConfig;
