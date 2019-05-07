const root = __dirname + '/src/pages';

const posthtmlConfig = {
  plugins: {
    'posthtml-include': {
      root
    },
    'posthtml-extend': {
      root
    }
  }
};

module.exports = posthtmlConfig;
