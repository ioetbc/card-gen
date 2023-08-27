/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.stablediffusionapi.com",
      "cdn2.stablediffusionapi.com",
      "rubberducker-user-uploads.s3.eu-west-2.amazonaws.com",
      "images.unsplash.com",
    ],
  },
  pageExtensions: ["tsx", "ts"],
};

module.exports = nextConfig;
