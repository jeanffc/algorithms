function insertionSort(arr) {
  // start from the second element
  for (let i = 1; i < arr.length; i++) {
    // start from the elements behind it
    for (let j = i - 1; j >= 0; j--) {
      //
      if (arr[j + 1] < arr[j]) {
        // swap
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }

  return arr;
}

console.log(insertionSort([10, -10, 3, 2, 1]));
