const readlineSync = require('readline-sync');

class HumanPlayer {
  getMove() {
    return readlineSync
      .question("Please Guess A Letter: ")
      .trim()
      .toLowerCase();
  }

  selectSecretWord() {
    let letterCount = readlineSync
      .question("Please select a word and return the number of letters is contains: ")
      .trim()
    letterCount = parseInt(letterCount);
    if(!isNaN(letterCount)) return letterCount;
  }

  givePositions() {
      let positions = readlineSync
        .question(
          "Please enter the places at which the letter occurs seperated by commas. For example if your word is hello and the guess is h you would enter a 1. If the letter was l you would enter 3,4.  If the letter does not occur just hit enter.  "
        )
        .trim(); 
        positions = positions.replace(" ", "")
        return positions.split(",").map(Number)
  }
}

module.exports = HumanPlayer; 