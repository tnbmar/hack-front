/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: { styledComponents: true },
  images: {
    domains: ["ibb.co"],
  },
};

module.exports = nextConfig;
