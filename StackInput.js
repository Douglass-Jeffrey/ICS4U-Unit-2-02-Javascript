/* 
* This program pushes a user input to a program with a class containing an 
* arraylist. The most recent input of the arraylist is then pushed back from
* that class into this program and is outputted, mimicking how the stack works
* now it also prints the popped top integer that was on the stack
*
* @author  Douglass Jeffrey
* @version 2.0
* @since   2020-12-09
*/

// Importing the class MrCoxallStack from another file
const MrCoxallStack = require("./MrCoxallStack");

// Defining prompt for getting user input
const prompt = require('prompt-sync')({sigint: true});

// references MrCoxallStack file 
let clasStack = new MrCoxallStack();

// Try to catch invalid inputs
try {
  
  // Finds amount of numbers to input
  const inputNum = prompt("Enter the amount of integers you wish to push: ");
  
  // calculates if inputs are valid
  if (isNaN(inputNum) == true) {
    //if they are not valid print that they arent
    console.log("Invalid Input ");
  //if they are valid execute the rest of the code
  } else {
    // for loop to find inputs
    for (let counter = 0; counter < inputNum; counter++) {
  
      // User input to place in pseudostack array
      const userInt = prompt("Enter an Integer to place on the stack: ");
  
      // places userinput on stack (only if the input is an integer)
      if (isNaN(userInt) == true) {
        console.log("Invalid input");
        break;

      } else {
        clasStack.pushNumber(userInt);
      }
    }
  }

  // Prints last integer that was pushed to the array that was popped
  console.log("Popped integer: ", clasStack.popper());

  // Prints integer that was pushed to the array that acts as a stack
  console.log("Pushed integer: ", clasStack.currentStack());
  
// catches any errors
} catch (err) {
  console.log("Invalid input");
}