/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizeCss: {
      // This will make the CSS optimizer ignore problematic selectors
      excludeSelectors: [
        '.form-floating > ~ label',
        '.form-floating >  ~ label'
      ]
    }
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/**',
      },
    ],
    unoptimized: false,
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig 