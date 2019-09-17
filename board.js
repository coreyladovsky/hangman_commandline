const { dictionary } = require("./words.js")

class Board {
  constructor() {
    this._secretWord = this.selectSecretWord();
    this.board = new Array(_secretWord.length);
  }

  selectSecretWord() {
    const allTheWords = dictionary;
    const index = Math.floor(Math.random() * allTheWords.length);
    return allTheWords[index];
  }

  isComplete() {
    return this.board.every(el => !!el);
  }

  includes(char) {
      return this._secretWord.includes(char)
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




}

module.exports = Board; 