/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line.
*/

//-------------------
// PART 1: Function Syntax
//-------------------

// EXAMPLE: Write a function below that, when called will log "Severus Snape" to the console
function printName() {
  console.log("Severus Snape");
};
// This example has a typo - there should not be a semicolon after the end of the function
printName();
printName();
printName();
printName();
// Since the function was called 4 times, "Severus Snape" will log 4 times.


// YOU DO: Write a function named sayHello that logs to the console "Oh, Hello!"
// Then, call the function 2 times.
function sayHello() {
  console.log('Oh, Hello!');
}

sayHello();
sayHello();

//-------------------
// PART 2: Arguments and Parameters
//-------------------

// YOU DO: Write a function named greetMe that takes an argument, a String, of a name.
// The function should print out the value of the String that was passed in.
// Then, call the function 3 times, each time, passing it a different name.
function greetMe(name1) {
  console.log( 'Hi there ' + name1);
}

greetMe('Carl');
greetMe('Gregory');
greetMe('Mary');

// YOU DO: Write a function that takes in 2 numbers as arguments, Numbers, and logs their sum
// Then, call that function 3 times, each time, passing in 2 different Numbers.
function doMath(num1,num2){
  var sum = num1 + num2;
  console.log(sum);
}

doMath(3,4);
doMath(10,37);
doMath(84,-76);

// YOU DO🎈: Write a function that takes in two strings and prints a concatenation
// of those two strings, for example the arguments could be ("Oscar", "Ruck") and
// the end result might be "Oscar and Ruck are BFFS".  Then, call that function.
function thingsToDo(task1,task2){
  console.log('First ' + task1 + ', then ' + task2 + ', if there is any time left afterwards, practice self care!');
}

thingsToDo('work on mod1 prework','cook dinner');

//-------------------
// PART 3: Naming is Hard
//-------------------

/*
Naming is notoriously hard in programming. It is a skill to name a variable or function concisely enough
that it is reasonable to type, but descriptive enough that others can infer the meaning.

Look at the code you wrote for the previous YOU DO🎈 - what did you name the function, and why?
What did you name each parameter, and why?


EXPLAIN:
For the last YOU DO section I named my function thingsToDo because I wanted the function to print a concatenation telling
me what I needed to do. This lead me to name my parameters task1 and task2 because this is very descriptive and tells me exactly
the type of arguments I should declare for these parameters. 

*/
