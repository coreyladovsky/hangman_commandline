const { dictionary } = require("./words.js");

class ComputerPlayer {
    constructor() {
        this.dictionary = dictionary;
        // this._secretWord = this.selectSecretWord();
    }

      
  selectSecretWord() {
    const randomIndex = Math.floor(Math.random() * this.dictionary.length);
    this._secretWord = this.dictionary[randomIndex].toLowerCase();
    return this._secretWord.length
  }


}