const root = __dirname + 'src/pages';

const posthtmlConfig = {
  plugins: {
    'posthtml-include': {
      root
    },
    'posthtml-extends': {
      root
    }
  }
};

module.exports = posthtmlConfig;
