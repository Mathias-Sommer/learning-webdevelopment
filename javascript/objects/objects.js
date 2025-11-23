// objects

const objectName = {
    'key': "value",
    // can add more and all datatypes if needed
}

const person = {
    'name': "Mathias",
    'age': 26,
    'isHandsome': true,
    'income': 150.23,
    'speak': function(word){
        console.log(word);
    } ,
    talk(){
        console.log("I am talking")
    }  // you can add functions inside objects
       // and you can create multiple (object literal)
}

// print key values from the object
console.log(person['name']);
console.log(person['age']);
console.log(person['isHandsome']);
console.log(person['income']);

// append new key and value to the object
person['favoriteFood'] = 'Pizza'; // i can add even though it's a const
console.log(person['favoriteFood']);

person.speak("Meow!"); // makes it say Meow. 


