// this function takes a string of letters in alphabetical order as input and returns a missing letter within the range if possible
function fearNotLetter(str) {
  // iterate through str
  for (let i = 0; i < str.length; i++) {
    // get ASCII code of current character
    const charCode = str.charCodeAt(i);

    // if the code of current character isn't equal to the code of 1st character of str + iterations, then a letter was skipped in str
    if (charCode !== str.charCodeAt(0) + i) {
      // return skipped character
      return String.fromCharCode(charCode - 1);
    }
  }

  // all letters in range are present, return undefined
  return undefined;
}

// This input should return "d"
fearNotLetter("abce");
