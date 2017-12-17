function smallestCommons(arr) {
  const min = Math.min(...arr), max = Math.max(...arr);
  return Array.apply(null, {length: (max - min) + 1}).map((_, i) => min + i)
    // https://en.wikipedia.org/wiki/Least_common_multiple#Reduction_by_the_greatest_common_divisor
    .reduce((current, next) => Math.abs(current * next) / euclidean(current, next));


  // https://en.wikipedia.org/wiki/Euclidean_algorithm
  function euclidean(a, b) {
    if (a < b) {
      const temp = a;
      a = b;
      b = temp;
    }
    const r = a % b;
    return r ? euclidean(b, r) : b;
  }
}


smallestCommons([1, 5]);
