// This function takes in a string as input and outputs a 2D array containing base pairs based off the given string
function pairElement(str) {
  const pairs = [];

  // iterate through str and add pairs to the pairs array
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "A":
        pairs.push(["A", "T"]);
        break;
      case "C":
        pairs.push(["C", "G"]);
        break;
      case "G":
        pairs.push(["G", "C"]);
        break;
      case "T":
        pairs.push(["T", "A"]);
        break;
    }
  }

  return pairs;
}

// This input should return [["G", "C"], ["C", "G"], ["G", "C"]]
pairElement("GCG");
