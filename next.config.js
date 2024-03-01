/** @type {import('next').NextConfig} */
const path = require('path')

module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  sassOptions: {
    fiber: false,
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./scripts/sitemap-generator')
    }
    return config
  },
}

const nextConfig = {
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig
