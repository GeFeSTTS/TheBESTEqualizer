module.exports = {    
    verbose: true,
    moduleDirectories: ["node_modules"] ,
    moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/src/client/__mocks__/fileMock.js",
      "\\.css$": "identity-obj-proxy",
    },
    coveragePathIgnorePatterns: ["index.js"],
    setupFilesAfterEnv: ["./setupTests.js"],
  };
