/*
In the exercise below, write your own code where indicated
to achieve the desired result.

Make sure to run the file with node in your command line.
*/

//-------------------
// Part 1: Syntax and Naming Conventions
//-------------------

// For each prompt:
  // Write a class skeleton
  // Create 2 object instances and store in variables
  // Log each variable to the console.
  // You do not need any proerties at this time!!

// Prompt 1: Dog
// class Dog {
//
// };
// var boxer = new Dog();
// console.log(boxer);
// var dalmation = new Dog();
// console.log(dalmation);

// Prompt 2: Snack
// class Snack{
//
// };
// var chips = new Snack();
// console.log(chips);
// var fruit = new Snack();
// console.log(fruit);
//
// // Prompt 3: Shirt
// class Shirt {
//
// };
// var dressShirt = new Shirt();
// console.log(dressShirt);
// var teeShirt = new Shirt();
// console.log(teeShirt);
//-------------------
// Part 2: Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Assign 3 properties (names and values of your choice) to each class
  // Create an object instance and store in variable
  // Log that variable to the console.

// Prompt 1: Dog
// class Dog {
//   constructor() {
//     this.breed = 'boxer';
//     this.age = 2;
//     this.name = "spot";
//   }
// }
// var boxer = new Dog();
// console.log(boxer);
//
//
// // Prompt 2: Snack
// class Snack {
//   constructor() {
//     this.type = 'Chips';
//     this.brand = 'Lays';
//     this.count = 1;
//   }
// }
// var lays = new Snack();
// console.log(lays);
// // Prompt 3: Shirt
// class Shirt {
//   constructor() {
//     this.type = "Dress Shirt";
//     this.color = "Blue";
//     this.size = "Large";
//   }
// }
// var dressShirt = new Shirt();
// console.log(dressShirt);
//-------------------
// Part 3: Dynamic Properties
//-------------------

// For each prompt:
  // Write a class skeleton
  // Add a constructor method
  // Declare 3 parameters in the consutructor
  // Assign 3 properties (names and values of your choice), using the parameters
  // Create 2 object instances and store in variables (passing in different arguments)
  // Log those variables to the console.

// Prompt 1: Dog
class Dog {
  constructor(breed, age, name){
    this.breed = breed;
    this.age = age;
    this.name = name;
  }
}
var dalmation = new Dog("Dalmation", 4, 'Rover');
console.log(dalmation);

var japaneseChin = new Dog('Japanese Chin', .5, "Seth");
console.log(japaneseChin);

// Prompt 2: Snack
class Snack {
  constructor(type, brand, count){
    this.type = type;
    this.brand = brand;
    this.count = count;
  }
}
var chips = new Snack('Cookies', 'Chips Ahoy', 1);
console.log(chips);

var fruits = new Snack('Apples', 'Fuji', 5);
console.log(fruits);

// Prompt 3: Shirt
class Shirt{
  constructor(type, color, size) {
    this.type = type;
    this.color = color;
    this.size = size;
  }
}

var blouse = new Shirt('Blouse', "White", 'Small');
console.log(blouse);

var graphicTee = new Shirt('Graphic Tee', 'Blue', 'Extra Large');
console.log(graphicTee);
