/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Remove static export for Netlify deployment
  // output: 'export',
  trailingSlash: true,
  basePath: '',
}

export default nextConfig
