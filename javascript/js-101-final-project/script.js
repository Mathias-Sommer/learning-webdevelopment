// Step 1: Fill in these three consts by selecting the right nodes by their HTML ID's
const nameElement = document.getElementById("name"); // Fill this in 
const ageElement = document.getElementById("age"); // Fill this in.
const dogYearsElement = document.getElementById("dogyears"); // Fill this in. 

// Step 2. Set the values.
// Example: myNode.innerText = "something"
// Set `name` and `age` in here
nameElement.innerText = 'Mathias';
console.log(ageElement.innerText = 26)


function showDogYears(age) {
  // Step 3. Cast `age` as a number

  return Number(age) * 7
}

// Step 4. Set the parameter of showDogyears()
dogYearsElement.innerText = showDogYears(ageElement.innerText)

// Step 5. Select all the .fake-input classes and give them the class of .real-input. This may take a little "googling" to find the solution, but that's half of what web development is all about. 
const fakeInputs = document.querySelectorAll(".fake-input")
fakeInputs.forEach(node => {
  node.classList.add("real-input")
})