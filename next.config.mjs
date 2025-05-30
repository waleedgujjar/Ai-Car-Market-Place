/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsHmrCache: false,
    turbo: false, // ✅ disable Turbopack
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tcdaelvvoourrpiomlos.supabase.co",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/embed",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-src 'self' https://dev-portfoliomaster.vercel.app/",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
