import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      quotes: ["error", "double"],
      "jsx-quotes": ["error", "prefer-double"],
      "react/react-in-jsx-scope": "off",
      "react/jsx-no-duplicate-props": "error",
      "react/no-unused-state": "error",
      "no-undef": "error",
    },
    plugins: {
      react: pluginReact,
    },
    settings: {
      react: {
        version: "detect", // Автоматически определяет версию React
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];
