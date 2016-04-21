module.exports = (config) => {
  config.set({
    basePath: 'src',
    singleRun: true,
    frameworks: ['mocha'],
    reporters: ['dots'],
    browsers: ['PhantomJS'],
    files: [
      'test/**/*.spec.js',
    ],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-chai',
      'karma-mocha',
      'karma-sourcemap-loader',
      'karma-webpack',
      'karma-mocha-reporter',
      'karma-sinon',
      'karma-sinon-chai'
    ],
    preprocessors: {
      'test/**/*.spec.js': ['webpack'],
    },
    webpack: {
      resolve: {
        extensions: ['', '.js', '.ts'],
        modulesDirectories: ['node_modules', 'src'],
      },
      module: {
        loaders: [{
          test: /\.js$/,
          loader: 'babel-loader',
        }],
      },
    },
    webpackMiddleware: {
      stats: {
        color: true,
        chunkModules: false,
        modules: false,
      },
    },
  });
};
