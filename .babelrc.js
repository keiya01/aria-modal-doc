module.exports = (api) => {
  api.cache(true);
  return {
    presets: ['@babel/env', '@babel/typescript'],
    plugins: ['@babel/proposal-class-properties'],
  };
}
