module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
      "src/**/*.{js,jsx}",
      "!src/index.js",
      "!src/serviceWorker.js",
      "!**/node_modules/**"
    ],
    coverageReporters: ["text", "lcov"],
    transform: {
      "^.+\\.jsx?$": "babel-jest",
      "^.+\\.css$": "jest-transform-css"
    },
    moduleNameMapper: {
      "\\.(css|less)$": "identity-obj-proxy"
    }
  };
  