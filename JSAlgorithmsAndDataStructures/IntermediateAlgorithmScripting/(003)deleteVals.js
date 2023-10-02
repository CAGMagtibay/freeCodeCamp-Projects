// This function takes an array as an input, followed by several arguments.
// The function then removes the given arguments from the array and returns a new array.
function destroyer(arr) {
  // select values to remove from arr
  const remoVals = Object.values(arguments).slice(1);
  const newArr = [];
  
  // iterate through arr
  for (let i = 0; i < arr.length; i++) {
    let removeItem = false;

    // iterate through values to be removed
    for (let j = 0; j < remoVals.length; j++) {
      if (arr[i] === remoVals[j]) {
        removeItem = true;
      }
    }

    // if removeItem = false, add item to newArr
    if (!removeItem) {
      newArr.push(arr[i]);
    }
  }
  
  return newArr;
}

// This input should return [1, 1]
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
