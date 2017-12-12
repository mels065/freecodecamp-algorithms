function convertToRoman(num) {
  const romanNumerals = ['I', 'X', 'C', 'M'];
  const fiveRomanNumerals = ['V', 'L', 'D'];

  var resultStrArr = [];
  String(num).split('').reverse().forEach((digit, i) => {
    if (i === romanNumerals.length - 1 && digit >= 4) throw new Error('Must not exceed maximum for available roman numerals');

    switch (digit) {
      case '4': {
        resultStrArr.push(`${romanNumerals[i]}${fiveRomanNumerals[i]}`);
        break;
      }
      case '5': {
        resultStrArr.push(`${fiveRomanNumerals[i]}`);
        break;
      }
      case '9': {
        resultStrArr.push(`${romanNumerals[i]}${romanNumerals[i+1]}`);
        break;
      }
      default: {
        if (digit <= 3) resultStrArr.push(romanNumerals[i].repeat(digit));
        else if (digit <= 8) resultStrArr.push(`${fiveRomanNumerals[i]}${romanNumerals[i].repeat(digit-5)}`);
      }
    }
  });

  return resultStrArr.reverse().join('');
}

convertToRoman(36);
