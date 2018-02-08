const constants = require('./webpack/constants');
const mapKeys = require('lodash/mapKeys');
const mapValues = require('lodash/mapValues');

module.exports = {
  setupFiles: [
    './support/rafPolyfill.js',
    './support/setupTests.js',
  ],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/index.jsx',
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/support/fileMock.js',
    '\\.(css|scss)$': 'babel-jest',
    ...mapValues(
      mapKeys(constants.RESOLVE_PATHS, (v, key) => `^${key}/(.*)$`),
      value => `<rootDir>/${value}/$1`,
    ),
  },
};
