/* 
* This program pushes a user input to a program with a class containing an 
* arraylist. The most recent input of the arraylist is then pushed back from
* that class into this program and is outputted, mimicking how the stack works
*
* @author  Douglass Jeffrey
* @version 1.0
* @since   2020-12-07
*/


// Importing the class MrCoxallStack from another file
const MrCoxallStack = require("./MrCoxallStack");

// Defining prompt for getting user input
const prompt = require('prompt-sync')({sigint: true});

// Try to catch invalid inputs
try {
  // User input to place in pseudostack array
  const userInt = prompt("Enter an Integer to place on the stack: ");
  console.log();

  // references MrCoxallStack file 
  let clasStack = new MrCoxallStack();

  // places userinput on stack (only if the input is an integer)
  if (isNaN(userInt) == true) {
    console.log("Invalid input");
  } else {
    clasStack.pushNumber(userInt);
    // Prints integer that was pushed to the array that acts as a stack
    console.log("Pushed integer: ", clasStack.getPushedNumber());
  }
} catch (err) {
  console.log("Invalid input");
}