function selectionSort(arr) {
  let min;

  // start passes.
  for (let i = 0; i < arr.length; i++) {
    // index of the smallest element to be the ith element.
    min = i;

    // check through the rest of the array for a lesser element
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }

    // compare the indexes
    if (min !== i) {
      // swap
      [arr[i], arr[min]] = [arr[min], arr[i]];
    }
  }

  return arr;
}

console.log(selectionSort([29, 72, 0, 13, 87, -1, 52, 51, -10]));
