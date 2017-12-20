function updateInventory(arr1, arr2) {
  return arr2.reduce((newArr, item) => {
    const i = findItem(item[1]);
    // ~ changes -1 to 0
    if (!~i) newArr = mergeSort(newArr.concat([item]));
    else newArr[i][0] += item[0];
    return newArr;
  }, [...arr1]);

  function findItem(name) {
    var first = 0,
        last = arr1.length;

    while(first < last) {
      let middle = Math.floor((first + last) / 2);
      if (name == arr1[middle][1]) return middle;
      else if (name > arr1[middle][1]) first = middle + 1;
      else last = middle - 1;
    }

    return -1;
  }

  function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const middle = Math.floor(arr.length / 2);
    return merge(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle)));

    function merge(arr1, arr2) {
      const newArr = [];
      while (arr1.length > 0 && arr2.length > 0) {
        if (arr1[0][1] <= arr2[0][1]) newArr.push(arr1.shift());
        else newArr.push(arr2.shift());
      }

      while (arr1.length > 0) newArr.push(arr1.shift());
      while (arr2.length > 0) newArr.push(arr2.shift());

      return newArr;
    }
  }
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
