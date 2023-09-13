// This function takes in two arrays and an index.
// It copies each element of the 1st array into the 2nd starting at index n.
function frankenSplice(arr1, arr2, n) {
  let slicedArr2 = arr2.slice();

  for (let i = 0; i < arr1.length; i++) {
    slicedArr2.splice(n, 0, arr1[i]);
    n++;
  }

  return slicedArr2;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
// This input should return [4, 1, 2, 3, 5]
