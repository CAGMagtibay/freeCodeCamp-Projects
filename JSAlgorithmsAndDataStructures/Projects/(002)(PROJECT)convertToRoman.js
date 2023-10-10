// This function takes a given number and converts into a Roman numeral string.
function convertToRoman(num) {
 let currentNum = num;
 let romanStr = "";
 // create Roman/Arabic lookup table
 const numeralLookup = {
   "M": 1000,
   "CM": 900,
   "D": 500,
   "CD": 400,
   "C": 100,
   "XC": 90,
   "L": 50,
   "XL": 40,
   "X": 10,
   "IX": 9,
   "V": 5,
   "IV": 4,
   "I": 1
   };

  for (let comp in numeralLookup) {
    // find largest value that currentNum is greater than
    while (currentNum >= numeralLookup[comp]) {
      // add roman digits to output string
      romanStr += comp;
      //console.log(romanStr)
      //decrement the current num and continue looping through lookup table
      currentNum -= numeralLookup[comp];
    }
  }

 return romanStr;
}

// This input should return "XXIX"
convertToRoman(29);
