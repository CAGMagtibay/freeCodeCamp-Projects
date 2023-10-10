// This function sums two arguments together. If only one argument is provided, it returns a function that expects one argument and returns the sum.
// If either of the arguments are not a number, it returns undefined.
function addTogether() {
  // turn arguments into variables
  const [item1, item2] = arguments;

  // check if there are 2 arguments
  if (arguments.length === 2) {
    // if both items are numbers, return sum
    if (typeof(item1) === "number" && typeof(item2) === "number") {
      return item1 + item2;
    }
    // else, return undefined
    return undefined;
  }
  // if only one argument, return a function that uses the number and expects another one
  else {
    // check if item is a number
    if (typeof(item1) === "number") {
      return (item2) => addTogether(item1, item2);
    }
    return undefined;
  }

  return false;
}

// This input should return 5
addTogether(2,3);
