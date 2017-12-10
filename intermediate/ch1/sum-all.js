function sumAll(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  return Array.apply(null, {length: (max - min) + 1})
    .map((_, i) => min + i)
    .reduce((total, num) => total + num, 0)
}

sumAll([1, 4]);
