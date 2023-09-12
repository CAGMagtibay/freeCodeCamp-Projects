// This function takes a string as input and returns the length of the longest word.
function findLongestWordLength(str) {
  let splitStr = str.split(" ");
  //console.log(splitStr);
  let longestWordLength = 0;

  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i].length > longestWordLength) {
      longestWordLength = splitStr[i].length;
      //console.log(longestWordLength);
    }
  }

  return longestWordLength;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
