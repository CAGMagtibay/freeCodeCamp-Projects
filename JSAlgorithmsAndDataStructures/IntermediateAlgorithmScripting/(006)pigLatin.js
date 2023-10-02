// This function takes in a word string as input and returns the word as pig latin.
function translatePigLatin(str) {
  const vowelRegex = /^[aeiou]/i;

  // if str begins with a vowel, return string with "way" at the end
  if (str.match(vowelRegex)) {
    return str + "way";
  }

  // take first consonant or consonant cluster
  const cons = str.match(/^[^aeiou]+/)[0];
  return str.substring(cons.length) + cons + "ay";
}

// This input should return "onsonantcay"
translatePigLatin("consonant");
