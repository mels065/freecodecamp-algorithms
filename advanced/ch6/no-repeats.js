function permAlone(str) {
  // 1 length strings will only have 1 non-repeating permutation
  if (str.length == 1) return 1;
  // a string with the same repeating character from beginning to end has 0 non-repeating permutations
  else if (/(^\w)\1+$/.test(str)) return 0;
  return generatePerms(str).filter(elem => !/(\w)\1+/.test(elem)).length;

  function generatePerms(str) {
    const strArr = str.split(''),
          result = [];

    generate(strArr.length);
    return result;

    function generate(n) {
      if (n == 1) {
        result.push(strArr.join(''));
      }
      else {
        for (let i = 0; i < n; ++i) {
          generate(n-1);
          swap(n % 2 ? 0 : i, n - 1);
        }
      }
    }

    function swap(i, j) {
      const temp = strArr[i];
      strArr[i] = strArr[j];
      strArr[j] = temp;
    }
  }
}

permAlone('aabb');
