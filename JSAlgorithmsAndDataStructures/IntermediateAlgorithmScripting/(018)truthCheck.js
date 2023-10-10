// This function takes in an array collection of objects and an object property as input.
// It returns true if the object property is truthy on all elements of the collection; false otherwise.
function truthCheck(collection, pre) {
  // count how many elements pre is truthy on
  let truthyCount = 0;

  // iterate through collection
  for (let element in collection) {
    // if the collection has the property and the value is truthy, increment count
    if (collection[element].hasOwnProperty(pre) && Boolean(collection[element][pre])) {
      truthyCount++;
    }
  }

  // if pre is truthy on all elements, return true
  if (truthyCount === collection.length) {
    return true;
  }
  return false;
}

// This inpuyt should return false
truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");
