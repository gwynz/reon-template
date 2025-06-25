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
	},
};

export default nextConfig;
