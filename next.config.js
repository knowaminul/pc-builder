const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.startech.com.bd", "m.media-amazon.com"],
  },
  experimental: {
    esmExternals: true,
  },
};

module.exports = nextConfig;
