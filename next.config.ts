import type { NextConfig } from "next";

const isStaticExport = process.env.EXPORT === "true";

const nextConfig: NextConfig = {
  ...(isStaticExport && {
    output: "export",
    trailingSlash: true,
  }),
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
    // Static export requires unoptimized (no server to process images)
    ...(isStaticExport && { unoptimized: true }),
  },
  compress: true,
  poweredByHeader: false,
  async headers() {
    if (isStaticExport) return [];
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ];
  },
};

export default nextConfig;
