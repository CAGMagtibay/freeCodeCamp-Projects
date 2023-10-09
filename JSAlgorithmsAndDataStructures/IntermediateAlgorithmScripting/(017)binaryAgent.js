// This function takes in a string of binary as input and translates it into English.
function binaryAgent(str) {
  // split binary string into individual characters
  let splitBinary = str.split(" ");
  let binChars = [];

  // iterate through binary phrases and convert to letters
  for (let i = 0; i < splitBinary.length; i++) {
    binChars.push(String.fromCharCode(parseInt(splitBinary[i], 2)));
  }

  return binChars.join("");
}

// This input should return "Aren't bonfires fun!?"
binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
