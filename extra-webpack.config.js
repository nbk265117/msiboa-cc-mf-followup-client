
const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
const webpackMerge = require('webpack-merge');
module.exports = (config, options) => {
  config.externals = ["rxjs", "@eai/utility"];
  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  // Feel free to modify this webpack config however you'd like to
  const merged = webpackMerge.merge(singleSpaWebpackConfig, {
    devServer: {
      allowedHosts: 'all',
    },
    module: {} })
  return merged
};

