// const { dictionary } = require("./words.js")

class Board {
  constructor(length) {
    this.board = new Array(length).fill(null);
  }


  isComplete() {
    return this.board.every(el => el); // checking to see that all have positive value 
  }

  // includes(char) {
  //     return this._secretWord.includes(char);
  // }

  addChar(char, indicies) {
    for(let i of indicies) {
      this.board[i] = char; 
    }
  }

  length() {
    return this.board.length;
  }

  get(idx) {
    return this.board[idx]
  }

  // reveal() {
  //   return this._secretWord;
  // }

}

module.exports = Board; 