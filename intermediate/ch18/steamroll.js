function steamrollArray(arr) {
  // I'm a steamroller, baby
  let newArr = [];
  for (let elem of arr) {
    console.log(elem);
    if (Array.isArray(elem)) newArr = newArr.concat(steamrollArray(elem));
    else newArr.push(elem);
  }
  return newArr;
}

steamrollArray([1, [2], [[3], [[4]]]]);
