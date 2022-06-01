function insertionSort(arr) {
  let Array = arr.sort(function (a, b) {
    return a - b;
  });
  return Array;
}

let arr = [7, 9, 2, 1, 4, 5, 5, 6];
console.log(insertionSort(arr));
