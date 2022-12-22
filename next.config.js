/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true
	},
	images: {
		loader: 'custom'
	},
	// experimental: {
	// 	outputStandalone: true
	// },
	output: 'standalone',
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack']
		});
		config.resolve.fallback = {
			fs: false
		};
		config.resolve.alias = {
			...config.resolve.alias,
			'@mui/styled-engine': '@mui/styled-engine-sc'
		};
		return config;
	}
};

module.exports = nextConfig;
