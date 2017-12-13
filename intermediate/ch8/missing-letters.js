function fearNotLetter(str) {
  let charCode = str.charCodeAt(0);
  for (let char of str.slice(1)) {
    charCode++;
    if (char.charCodeAt() !== charCode) return String.fromCharCode(charCode);
  }
}

fearNotLetter("abce");
