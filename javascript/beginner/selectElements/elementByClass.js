const elements = document.querySelectorAll(".this-class");
console.log(elements); // returns all elements in a Nodelist
console.log(elements[2]); // returns index 2 (This is a class 3)

// looping through all elements.
// Let's get all the text in this-class
elements.forEach((textValue) => {
  console.log(textValue.innerHTML);
});

// Lets try and modify the text
elements.forEach((value, index) => {
  value.innerHTML += ` -> INDEX: ${index}`
});
