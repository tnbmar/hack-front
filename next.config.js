/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: { styledComponents: true },
  images: {
    domains: ["i.ibb.co", "ibb.co"],
  },
};

module.exports = nextConfig;
