/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'app.cpw.ac.th',
            port: '',
            pathname: '/cpw_api_content/**',
          },
          {
            protocol: 'https',
            hostname: 'images.unsplash.com',
            port: '',
          },
        ],
      },
}

module.exports = nextConfig
