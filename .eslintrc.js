require("@rushstack/eslint-patch/modern-module-resolution");

const eslintConfig = {
  extends: ["@asl-19/eslint-config"],
  rules: {
    "no-restricted-imports": "off",
  },
};

module.exports = eslintConfig;
