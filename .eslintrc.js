const eslintConfig = {
  extends: ["@asl-19/typescript"],
  plugins: ["eslint-plugin-tsdoc"],
  rules: {
    "no-restricted-imports": "off",
    "tsdoc/syntax": "warn",
  },
};

module.exports = eslintConfig;
