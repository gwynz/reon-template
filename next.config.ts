import { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	turbopack: {
		resolveAlias: {
			underscore: "lodash",
		},
		resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".json"],
		rules: {
			"*.svg": {
				loaders: ["@svgr/webpack"],
				as: "*.js",
			},
		},
	},
};

export default nextConfig;
