// This function takes in a string and returns it with the first letter of each word capitalized.
function titleCase(str) {
  let titleArr = [];
  let splitStr = str.split(" ");
  
  for (let word in splitStr) {
    titleArr[word] = splitStr[word][0].toUpperCase() + splitStr[word].slice(1).toLowerCase();
  }

  return titleArr.join(" ");
}

titleCase("I'm a little tea pot");
// This input should return "I'm A Little Tea Pot"
