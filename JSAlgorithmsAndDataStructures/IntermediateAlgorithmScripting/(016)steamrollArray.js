// This function takes in an array as input with various nested elements and flattens it into a 1D array.
function steamrollArray(arr) {
  const flatArr = [];

  // iterate through arr contents
  for (let i = 0; i < arr.length; i++) {
    // check if current element is an array that needs to be flattened further
    if (Array.isArray(arr[i])) {
      // if array needs to be flattened, recursively push it into function
      flatArr.push(...steamrollArray(arr[i]));
    }
    else {
      flatArr.push(arr[i]);
    }
  }

  return flatArr;
}

// This input should return [1, 2, 3, 4]
steamrollArray([1, [2], [3, [[4]]]]);
