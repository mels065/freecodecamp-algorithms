function myReplace(str, before, after) {
  var match,
      newStr = str,
      regexp = new RegExp(before, 'gi');
  while ((match = regexp.exec(str))) {
    const matchedStr = match[0];
    let newSubstr = after;
    if (matchedStr === getCapitalizedStr(matchedStr)) {
      newSubstr = getCapitalizedStr(newSubstr);
    }
    newStr = `${newStr.slice(0, match.index)}${newSubstr}${newStr.slice(regexp.lastIndex)}`;
  }

  return newStr;

  function getCapitalizedStr(str) {
    return `${str[0].toUpperCase()}${str.slice(1, str.length).toLowerCase()}`;
  }
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
