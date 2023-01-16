/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "cdn.myanimelist.net",
				port: "",
				pathname: "/images/anime/**",
			},
			{
				protocol: "https",
				hostname: "cdn.myanimelist.net",
				port: "",
				pathname: "/images/**/*",
			},
			{
				protocol: "https",
				hostname: "img.youtube.com",
				port: "",
				pathname: "/vi/**/*",
			},
		],
	},
	reactStrictMode: true,
};

module.exports = nextConfig;
