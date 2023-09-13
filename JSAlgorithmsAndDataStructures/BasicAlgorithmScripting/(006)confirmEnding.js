// This function takes in a string and a target and confirms whether the string ends in the target string.
function confirmEnding(str, target) {
  let slicedStr = str.slice(str.length - target.length);
  return slicedStr === target;
}

confirmEnding("Bastian", "n");
