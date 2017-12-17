function dropElements(arr, func) {
  // Drop them elements.
  return arr.reduce((result, elem, i, arr) => {
    if (result.length > 0) return result;
    if (func(elem)) {
      return arr.slice(i);
    }
    return result;
  }, []);
}

dropElements([1, 2, 3], function(n) {return n < 3; });
