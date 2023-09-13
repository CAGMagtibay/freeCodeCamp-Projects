// This function takes in an array as input.
// It removes all falsy values from it and returns a new array.
function bouncer(arr) {
  let newArr = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

bouncer([7, "ate", "", false, 9]);
// This input should return [7, "ate", 9]
