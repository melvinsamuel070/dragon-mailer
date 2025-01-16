// import globals from "globals";
// import pluginJs from "@eslint/js";
// import pluginReact from "eslint-plugin-react";

// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   { files: ["**/*.{js,mjs,cjs,jsx}"] },
//   { languageOptions: { globals: globals.browser } },
//   pluginJs.configs.recommended,
//   pluginReact.configs.flat.recommended,
// ];

// .eslintrc.js or eslint.config.mjs

// import globals from "globals";
// import pluginJs from "@eslint/js";
// import pluginReact from "eslint-plugin-react";

// /** @type {import('eslint').Linter.Config[]} */
// export default [
//   {
//     files: ["**/*.{js,mjs,cjs,jsx}"],
//     languageOptions: {
//       globals: {
//         ...globals.browser,
//         ...globals.node,
//       },
//       ecmaVersion: "latest",
//       sourceType: "module",
//     },
//     settings: {
//       react: {
//         version: "detect",
//       },
//     },
//     rules: {
//       "constructor-super": "off", // Disable the rule causing the error
//       "no-unused-vars": "warn", // Example of additional rule customization
//     },
//   },
//   pluginJs.configs.recommended,
//   pluginReact.configs.recommended,
// ];

// const { ESLint } = require("eslint");

// // Create an instance of ESLint with the configuration passed to the function
// function createESLintInstance(overrideConfig) {
//   return new ESLint({
//     overrideConfigFile: true,
//     overrideConfig,
//     fix: true,
//   });
// }

// // Lint the specified files and return the results
// async function lintAndFix(eslint, filePaths) {
//   const results = await eslint.lintFiles(filePaths);

//   // Apply automatic fixes and output fixed code
//   await ESLint.outputFixes(results);

//   return results;
// }

// // Log results to console if there are any problems
// function outputLintingResults(results) {
//   // Identify the number of problems found
//   const problems = results.reduce(
//     (acc, result) => acc + result.errorCount + result.warningCount,
//     0,
//   );

//   if (problems > 0) {
//     console.log("Linting errors found!");
//     console.log(results);
//   } else {
//     console.log("No linting errors found.");
//   }
//   return results;
// }

// // Put previous functions all together
// async function lintFiles(filePaths) {
//   // The ESLint configuration. Alternatively, you could load the configuration
//   // from an eslint.config.js file or just use the default config.
//   const overrideConfig = {
//     languageOptions: {
//       ecmaVersion: 2018,
//       sourceType: "commonjs",
//     },
//     rules: {
//       "no-console": "error",
//       "no-unused-vars": "warn",
//     },
//   };

//   const eslint = createESLintInstance(overrideConfig);
//   const results = await lintAndFix(eslint, filePaths);
//   return outputLintingResults(results);
// }

// // Export integration
// module.exports = { lintFiles };

export default [
  {
    files: ['*.js', '*.jsx'],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
    },
    rules: {
      'no-console': 'warn', // Treat no-console as a warning
      'no-unused-vars': 'warn', // Treat no-unused-vars as a warning
    },
  },
];
