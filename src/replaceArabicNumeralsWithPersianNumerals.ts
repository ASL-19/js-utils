/**
 * Replace Arabic (Hindu–Arabic/Western Arabic/Latin) numerals with Persian
 * (Perso-Arabic) numerals.
 *
 * @public
 */
const replaceArabicNumeralsWithPersianNumerals = (input: string) =>
  input.replace(/\d/g, (westernArabicNumeral) => {
    const index = parseInt(westernArabicNumeral, 10);
    return ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"][index];
  });

export default replaceArabicNumeralsWithPersianNumerals;
