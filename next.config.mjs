/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  basePath: isProduction ? '/Portfolio' : '',
  assetPrefix: isProduction ? '/Portfolio/' : '',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
}

export default nextConfig
