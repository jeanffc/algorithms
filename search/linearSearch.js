const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
};

console.log(linearSearch([1, 2, 3], 3)); // 2
console.log(linearSearch([1, 2, 3], 0)); // -1
console.log(linearSearch([], 1)); // -1
