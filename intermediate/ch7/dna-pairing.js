function pairElement(str) {
  const AT = ['A', 'T'];
  const CG = ['C', 'G'];

  const newArr = [];
  str.split('').forEach(elem => {
    let i, subArr = [elem];
    // Bitwise negation (~) will turn a -1 into a 0, a falsy value
    if (~(i = AT.indexOf(elem))) subArr.push(AT[(i+1)%2]);
    else if (~(i = CG.indexOf(elem))) subArr.push(CG[(i+1)%2]);
    newArr.push(subArr);
  });
  return newArr;
}

pairElement("GCG");
