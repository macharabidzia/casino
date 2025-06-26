// next.config.mjs
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  turbopack: {
    rules: {
      "*.svg": {
        loaders: [
          {
            loader: "@svgr/webpack",
            options: {
              icon: true,
              titleProp: true,
              svgProps: {
                height: "auto",
              },
            },
          },
        ],
        as: "*.js",
      },
    },
  },
};

export default nextConfig;
