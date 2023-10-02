// THis function takes in two arrays of objects as input
// It returns an array of objects that have matching value pairs given in the second argument array
function whatIsInAName(collection, source) {
  const matches = [];

  // iterate through collection
  for (let i = 0; i < collection.length; i++) {
    let mismatch = false;

    // iterate through match criteria
    for (const sourceArg in source) {
      // if argument doesn't match source argument, change mismatch
      if (collection[i][sourceArg] !== source[sourceArg]) {
        mismatch = true;
      }
    }

    // add matches to new array
    if (!mismatch) {
      matches.push(collection[i]);
    }
  }

  return matches;
}

// This input should return [{first: "Tybalt", last: "Capulet"}]
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
