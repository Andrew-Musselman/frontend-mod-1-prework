// Add your annotations, line by line, to the code below using code comments.
// Use the double // to create a new comment

//Build a Bear
function buildABear(name, age, fur, clothes, specialPower) {
  // this is setting up the class skeleton that is creating a Bear object
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`;
  //This is setting up a greeting based on the name that will be input
  var demographics = [name, age];
  //this is storing the name and age as a variable demographics
  var powerSaying = "Did you know that I can " + specialPower + " ?";
  // this is storing a saying that is determined by the special power that is declared
  var builtBear = {
    //This is declaring the bear object based on what is declared in the class skeleton above
    basicInfo: demographics,
    // this is the basic info for the bear object based on the demographics declared above
    clothes: clothes,
    //this is assigning the clothes based on what was declared above
    exterior: fur,
    //this is assigning the exterior based on what was declared in the function above
    cost: 49.99,
    //this is assigning a new key that is the cost of the Bear
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    // this is assiging the sayings - greeting and powerSaying declared above, as well as a new saying in an array
    isCuddly: true,
    //this is a boolean declaring that this bear is cuddly
  };

  return builtBear
  // this is returning or printing the builtBear object that was constructed above
}

buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
//this is an object instance of the bear object that was outlined above
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');
// this is another object instance of the bear class skeleton



//FizzBuzz
function fizzBuzz(num1, num2, range) {
  // this is declaring a function
  for (var i = 0; i <= range; i++) {
    // setting a for loop within the function
    if (i % num1 === 0 && i % num2 === 0) {
      // within the for loop there is an if statement that will return specific code if these conditions are met
      console.log('fizzbuzz');
      // this is what will be returned if the conditions above are met
    } else if (i % num1 === 0) {
      // this is an else if statement for if the conditions are not met above to return a new code
      console.log('fizz');
      // this is the code to return if the else if statement conditions above are met
    } else if (i % num2 === 0) {
      // this is a new else if statement if neither of the conditions above are met
      console.log('buzz');
      // this is what is returned if the last condition statement is met
    } else {
      // this is the final else statement for if none of the conditions are ever met
      console.log(i);
      // and this is what will be returned if none of the conditions are met
    }
  }
}

fizzBuzz(3, 5, 100);
//this is an instance of the function outlined above
fizzbuzz(5, 8, 400);
//this is another instance of the function declared above
