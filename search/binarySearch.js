const binarySearch = (arr, val) => {
  let lowIndex = 0;
  let hightIndex = arr.length;

  while (lowIndex < hightIndex) {
    const midIndex = Math.floor(lowIndex + (hightIndex - lowIndex) / 2);

    // If the element is present at the middle
    // return itself
    if (val === arr[midIndex]) {
      return midIndex;
      // If the element is greather than mid, then
      // it can only be present in right subarray
    } else if (val > arr[midIndex]) {
      lowIndex = midIndex + 1;
      // Else element is smaller than mid, then
      // it can only be present in left subarray
    } else {
      hightIndex = midIndex;
    }
  }
  // Element is not present in array
  return -1;
};

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 4)); // 3
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 6)); // 5
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 3)); // 2
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7], 8)); // -1
console.log(binarySearch([1, 2, 3, 4, 5, 6], 2)); // 1
console.log(binarySearch([1, 2, 3], 2)); // 1
console.log(binarySearch([1, 2], 2)); // 1
console.log(binarySearch([1, 2], 3)); // -1
console.log(binarySearch([1], 1)); // 0
console.log(binarySearch([1], 2)); // -1
console.log(binarySearch([], 2)); // -1
