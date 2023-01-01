const repo = "https://github.com/lazy-manushya/lazy-manushya.github.io";
const assetPrefix = `/${repo}/`;
const basePath = `/${repo}`;

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    loader: "akamai",
    path: "",
  },
  assetPrefix: assetPrefix,
  basePath: basePath,
};

export default nextConfig;
