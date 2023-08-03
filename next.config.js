/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.stablediffusionapi.com"],
  },
  pageExtensions: ["tsx", "ts"],
};

module.exports = nextConfig;
