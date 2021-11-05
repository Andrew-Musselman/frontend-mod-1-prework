/*
In the exercises below, write your own code where indicated
to achieve the desired result.

One example is already completed. Your task is to complete
any remaining prompt.

Make sure to run the file with node in your command line. Look back
at the directions from Section 1 if you need a refresher on how to do that.
*/

//-------------------
// PART 1: Comparing variables
//-------------------

var numberTeachers = 4;
var numberStudents = 20;
var stringTeachers = "4";
var numberDogs = 0;

// EXAMPLE: log the result of the comparison: is numberTeachers greater than numberStudents?
console.log("Is numberTeachers greater than numberStudents?", numberTeachers > numberStudents);
// this should log: "Is numberTeachers greater than numberStudents?" false

// YOU DO: log the result of the comparison: is numberTeachers less than numberStudents?
// this should log: true

console.log('Is numberTeachers less that numberStudents', numberTeachers < numberStudents);

// YOU DO: log the result of the comparison: is numberTeachers equal to stringTeachers? (use the == operator)
// this should log: true
console.log('is numberTeachers equal to numberStudents', numberTeachers == stringTeachers);
/*
Note: this is an example of type coercion. Although stringTeachers is a string and numberStudents is an integer,
this statement still evaluated to true. JavaScript forces the stringTeachers into an integer to
perform this evaluation
*/

// YOU DO: log the result of the comparison: is numberTeachers strictly equal to stringTeachers? (use the === operator)
// this should log: false
console.log('is numberTeachers strictly equal to numberStudents', numberTeachers === numberStudents);
/*
Note: the strictly equal to operator compares the value of the variable in addition to the type of the variable.
since the numberTeachers is an integer value and the stringTeachers is a string value, although they are both equal to 4,
the comparison still evaluates to false.

In JavaScript, it is a best practice to use the strict comparison. It is said that, anytime a developer
thinks they _need_ to use the `==` loose comparison, they are doing something they shouldn't be. To help
you develop good habits that follow best practice, from now on, use the strict comparison.
*/

// YOU DO: log the result of the comparison: is numberTeachers not equal to numberStudents?
// this should log: true
console.log('is numberTeachers not equal to numberStudents', numberStudents !== numberTeachers);
// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 20?
// this should log: true
console.log('is numberStudents greater than or equal to 20', numberStudents >=20);
// YOU DO: log the result of the comparison: is numberStudents greater than or equal to 21?
// this should log: false
console.log('is numberStudents greater than or equal to 21', numberStudents >=21);
// YOU DO: log the result of the comparison: is numberStudents less than or equal to 20?
// this should log: true
console.log('is numberStudents less than or equal to 20', numberStudents <= 20);
// YOU DO: log the result of the comparison: is numberStudents less than or equal to 21?
// this should log: true
console.log('is numberStudents less than or equal to 21', numberStudents <= 21);

//-------------------
// PART 2: Articulating what you are doing
//-------------------

// For the following prompts, you will be given a line of code and your task is to type out a Comment,
// in English, explaining what that line of code is doing, including what the comparison will evaluate to.
// Be as technically precise as possible, but don't just copy and paste a definition from the readings.
// Make sure YOU can explain it that way!

console.log('1', 4 < 9);
//YOU DO: Explain.
//This line of code is using the less than comparison operator to ask if 4 is less than 9, it should result
//in the value true
var books = 3;
console.log('2', 4 < books);
// YOU DO: Explain.
// this code is assigning the numberical value 3 to the variable books and then using a less than comparison
// operator to ask if the numerical value is less than the variable books; this should return false
var friends = 6;
var siblings = 2;
console.log('3', friends > siblings);
// YOU DO: Explain.
// This code is assigning a numberical value of 6 to the variable friends, and a numerical value 2 to the variable
// siblings, it is then using the greater than comparison operator to ask if variable friends is greater than variable
// siblings, it should return true.

var attendees = 9;
var meals = 8;
console.log('4', attendees !== meals);
// YOU DO: Explain.
// This code is assigning the numberical value 9 to the variable attendees and the numberical value 8 to the variables
// meals, it is then using the strictly non equality comparison operator to ask if the variable attendees is not equal
// to the variable meals. This should return true.

//-------------------
// PART 3: Logical Operators
//-------------------

var isHungry = true;
var finishedHomework = false;

// EXAMPLE:
// Determine if the user is hungry and has completed their homework
console.log(isHungry && finishedHomework); //false
// Determine if the user is hungry or has completed their homework
console.log(isHungry || finishedHomework); //true

var lovesToPlay = true;
var lovesDogPark = false;
var lovesTreats = true;
var age = 1;

// YOU DO:
// Determine if the dog loves to play and loves treats
console.log(lovesToPlay && lovesTreats); //true

// Determine if the dog loves to play and loves the dog park
console.log(lovesToPlay && lovesDogPark); //false

// Determine if the dog loves to play or loves the dog park
console.log(lovesToPlay || lovesDogPark); //true

// Determine if the dog loves to play and is a puppy
console.log(lovesToPlay && age <= 1); //true
// What did your final line of code evaluate to? Why do you think that is? Explain.
// ANSWER: This code is asking if the both the variable lovesToPlay is true and them
// variable age is less than or equal to 1 which was an arbitrary age I set as the
// end of puppydom. Since variable age was assigned a numerical value I could use
// comparison operators to ask this question, and I used the logical operator to ask if
// variable lovesToPlay was true at the same time.

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect? I ran all this code in my terminal and it printed out as I expected
// It did throw an error when I tried to write <== instead of <=, but I fixed it. 
