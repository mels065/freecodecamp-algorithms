function findElement(arr, func) {
  return arr.reduce((result, elem) => {
    if (result) return result;
    if (func(elem)) return elem;
  }, undefined);
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
