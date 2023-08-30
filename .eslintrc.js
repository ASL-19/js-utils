require("@rushstack/eslint-patch/modern-module-resolution");

const eslintConfig = {
  extends: [
    "@asl-19/eslint-config",
    "@asl-19/eslint-config/next",
    "@asl-19/eslint-config/react",
    "@asl-19/eslint-config/typescript",
  ],
  rules: {
    "no-restricted-imports": "warn",
  },
};

module.exports = eslintConfig;
