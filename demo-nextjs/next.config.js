/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            "i.pinimg.com",
            "picsum.photos",
            "a-static.besthdwallpaper.com",
            "recmiennam.com",
        ],
    },
};

module.exports = nextConfig;
