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
}