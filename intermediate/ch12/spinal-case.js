function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  const regexp = /[\s_]|\d*(?=[A-Z])/g;
  return str.split(regexp).join('-').toLowerCase();
}

spinalCase('AllThe-small Things');
