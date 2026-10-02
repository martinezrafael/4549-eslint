import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import pluginImport from 'eslint-plugin-import'

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    plugins: { js, import: pluginImport }, 
    extends: ["js/recommended"], 
    languageOptions: { globals: globals.node },
    rules: {
      "semi": ["error", "always"],
      "quotes": ["error", "single"],
      "indent": ["error", 2],
      "no-trailing-spaces": ["error"],
      "prefer-const": ["error"],
      "camelcase": ["error"],
      "no-var": ["error"],
      "import/no-cycle": ["error"]
    }   
  },
]);
