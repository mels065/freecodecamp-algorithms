function uniteUnique(arr) {
  const set = new Set();
  return [].concat(...arguments).reduce((newArr, elem) => {
    if (!set.has(elem)) {
      set.add(elem);
      newArr.push(elem);
    }
    return newArr;
  }, []);
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
