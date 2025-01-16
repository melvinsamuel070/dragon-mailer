module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    '**/*.{js,jsx}', // Collect coverage from all JS and JSX files
    '!**/*.test.js', // Exclude test files from coverage (they are already tested)
  ],
  coverageDirectory: './coverage', // Output the coverage report to this directory
  coverageReporters: ['text', 'lcov'], // Display text and LCOV reports
}
