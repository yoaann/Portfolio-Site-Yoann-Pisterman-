console.log("Welcome to my Portfolio site");
// You can press the green "run" button to execute the lesson from above
// Feel free to experiment with the code by changing some values here or "open in repl.it button" on the right

// Strings
console.log('---------------');
console.log('Strings lesson');
console.log('-');

// Edit below
var text1 = "Hi,";
var text2 = "I’m Yoann Pisterman based in Berlin.";
var text3 = 'Digital designer analog artist.';

var escapedText1 = "He said: \"Yes!\", that's for sure";
var escapedText2 = 'He said: "Yes!", that\'s for sure';

// a single console.log()
console.log(text1);
// Or combine the variables separated by commas in a single console.log()
console.log(text2, text3);
console.log(escapedText1, escapedText2);


// Numbers
console.log('Numbers lesson:');
console.log('-');
var numberInteger = 456;
var numberInteger2 = -345; // This is negative integer
var numberFloat = 50.25;

console.log(numberInteger); // try console.logging the next two numbers
console.log(numberInteger2); // try it out
console.log(numberFloat);


console.log('---------------');

var {
  thisVariableDoesntExist,
  doesntExist
} = 'helpers'; // don't mind me I'm just a helper.
// Booleans
console.log('Booleans lesson:');
console.log('-');

var boolean1 = true;
var boolean2 = false;
var notABoolean = "false"; // This is just the string "false", not false!

console.log(boolean1);
console.log(boolean2);

console.log(notABoolean);

console.log('---------------');

// Null and Undefined
console.log('Null and Undefined lesson:');
console.log('-');

console.log(thisVariableDoesntExist); // Will output undefined

var emptyVariable = null;
var notNullButAString = "null";
console.log(doesntExist); // Outputs undefined
console.log(emptyVariable); // Outputs Null
console.log(notNullButAString); // Outputs "null" - not the same as null!

console.log('----Objects-----');

var person = {
  name: "John",
  age: 39
};

console.log(person);

console.log('-');

console.log('----nested-----');
var age = 39;
var name = "John";
var personParent = {
  name: name,
  age: age,
  child: {
    name: "Sara"
  }
};
console.log(age, name, personParent);

personParent.name = "Anne"; // Set the name property to "Anne"
personParent.child.size = 175; // Set new values that weren't set before
console.log(personParent.child.name); // Output "Sara" to the console
console.log(personParent.name); // Output "Anne" to the console
console.log("Anne"); // Output "Anne" to the console other option

console.log('-');

console.log(personParent["name"]); // The same as personParent.name
var weWantThisField = "age";
console.log(personParent[weWantThisField]); // The same as personParent.age

console.log('---------------');
var shortObject = {
  name: "John",
  age: 31
};
var emptyObject = {}; // Objects can be empty. You can add properties later

delete shortObject.name; // Will remove the "name" property


// one lined objects
console.log('------ one lined objects ------');

var shortObject = {
  name: "John",
  age: 31
};
console.log(shortObject);

var emptyObject = {}; // Objects can be empty. You can add properties later
console.log('I\'m an empty object: ', emptyObject);

delete shortObject.name; // Will remove the "name" property
console.log('name property removed: ', shortObject); // note that the name property is now removed

console.log('---------------');

var shortArray = [1,2,3];
var mixedArray = [
  1,
  "Hello",
  {},
  ["nested array"]
];
shortArray[0] = 100
console.log(shortArray[0]); // Outputs "1", the first value
console.log(mixedArray[3][0]); // Outputs "nested array"

console.log('-');
var myArray = [1,2];
myArray.push(3);
myArray.push("Test");
console.log(myArray); // Will output: [1,2,3, "Test"]

console.log('---------------')

// Functions
console.log('---- Functions -----');

function add(number1, number2) {
	return number1 + number2;
}

var result = add(10, 100); // The value of "result" will now be 110
console.log(result);

var { addAge } ='helpers'; // don't mind me I'm just a helper.

// function scoping
console.log('------ function scoping ------');

var age = 76;
function doSomething() {
	var addAge = 10;
	return age + addAge; // We can access age inside of the function
};

console.log(age); // Returns 76, as age was defined outside of functions
console.log(addAge); // Returns undefined, as addAge was defined inside of func.

function doSomething(variable1, variable2) {
	// In this case, variable2 will be undefined
	return variable1 + ' ' + variable2; // we are just adding a space in between the two variables.
}
doSomething(1); // Only one parameter given

console.log(doSomething(1)); // you can console log functions as well, but for best practice, assign it to a variable

function doSomethingElse(variable1, variable2) {
	return variable1 + variable2;
}

// assigning functions to variables
var add = doSomethingElse(1, 2); // we give this function Numbers to add
console.log(add);

var somethingWithStrings = doSomethingElse('1', '2'); // we give this function Strings to "concatenate"
console.log(somethingWithStrings); // whoa, why 12? what happened here is that we are "concatenating" two string values.

var somethingWithNumberAndString = doSomethingElse(1, '2'); // we give this function Strings to "concatenate"
console.log(somethingWithNumberAndString); // whoa weird, I have one Number and one String, why still 12? There are many nuances in JavaScript, this is called type coercion.

// Assign functions to object properties, this function on an Object is now referred to as a 'method'
console.log('------ Assign functions to object properties (methods) ------');
var myObject = {};
myObject.add = function(number1, number2) {
	return number1 + number2;
};

// to execute a method from our myObject, we have to 'invoke' it (a way to describe that you want to execute the function method on myObject)
myObject.add(10, 2);
console.log(myObject.add(10, 10));

// Or as we learned, assigning to a variable
var addResult = myObject.add(10, 50);
var addResult2 = myObject.add(20, 667);
var addResult3 = myObject.add(17, 577);
console.log(addResult, addResult2, addResult3); // logging out multiple results in one invocation of console.log

var a = { age: 1 };
var b = a;
b.name = "John"; // a.name will now also be "John"
console.log(a);
console.log(b);

// Let's practice with a basic Todo function.
// The functionality will let us retrieve the list of todos, add a todo, edit a todo, and delete a todo from our list.
console.log('------ A todo list ------');

var todoList = []; // let's create an empty todo list with an empty array.

var getTodoList = function() {
	if (todoList.length) {
		return console.log('My todo list:', todoList);
	}
	return console.log('No todos today hurray 🎉');
}

// Our addAtodo function specifies that it takes a todo as it's argument
// we can add all sorts of data types.
var addAtodo = function(todo) {
	return todoList.push(todo);
}

// Our removeAtodo function specifies that it takes an index as it's argument
var removeAtodo = function(index) {
	// here we've seen the delete functionality in action before, here it will delete data at the specified array location given the index
	return delete todoList[index];
}

// Our updateAtodo function specifies that it takes an index and a newTodo as it's arguments
var updateAtodo = function(index, newTodo) {
	// here we have seen this before to access and override existing data in an array.
	return todoList[index] = newTodo;
}

var v = getTodoList();
console.log(v);

// let's create and add a todo item to our empty array list.
var myFirstTodo = 'Make coffee and take out the trash.';
var mySecondTodo = 'Order more stuff I might need from Amazon Prime.';
var myThirdTodo = 'Work on CareerFoundry assigments :)';

addAtodo(myFirstTodo);
addAtodo(mySecondTodo);
addAtodo(myThirdTodo);

console.log('-');
console.log(getTodoList()); // as we can see, the result is an array with 3 Strings.

// So now let's say we completed our second todo item and want to delete it, and we see that our delete function requires an index as it's argument.
// remember going over indexes? If not please refer back to the array section.
// Our second todo item is at index 1, remember Arrays start at 0 index.
console.log('-');
removeAtodo(1);
console.log(getTodoList()); // as you can see the todo item at index 1 has been removed and a "<1 empty item>" is stated. This is generated when using the delete function. There are many ways to remove or "delete" data in JavaScript, this is the most basic implementation.
console.log('-');
updateAtodo(2, 'Assignments are all done, and I can chill for the day.');
console.log(getTodoList());

// here we are adding an Object (complex data type)
var myFourthTodo = {
	id: 1, // here we are just adding an id to identify our fourth todo with a Number data type
	item: 'go to the gym.',
	completed: false // false is a boolean
};

console.log('-');
addAtodo(myFourthTodo);
console.log(getTodoList());

var amoutToDeposit = 1280.52 + 99 + 25877.15;
// Lets just update our second todo with something
var anotherTodoItem = {
	bankName: 'The bank of cats and dogs',
	depositToBank: 'check amout (cause I can\'t do math :X):' + '🐱 ' + amoutToDeposit
};

console.log('-');
updateAtodo(1, anotherTodoItem);
console.log(getTodoList()); // as we can see the Object is now added to our todo list.

// Resources on the JavaScript native delete functionality https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/delete
// https://codeburst.io/javascript-what-is-the-return-statement-97d8b11a1a0c
console.log('---------------');
