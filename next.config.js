/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.stablediffusionapi.com", "cdn2.stablediffusionapi.com"],
  },
  pageExtensions: ["tsx", "ts"],
};

module.exports = nextConfig;
