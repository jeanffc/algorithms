function bubbleSort(arr) {
  // outer pass
  for (let i = 0; i < arr.length; i++) {
    // inner pass
    for (let j = 0; j < arr.length - i - 1; j++) {
      // comparison using ascending order
      if (arr[j] > arr[j + 1]) {
        // swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log(bubbleSort([5, 3, 8, 4, -1]));
