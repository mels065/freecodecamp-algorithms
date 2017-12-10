function diffArray(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  return [].concat(arr1.filter(not(inBothSets)), arr2.filter(not(inBothSets)));

  function inBothSets(elem) {
    return set1.has(elem) && set2.has(elem);
  }

  // https://stackoverflow.com/a/37399684/4648099
  function not(cb) {
    return (elem) => !cb(elem);
  }
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
