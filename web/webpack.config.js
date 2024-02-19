// webpack.config.js

module.exports = {
  // other webpack configurations
  resolve: {
    fallback: {
      path: false,
      os: false,
      crypto: false,
      stream: require.resolve("stream-browserify"),
      http: require.resolve("stream-http"),
      https: require.resolve("https-browserify"),
      zlib: require.resolve("browserify-zlib"),
      url: require.resolve("url/")
    }
  }
};
