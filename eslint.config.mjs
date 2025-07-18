import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import security from "eslint-plugin-security";
import typescriptEslint from "typescript-eslint";
import sortKeysFix from "eslint-plugin-sort-keys-fix";
import { defineConfig } from "eslint/config";
import globals from "globals";

export default defineConfig([
  {
    ignores: ["dist/", "types/", ".yalc/"],
  },
  {
    extends: [js.configs.recommended, prettier, security.configs.recommended],
    files: ["**/*.{cjs,js,mjs,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      "sort-keys-fix": sortKeysFix,
    },
    rules: {
      "no-console": [
        "warn",
        {
          allow: ["error", "group", "groupEnd", "info", "table", "warn"],
        },
      ],
      "no-param-reassign": [
        "error",
        {
          ignorePropertyModificationsFor: ["acc", "draft"],
          props: true,
        },
      ],
      "no-restricted-imports": "off",
      "no-useless-rename": "warn",
      "object-shorthand": "warn",
      "security/detect-object-injection": "off",
      "sort-keys-fix/sort-keys-fix": [
        "warn",
        "asc",
        {
          caseSensitive: false,
          natural: true,
        },
      ],
    },
  },
  {
    extends: [
      typescriptEslint.configs.recommendedTypeChecked,
      typescriptEslint.configs.stylisticTypeChecked,
    ],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: process.cwd(),
      },
    },
    rules: {
      "@typescript-eslint/array-type": [
        "warn",
        {
          default: "generic",
        },
      ],
      "@typescript-eslint/consistent-type-definitions": ["warn", "type"],
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-misused-promises": [
        "warn",
        { checksVoidReturn: { attributes: false } },
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/prefer-nullish-coalescing": [
        "warn",
        { ignorePrimitives: { string: true } },
      ],
    },
  },
]);
