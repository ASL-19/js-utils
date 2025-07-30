// We should be able to remove the @ts-expect-error and eslint-disable-next-line
// once we fix the typing of @asl-19/eslint-config

// @ts-expect-error (TODO: why is this happening?)
import asl19 from "@asl-19/eslint-config";
import { defineConfig } from "eslint/config";

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const typedAsl19 =
  /** @type {import("@asl-19/eslint-config/types/index")["default"]} */ (asl19);

const eslintConfig = defineConfig([
  {
    ignores: ["dist/", "types/", ".yalc/"],
  },
  {
    extends: [
      typedAsl19.base, // (for all projects)
      typedAsl19.typescript, // (for TypeScript projects)
    ],
    rules: {
      // https://github.com/eslint-community/eslint-plugin-security/issues/21
      "security/detect-object-injection": "off",
    },
  },
]);

export default eslintConfig;
