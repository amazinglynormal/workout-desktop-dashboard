const config = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  moduleNameMapper: { "\\.(css|less)$": "identity-obj-proxy" },
};
module.exports = config;
