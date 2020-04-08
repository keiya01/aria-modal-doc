 const path = require('path');

module.exports.TEMPLATE_PATH = './public/index.ejs';

const output = path.resolve(__dirname, 'dist');
module.exports.output = output;

const webcomponentsjs = './node_modules/@webcomponents/webcomponentsjs';
module.exports.polyfills = [
  {
    from: `${webcomponentsjs}/webcomponents-loader.js`,
    to: path.join(output, 'vendor'),
    flatten: true
  },
  {
    from: `${webcomponentsjs}/bundles/*.js`,
    to: path.join(output, 'vendor', 'bundles'),
    flatten: true
  },
  {
    from: `${webcomponentsjs}/custom-elements-es5-adapter.js`,
    to: path.join(output, 'vendor'),
    flatten: true
  }
];

module.exports.css = {
  from: './public/css',
  to: path.join(output, 'css'),
  flatten: true
};
