import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "img.youtube.com",
                port: "",
                pathname: "/**",
            },
            {
                protocol: 'http',
                hostname: 'res.cloudinary.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '**',
            },
            {
                protocol: 'http',
                hostname: 'img.autotrader.co.za',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'img.autotrader.co.za',
                pathname: '**',
            },
            {
                protocol: 'http',
                hostname: 'sc42.pipelineguru.co.za',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'sc42.pipelineguru.co.za',
                pathname: '**',
            },
        ],
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
};

export default nextConfig;
