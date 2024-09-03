// jest.config.js
export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  testMatch: ['**/?(*.)+(test).[tj]s?(x)'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest'
  }
};
