import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

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
