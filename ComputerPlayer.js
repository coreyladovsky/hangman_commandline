const { dictionary } = require("./words.js");

class ComputerPlayer {
  constructor() {
    this.dictionary = dictionary;
  }

  selectSecretWord() {
    const randomIndex = Math.floor(Math.random() * this.dictionary.length);
    this._secretWord = this.dictionary[randomIndex].toLowerCase();
    return this._secretWord.length;
  }

  getMove(board) {
    this.dictionary.filter(word => word.length !== board.length());
    
  }


  givePositions(char) {
    let output = [];
    for(let i = 0; i < this._secretWord.length; i++) {
        if(this._secretWord[i] === char) {
            output.push(i)
        }
    }
    return output;
  }
}