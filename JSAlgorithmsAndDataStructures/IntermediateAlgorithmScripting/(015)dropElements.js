// This function takes an array and a function as input, iterating and removing elements until the function returns as true
function dropElements(arr, func) {
  // iterate through arr while removing elements
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  }
  return arr;
}

// This input should return [2, 3]
dropElements([1, 2, 3], function(n) {return n < 3; });
