// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'upload.wikimedia.org', // <-- add this
      // you can add more domains here
    ],
  },
};

module.exports = nextConfig;
