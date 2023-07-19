/**
 * @type {import('@remix-run/dev').AppConfig}
 */
module.exports = {
  // serverBuildTarget: "vercel",
  // When running locally in development mode, we use the built in remix
  // server. This does not understand the vercel lambda module format,
  // so we default back to the standard build output.
  server: process.env.NODE_ENV === 'development' ? undefined : './server.js',
  ignoredRouteFiles: ['.*'],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "api/index.js",
  // publicPath: "/build/",
  serverModuleFormat: 'cjs',
  future: {
    v2_dev: false,
    v2_errorBoundary: false,
    v2_headers: false,
    v2_meta: false,
    v2_normalizeFormMethod: false,
    v2_routeConvention: false,
  },
};
