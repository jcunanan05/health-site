const root = __dirname + '/src';

const posthtmlConfig = {
  plugins: {
    'posthtml-extend': {
      root
    },
    'posthtml-include': {
      root
    }
  }
};

module.exports = posthtmlConfig;
