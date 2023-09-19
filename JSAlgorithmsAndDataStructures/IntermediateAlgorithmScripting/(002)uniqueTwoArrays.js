// This function takes in two arrays as input and outputs a new array with the contents found in only one array, not both.
function diffArray(arr1, arr2) {
  const newArr = [];

  // check arr2 for arr1 elements
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) {
      newArr.push(arr1[i])
    }
  }

  // check arr1 for arr2 elements
  for (let i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) === -1) {
      newArr.push(arr2[i])
    }
  }

  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
// This input should return [4]
