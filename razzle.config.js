/* eslint no-unused-vars: 0 */
/* eslint no-param-reassign: 0 */

const scss = /\.(scss|sass)$/;
const scss_module = /\.module\.(scss|sass)$/;
const image = /\.(gif|png|jpe?g|svg)$/;
const js = /\.(js|mjs|jsx)$/;


module.exports = {
  modify: (config, { target, dev }, webpack) => {
    // const MyCssConfig = {
    //   rules: [
    //     {
    //       test: style,
    //       use: ['style-loader','css-loader']
    //     }
    //   ]
    // };
    //
    // const MySassConfig = {
    //   rules: [
    //     {
    //       test: scss,
    //       use: [
    //         'style-loader',
    //         'css-loader',
    //         'sass-loader'
    //       ]
    //     },
    //   ]
    // };
    //
    // config.module.rules.push(MyCssConfig);
    // config.module.rules.push(MySassConfig);
    // Make whatever fine-grained changes you need

    if (!dev) {
      config.devtool = undefined;
    }


    config.module.rules.push({
      test: scss,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      exclude: scss_module,
    });

    return config;
  },
};
