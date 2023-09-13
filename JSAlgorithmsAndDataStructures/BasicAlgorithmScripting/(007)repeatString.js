// This function repeats a given string for a given num times.
function repeatStringNumTimes(str, num) {
  if (num <= 0) {
    return "";
  }

  let repStr = "";

  for (let i = 0; i < num; i++) {
    repStr += str;
  }
  return repStr;
}

repeatStringNumTimes("abc", 3);
