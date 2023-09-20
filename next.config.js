/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "cdn.stablediffusionapi.com",
      "cdn2.stablediffusionapi.com",
      "rubberducker-user-uploads.s3.eu-west-2.amazonaws.com",
      "images.unsplash.com",
      "firebasestorage.googleapis.com",
      "cannsdownpress.co.uk",
      "krea-prod-v1-generations.s3.us-east-1.amazonaws.com",
      "lh3.googleusercontent.com",
      "pub-3626123a908346a7a8be8d9295f44e26.r2.dev",
    ],
  },
  pageExtensions: ["tsx", "ts"],
};

module.exports = nextConfig;
