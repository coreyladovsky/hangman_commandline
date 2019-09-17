const { dictionary } = require("./words.js")

class Board {
  constructor() {
    this._secretWord = this.selectSecretWord();
    this.board = new Array(this._secretWord.length).fill(null);
  }
  
  selectSecretWord() {
    const randomIndex = Math.floor(Math.random() * dictionary.length);
    return dictionary[randomIndex].toLowerCase();
  }

  isComplete() {
    return this.board.every(el => el); // checking to see that all have positive value 
  }

  includes(char) {
      return this._secretWord.includes(char);
  }

  addChar(char) {
          for(let i = 0; i < this.board.length; i++) {
              if(this._secretWord[i] === char) {
                  this.board[i] = char; 
              }
          }
  }

  length() {
    return this.board.length;
  }

  get(idx) {
    return this.board[idx]
  }

  reveal() {
    return this._secretWord;
  }




}

module.exports = Board; 