/* 
* This class creates an arraylist that will recieve input from  class
*
* @author  Douglass Jeffrey
* @version 1.0
* @since   2020-12-07
*/

class MrCoxallStack {
  // Constructor that defines array as a field of MrCoxallStack class
  constructor() {
    this.stackAsArray = [];
  }

  // Method that pushes user input into the array
  pushNumber(inputNumber) {
    this.stackAsArray.push(inputNumber);
  }

  // Getter that retreives most recent used number on top of array
  getPushedNumber() {
    return this.stackAsArray[this.stackAsArray.length - 1];
  }
}
// Exporting the class
module.exports = MrCoxallStack;