/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "m.media-amazon.com",
      "upload.wikimedia.org",
      "pup-assets.imgix.net",
      "bisom-bucket.s3.us-east-2.amazonaws.com",
    ],
  },
};

export default nextConfig;
