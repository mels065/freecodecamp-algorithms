function translatePigLatin(str) {
  const vowels = new Set(['a', 'i', 'u', 'e', 'o'])

  if (vowels.has(str[0])) {
    return `${str}way`;
  }

  var i = 0;
  while (!vowels.has(str[i])) i++;
  return `${str.slice(i)}${str.slice(0, i)}ay`;
}

translatePigLatin("consonant");
