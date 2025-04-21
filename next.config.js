/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    // Remove loader & path…
    // loader: 'cloudinary',
    // path: `https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUD_NAME}/image/upload/`,
    domains: ["res.cloudinary.com"],
    // Or, if you want more control (Next 13+):
    // remotePatterns: [
    //   {
    //     protocol: 'https',
    //     hostname: 'res.cloudinary.com',
    //     port: '',
    //     pathname: '/dzpuwffzh/image/upload/**',
    //   },
    // ],
  },
};

export default config;
