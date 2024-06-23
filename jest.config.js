export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Alias for importing modules, adjust as necessary
    '\\.(css|less|scss|sass)$': "<rootDir>/__mocks__/styleMock.js", // Mocks CSS imports for Jest
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js' // Mocks image and SVG imports
  },
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Transform TypeScript files using ts-jest
    '^.+\\.jsx?$': 'babel-jest' // Transform JSX files using babel-jest
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/'], // Ignore tests from node_modules
  collectCoverage: true, // Enable coverage collection
  coverageDirectory: 'coverage', // Directory where Jest should output coverage files
  coverageReporters: ['text', 'lcov'], // Coverage report formats
  coverageThreshold: {
    global: { // Sets the global coverage thresholds
      branches: 50,
      functions: 50,
      lines: 50,
      statements: 50
    }
  }
};
