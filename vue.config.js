const { defineConfig } = require('@vue/cli-service')
const webpack = require("webpack");
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    https: false,
    // port: 8085,
    allowedHosts: "all",
  },
  pwa: {
    name: 'بار ایران',
    themeColor: '#2e3192',
    msTileColor: '#ffffff',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    iconPaths: {
      faviconSVG: 'static/favicon.png',
      favicon32: 'static/favicon-32x32.png',
      favicon16: 'static/favicon-16x16.png',
      appleTouchIcon: 'static/apple-touch-icon-152x152.png',
      msApplicationIcon: 'static/msapplication-icon-144x144.png',
      maskIcon: 'static/msapplication-icon-144x144.png',
      msTileImage: 'static/msapplication-icon-144x144.png'
    },
  },
  configureWebpack: {
    plugins: [new webpack.IgnorePlugin({resourceRegExp:/^\.\/locale$/, contextRegExp: /moment$/})]
  },
})
