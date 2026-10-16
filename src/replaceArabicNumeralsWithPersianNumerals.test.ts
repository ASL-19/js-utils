import { expect, test } from "vitest";

import replaceArabicNumeralsWithPersianNumerals from "./replaceArabicNumeralsWithPersianNumerals.js";

test("replaces each Western Arabic numeral", () => {
  expect(replaceArabicNumeralsWithPersianNumerals("0123456789")).toBe(
    "۰۱۲۳۴۵۶۷۸۹",
  );
});

test("leaves other characters unchanged", () => {
  expect(replaceArabicNumeralsWithPersianNumerals("Page 12 of 30")).toBe(
    "Page ۱۲ of ۳۰",
  );
});
