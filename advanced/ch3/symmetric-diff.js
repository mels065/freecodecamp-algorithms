function sym(args) {
  return Array.from(arguments).reduce((cur, next) => {
    return Array.from(
      new Set(
        [].concat(
          cur.filter(notInArray(next)),
          next.filter(notInArray(cur))
        )
      ).values()
    );
  });

  function notInArray(arr) {
    return (val) => {
      // Bitwise negation will turn -1 into a 0
      return !~arr.indexOf(val);
    };
  }
}

sym([1, 2, 3], [5, 2, 1, 4]);
