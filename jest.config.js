/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  preset: "ts-jest",
  testEnvironment: "@happy-dom/jest-environment",
  transform: {
    ".*\\.html$": "./transformer.js",
  },
  resolver: "<rootDir>/resolver.cjs",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
};
