import globals from "globals";
import js from "@eslint/js";
import { defineConfig, globalIgnores } from "eslint/config";
import babelParser from "@babel/eslint-parser";

export default defineConfig([
  globalIgnores([
    'node_modules',
      'doc',
      'test/apis.js',
      '.yarn',
  ]),
  js.configs.recommended,
  {
    languageOptions: {
      parser: babelParser,
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
          ...globals.browser,
          ...globals.node,
      }
    },
  }
])