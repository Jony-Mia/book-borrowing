/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'heroui-assets.nyc3.cdn.digitaloceanspaces.com',
        port: '',
        pathname: '/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'content.twinkl.co.uk',
        port: '',
        pathname: '/website/uploaded/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'avatars.dzeninfra.ru',
        port: '',
        pathname: '/get-zen_doc/271828/pub_695370deb4324747c4b3cf1a_695370de45eb796c907235c1/**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
