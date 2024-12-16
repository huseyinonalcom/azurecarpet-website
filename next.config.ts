import createNextIntlPlugin from "next-intl/plugin";
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = withNextIntl({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "r2.hocecomv1.com",
        port: "",
        pathname: "/uploads/**",
      },
    ],
  },
});

export default nextConfig;
