const singleSpaAngularWebpack = require('single-spa-angular/lib/webpack').default;
const webpackMerge = require('webpack-merge');

module.exports = (config, options) => {
  // Only externalize rxjs in production (single-spa mode)
  // In dev mode (standalone), we need rxjs bundled
  const isProduction = config.mode === 'production';

  if (isProduction) {
    config.externals = ["rxjs", "@eai/utility"];
  }

  const singleSpaWebpackConfig = singleSpaAngularWebpack(config, options);

  const merged = webpackMerge.merge(singleSpaWebpackConfig, {
    devServer: {
      allowedHosts: 'all',
      historyApiFallback: true,
    },
    module: {}
  });

  return merged;
};

