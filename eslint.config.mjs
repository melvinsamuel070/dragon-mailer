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

import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      "constructor-super": "off", // Disable the rule causing the error
      "no-unused-vars": "warn", // Example of additional rule customization
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.recommended,
];
