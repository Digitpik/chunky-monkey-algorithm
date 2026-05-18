function chunkArrayInGroups(arr, size) {
  const tempArray = [];
  let i = 0;

  // Track pointers to slice array chunks into sub-arrays
  while (i < arr.length) {
    tempArray.push(arr.slice(i, i + size));
    i = i + size;
  }

  return tempArray;
}

// Verification Logs
console.log("--- Testing Chunky Monkey Algorithm ---");
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); 
// Output: [["a", "b"], ["c", "d"]]

console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)); 
// Output: [[0, 1, 2], [3, 4, 5], [6]]
