let arrayShowcase = ["one", 2, 3.0, "four", [], {}]; // holds all datatypes also arrays inside

// add stuff to the array
let array = [];
array.push("This is a string value");
array.push("This is a string value AGAIN");
array.push(100);
array.push(500);
array.push(600);
array.push(900);

console.log(array);

// remove last element
array.pop();
console.log(array);

// remove specific element
array.splice(array.indexOf("This is a string value AGAIN"), 1);
// finding the index of the string, then passing that to the splice function
// so you could do array.splice(1);
//  ['This is a string value', 'This is a string value AGAIN', 100, 500, 600, 900]
// index:     0                        1                        2    3    4    5
console.log(array);

// loops
const arr = ["One", "Two", "Three", "Four"];

// Looping through the array OLD SCHOOL
console.log("Old school for loop")
for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
};

console.log("Modern .forEach function")
arr.forEach(value => {
    console.log(value)
});