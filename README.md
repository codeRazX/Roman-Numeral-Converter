# Arabic to Roman Numeral Converter

This is a simple project that converts integer numbers (Arabic numerals) to their Roman numeral equivalent. The program takes an integer as input and returns its representation in Roman numerals.

## Functionality

The program converts an integer into its Roman numeral representation following the standard Roman numeral rules. The conversion process considers basic Roman numerals such as `I`, `V`, `X`, `L`, `C`, `D`, `M` and their combinations.

### Example Conversion:
- **1987** converts to **MCMLXXXVII**
- **3999** converts to **MMMCMXCIX**
- **58** converts to **LVIII**
- **9** converts to **IX**
- **44** converts to **XLIV**

**Note**: The program does not support negative numbers or numbers greater than or equal to 4000, as Roman numerals are traditionally limited to values below 4000. In modern extensions, larger values can be represented using lines above the numerals, but this conversion only works for numbers between 1 and 3999.