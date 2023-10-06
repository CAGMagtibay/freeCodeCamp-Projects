// This function converts certain characters in a given string to their HTML entities
function convertHTML(str) {
  // create HTML entities object
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  }

  // replace characters with html entities
  return str.replace(/([&<>\"'])/g, char => htmlEntities[char]);
}

// This input should return "Dolce &amp; Gabbana"
convertHTML("Dolce & Gabbana");
