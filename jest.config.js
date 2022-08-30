/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

const { pathsToModuleNameMapper } = require("ts-jest");

module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  setupFilesAfterEnv: ["./src/setupTests.ts"],
  moduleNameMapper: {
    "\\.(css|scss|png)$": "identity-obj-proxy",
  },
};
