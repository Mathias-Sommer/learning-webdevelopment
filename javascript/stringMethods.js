// Learning string Methods
// Popular ones: .search(), .slice(), .substr(),
// .replace(), .toUpperCase(), .toLowerCase(),
// .trim(), .split()

let string = "This is a VERY long string containing NON-sense.";

let search = string.search("containing");
console.log(search); // Index of the "c" in containing = 27. Index starts with 0 to ...

let slice = string.slice(27, 37); // Slicing the "containing" out of the string. From index 27 to index 37 (CUT IT OUT).
console.log(slice);

let subString = string.substr(10); // prints "very long string containing non-sense."
console.log(subString);

let replace = string.replace("long", "short");
console.log(replace);

let upperCase = string.toUpperCase(); // Prints the whole string to upper.
console.log(upperCase);

let lowerCase = string.toLowerCase() // Prints the whole string to lower.
console.log(lowerCase);

let trimString = "I am     learning programming it's  very fun!  ";
let trimWhiteSpace = trimString.trim(); // Trims leading and ending spaces
console.log(trimWhiteSpace);

let split = string.split(" "); // Makes the string into an array. Splits every space.
                               // ['This', 'is', 'a', 'VERY', 'long', 'string', 'containing', 'NON-sense.'] (8)
let split2 = string.split("-");// Makes the string into an array. Splits on "-"
                               // ['This is a VERY long string containing NON', 'sense.'] (2)
console.log(typeof(split), split)
console.log(split2)