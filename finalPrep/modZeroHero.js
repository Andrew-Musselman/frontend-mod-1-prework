// Challenge - See if you can follow the instructions and complete the exercise in under 30 minutes!

// Declare two variables - heroName AND specialAbility - set to strings
var heroName = "Spoon Man"
var specialAbility = 'Throws Spoons'
// Declare two variables - greeting AND catchphrase
//   greeting should be assigned to a string that uses concatenation to include the heroName
//   catchphrase should be assigned to a string that uses interpolation to include the specialAbility
var greeting = 'I am ' + heroName + "let's spoon!";
var catchphrase = "Don't make me ${specialAbility} at you!";
// Declare two variables - power AND energy - set to integers
var power = 5;
var energy =16;
// Declare two variables - fullPower AND fullEnergy
//   fullPower should multiply your current power by 500
//   fullEnergy should add 150 to your current energy
var fullPower = power * 500;
var fullEnergy = energy + 150;
// Declare two variables - isHuman and identityConcealed - assigned to booleans
var isHuman = true;
var identityConcealed = true;

// Declare two variables - archEnemies AND sidekicks
//   archEnemies should be an array of at least 3 different enemy strings
//   sidekicks should be an array of at least 3 different sidekick strings
var archEnemies = ['Forker','Knife Party','Dish Washer'];
var sideKicks = ['Tea Spoon', 'Table Spoon' , 'Soup Spoon'];
// Print the first sidekick to your console
console.log(sideKicks[0]);
// Print the last archEnemy to the console
console.log(archEnemies[2]);
// Write some code to add a new archEnemy to the archEnemies array
archEnemies.push('Spongeula');
// Print the archEnemies array to console to ensure you added a new archEnemy
console.log(archEnemies);
// Remove the first sidekick from the sidekicks array
sideKicks.shift();
// Print the sidekicks array to console to ensure you added a new sidekick
console.log(sideKicks);
// Create a function called assessSituation that takes three arguments - dangerLevel, saveTheDay, badExcuse
//   - dangerLevel should be an integer
//   - saveTheDay should be a string a hero would say once they save the day
//   - badExcuse should be a string a hero would say if they are too afraid of the dangerLevel
function assessSituation(dangerLevel, saveTheDay, badExcuse){
  if (dangerLevel > 50){
    console.log(badExcuse);
  }  else if (dangerLevel <= 49 || dangerLevel >= 11) {
      console.log(saveTheDay);
    } else if (dangerLevel <= 10){
      console.log('Meh. Hard Pass.')
    }
  };
var courageous = 'Spoon Man is here to spoon the bad guys';
var excuses = 'I think I need a good soak, be right back';

assessSituation(100, courageous, excuses);
assessSituation(40, courageous, excuses);
assessSituation(2, courageous, excuses);
// Your function should include an if/else statement that meets the following criteria
//   - Danger levels that are above 50 are too scary for your hero. Any danger level that is above 50 should result in printing the badExcuse to the console
//   - Anything dangerLevel that is between 10 and 50 should result in printing the saveTheDay string to the console
//   - If the dangerLevel is below 10, it means it is not worth your time and should result in printing the string "Meh. Hard pass." to the console.

//Test Cases
// var announcement = 'Never fear, the Courageous Curly Bracket is here!';
// var excuse = 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.';
// assessSituation(99, announcement, excuse) > Should print - 'I think I forgot to lock up my 1992 Toyota Coralla. Be right back.'
//assessSituation(21, announcement, excuse) > should print - 'Never fear, the Courageous Curly Bracket is here!'
//assessSituation(3, announcement, excuse) > should print - "Meh. Hard pass."

// Declare a new variable - scaryMonster - assigned to an Object with the following key/values
//   - name (string)
//   - smell (string)
//   - weight (integer)
//   - citiesDestroyed (array)
//   - luckyNumbers (array)
//   - address (object with following key/values: number , street , state, zip)
var scaryMonster = {
  name: 'Rusty Spoon',
  smell: 'Decay',
  weight: 150,
  citiesDestroyed: ['NYC', 'Newark', 'Jersey City'],
  luckyNumbers: [3,7,13],
  address: {
    number: '456',
    street: 'Oxidation Avenue',
    state: 'Brooklyn',
    zip: '11224'
  }
};

// Create a new class called SuperHero
// - Your class should have the following DYNAMIC values
//   - name
//   - superpower
//   - age
// - Your class should have the following STATIC values
//   - archNemesis, assigned to "The Syntax Error"
//   - powerLevel = 100
//   - energyLevel = 50

// - Create the following class methods
//   - sayName, should print the hero's name to the console
//   - maximizeEnergy, should update the energyLevel to 1000
//   - gainPower, should take an argument of a number and INCREASE the powerLevel by that number
class SuperHero {
  constructor(name, superpower, age){
    this.name = name;
    this.superpower = superpower;
    this.age = age;
    this.archNemesis = 'The Syntax Error';
    this.powerLevel = 100;
    this.energyLevel = 50;
  };
  sayName(){
    console.log(this.name);
  };
  maximizeEnergy(){
    this.energyLevel * 20;
  };
  gainPower(pwr){
    this.powerLevel + pwr;
  };
}
// - Create 2 instances of your SuperHero class
var plantDaddy = new SuperHero('Plant Daddy', 'Controls Plants', 40);
var pumpkinSpice = new SuperHero('Pumpkin Spice Girl', 'Makes everything basic', 29);
pumpkinSpice.maximizeEnergy();
console.log(pumpkinSpice);
plantDaddy.gainPower(35);
console.log(plantDaddy);
// Reflection
// What parts were most difficult about this exerise?
// It was hard to recall back to the early sections, so I found myself going back to my notes and past exercises
// to make sure I was getting my syntax correct.
// What parts felt most comfortable to you?
// the objects and class parts, because those were the most recent in my brain. 
// What skills do you need to continue to practice before starting Mod 1?
//Functions inside of objects and classes, as well as just functions in general. I seem to have a bit of difficulty
// getting them to do exactly what I want.
