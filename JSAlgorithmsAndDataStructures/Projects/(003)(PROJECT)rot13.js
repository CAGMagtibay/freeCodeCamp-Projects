// This function takes an encrypted Caesar cipher string as input and decrypts it, leaving non-alphabetical characters as is.
function rot13(str) {
  // create cipher decryption lookup
  const decryptLookup = {
    "A": "N",
    "B": "O",
    "C": "P",
    "D": "Q",
    "E": "R",
    "F": "S",
    "G": "T",
    "H": "U",
    "I": "V",
    "J": "W",
    "K": "X",
    "L": "Y",
    "M": "Z",
    "N": "A",
    "O": "B",
    "P": "C",
    "Q": "D",
    "R": "E",
    "S": "F",
    "T": "G",
    "U": "H",
    "V": "I",
    "W": "J",
    "X": "K",
    "Y": "L",
    "Z": "M"
  };

  let decryptStr = "";
  
  // iterate through string elements
  for (let i = 0; i < str.length; i++) {
    // check if element is in decryptLookup (is alphabetical)
    if (decryptLookup.hasOwnProperty(str[i])) {
      decryptStr += decryptLookup[str[i]];
      // console.log(decryptStr);
    }
    // if not alphabetical, add to decrypted string
    else {
      decryptStr += str[i];
      // console.log(decryptStr);
    }
    
  }

  return decryptStr;
}

// This input should return "FREE CODE CAMP"
rot13("SERR PBQR PNZC");
