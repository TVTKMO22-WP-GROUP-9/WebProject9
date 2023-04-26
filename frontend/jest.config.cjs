module.exports = {
  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  // The module file extensions that Jest will look for
  moduleFileExtensions: ["js", "jsx", "json", "node"],

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFilesAfterEnv: ["@testing-library/jest-dom/extend-expect"],

  // The transformation that Jest will use to transform your code before running the tests
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};
