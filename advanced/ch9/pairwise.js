function pairwise(arr, arg) {
  const used = Array.apply(null, {length: arr.length}).fill(false);
  return arr.reduce((total, cur1, i) => {
    if (used[i]) return total;

    return total + arr.reduce((subtotal, cur2, j) => {
      if (willSkip()) return subtotal;

      if (cur1 + cur2 == arg) {
        used[i] = true;
        used[j] = true;
        return i + j;
      }

      return subtotal;

      function willSkip() {
        const isSameIndex = i == j,
              subtotalFound = !!subtotal;

        return isSameIndex || subtotalFound || used[j];
      }
    }, 0);
  }, 0);
}

pairwise([1,4,2,3,0,5], 7);
