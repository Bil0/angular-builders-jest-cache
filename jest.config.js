/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'jest-preset-angular',
  globalSetup: 'jest-preset-angular/global-setup',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json',
    },
  },
  verbose: true,
  roots: ['src'],
  testEnvironmentOptions: {
    url: 'http://localhost/',
  },
  testMatch: ['**/*.spec.ts'],
  reporters: ['default'],
  coverageReporters: ['lcov'],
  moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
};
