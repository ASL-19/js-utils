require("@rushstack/eslint-patch/modern-module-resolution");

const eslintConfig = {
  extends: ["@asl-19/eslint-config"],
  plugins: ["eslint-plugin-tsdoc"],
  rules: {
    "no-restricted-imports": "off",
    "tsdoc/syntax": "warn",
  },
};

// eslint-disable-next-line functional/immutable-data
module.exports = eslintConfig;
