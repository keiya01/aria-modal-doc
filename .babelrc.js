module.exports = (api) => {
  api.cache(true);
  return {
    presets: ['@babel/env', '@babel/typescript'],
    plugins: [
      [
        '@babel/plugin-proposal-decorators', { legacy: true }],
        '@babel/proposal-class-properties',
    ],
  };
}
