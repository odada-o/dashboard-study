/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.guim.co.uk',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/bus/:path*',
        destination: 'http://apis.data.go.kr/1613000/BusLcInfoInqireService/:path*'
        // 기관ID/서비스ID 형태로 입력
      }
    ]
  }
}

export default nextConfig