module.exports = {
  stories: ['../src/**/*.stories.ts'],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.ts$/,
      use: 'babel-loader',
    });
    config.resolve.extensions.push('.ts');
    return config;
  },
};
