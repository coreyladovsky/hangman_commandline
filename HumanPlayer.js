const readlineSync = require('readline-sync');

class HumanPlayer {

  getMove(board) {
    this.displayBoard(board);
    return readlineSync
      .question("Please Guess A Letter: ")
      .trim()
      .toLowerCase();
  }

  selectSecretWord() {
    let letterCount = readlineSync
      .question(
        "Please select a word and return the number of letters is contains: "
      )
      .trim();
    letterCount = parseInt(letterCount);
    if (!isNaN(letterCount)) return letterCount;
  }

  givePositions(guess) {
      console.log("The gussed character was: ", guess)
    let positions = readlineSync
      .question(
        "Please enter the places at which the letter occurs seperated by commas. For example if your word is hello and the guess is h you would enter a 1. If the letter was l you would enter 3,4.  If the letter does not occur just hit enter.  "
      )
      .trim();
    positions = positions.replace(" ", "");
    if(!positions) return [];
    return positions.split(",").map(el => Number(el) - 1);
  }

  displayBoard(board) {
    let output = [];
    for (let i = 0; i < board.length(); i++) {
      let char = board.get(i);
      output.push(char ? char : "_");
    }
    console.log(output.join(" ")) 
  }

  reveal() {
      return readlineSync.question(
        "Congrats on winning! Please reveal your word "
      ).trim();
  }

}

module.exports = HumanPlayer; 