/*
This exercise file is a little different from the others you have seen so far. Read carefully!

Below is a dynamic story that is created based on the value of three variables: doorChoice, bearClothing, bearChoice.
Spend some time changing the variables and running the file to see how the story changes.
*/

var doorChoice = 1;
var bearClothing = "";
var bearChoice = 1;

console.log("You enter a dark room with two doors. Do you go through #1 or #2?");

if (doorChoice === 1) {
  bearClothing = "hat";
} else {
  bearClothing = "scarf";
}

console.log("You see a bear putting on a " + bearClothing);
console.log("It looks like that " + bearClothing + " is too small for the bear, do you...");

console.log("1. Offer your own to the bear?");
console.log("2. Point it out to the bear?");
console.log("3. Make a dash for the next room?");

if (bearChoice === 1) {
  console.log("You offer the bear your " + bearClothing + " and the bear shows you a secret passage out!");
} else if (bearChoice === 2) {
  console.log("You tell the bear the " + bearClothing + " is too small and it starts to cry!");
} else if (bearChoice === 3) {
  console.log("You run as fast as you can into the next room. It's full of snakes!");
} else {
  console.log("You stay with the bear and become it's best friend!");
}

/*
Questions

1. In English, using technical vocabulary, describe what is happening between lines 14 and 18.
Lines 14-18 are setting up the if else function with the variables that were declared and assigned
above in lines 8-10. The first part of the code is saying that if the variable doorChoice is strictly
equal to 1 then the variable bearClothing is assigned 'hat'. The second part of the code is saying that
if variable doorChoice is assigned any other value the variable bearClothing will be assigned 'scarf'.
2. What variable has a new value assigned to it after the first if statement executes?
The variable bearClothing is assigned based on the first if statement in the code.
3. If you changed the variable doorChoice to equal 3, what would the bearClothing value be?
If the variable doorChoice was assigned the value 3 the value for bearClothing would be assigned 'scarf'
instead of 'hat', because that would cause the else statement to execute.
4. In English, using technical vocabulary, describe what is happening between lines lines 27 and 35.
This section of code is an else if function that is determined by the value of the variable bearChoice.
for the first part if bearChoice is strictly equal to 1 the code will print a specific string and ignore
all other options, if bearChoice is strictly equal to 2 then it will print a different string, if bearChoice
is strictly equal to 3 it will print another string, and finally if bearChoice is declared as any other value
there is a different string that will print.
5. If you changed the variable bearChoice to equal 3, what will be the final outcome be?
If variable bearChoice is set to equal 3 then the code will print the string: 'You run as fast as you can into the
next room. It's full of snakes!'
6. If you changed the variable doorChoice to equal 1, and the variable bearChoice to equal 2, what will be the final outcome be?
if the variable doorChoice is equal to 1 it will cause the vairable bearClothing to be set to 'Hat', and if bearChoice
is set to equal 2 it will cause the code to print 'you tell the bear the hat is too small and it starts to cry!'
7. What is your favorite ending?
my favorite ending is the option that happens if bearChoice is set to anything greater than 3 where you stay woth the
bear and become it's best friend.
*/
