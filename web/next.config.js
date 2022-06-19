/** @type {import('next').NextConfig} */

const withTranspileModules = require("next-transpile-modules")([
  "@osz/components",
]);

const nextConfig = {
  reactStrictMode: true,
};
module.exports = withTranspileModules(nextConfig);
