// This function takes two or more arrays as input and returns a new array of unique values in their original order
function uniteUnique(arr) {
  // turn arguments into an iterable array
  const args = [...arguments];
  // create unique value array
  const uniqueVals = [];

  // iterate through arrays
  for (let i = 0; i < args.length; i++) {
    for (let j = 0; j < args[i].length; j++) {
      // if uniqueVals doesn't include current arr element, push to array
      if (!uniqueVals.includes(args[i][j])) {
        uniqueVals.push(args[i][j]);
      }
    }
  }

  return uniqueVals;
}

// This input should return [1, 3, 2, 5, 4]
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
