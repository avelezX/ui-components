const StyleDictionary = require('style-dictionary');

const SOURCE = 'ui-tokens/tokens.json';
const PATH = 'scss/';

const regexExcludingC9 = ({ name }) => name.replace(/^(xerenity-)|(.*)$/, '$2');

const config = {
  source: [SOURCE],
  transform: {
    prefixRemoval: {
      type: 'name',
      transformer: (prop) => regexExcludingC9(prop),
    },
  },
  platforms: {
    scss: {
      transforms: StyleDictionary.transformGroup.scss.concat(['prefixRemoval']),
      buildPath: PATH,
      files: [
        {
          destination: '_variables.scss',
          format: 'scss/variables',
        },
      ],
    },
  },
};

module.exports = config;
