// function
function functionName(param1, param2) {
    // logic
    return "RETURN SOMETHING"
}

//functionName(data1, data2); // calling it with parameters


// rest operator (...)
function addNumbers(greetingName, ...numbers){
    let total = 0;
    for(index in numbers){
        total = total + numbers[index];
    }
    return `${greetingName}: the total is ${total}`;
}

const newTotal = addNumbers("Mathias", 1, 4, 7, 13);
console.log(newTotal);

// so ...numbers means that numbers is a list of items (array)