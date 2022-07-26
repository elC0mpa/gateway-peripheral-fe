module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
  moduleNameMapper: {
    "^.+\\.(css|less)$": "<rootDir>/__mocks__/styleMocks.js",
  },
};
