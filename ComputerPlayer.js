const { dictionary } = require("./words.js");

class ComputerPlayer {
  constructor() {
    this.dictionary = dictionary;
    this.guessedChars = new Set();
  }

  selectSecretWord() {
    const randomIndex = Math.floor(Math.random() * this.dictionary.length);
    this._secretWord = this.dictionary[randomIndex].toLowerCase();
    return this._secretWord.length;
  }

  getMove(board) {
    this.dictionary = this.dictionary.filter(word => word.length === board.length());
    
    
    for (let i = 0; i < board.length(); i++) {
        let char = board.get(i);
        if(char) {
            this.dictionary = this.dictionary.filter(word => word[i] === char )
        }
    }

    let letterCounts = {};

    this.dictionary.forEach(word => {
        for(let char of word) {
            letterCounts[char] ? letterCounts[char]++ : letterCounts[char] = 1; 
        }
    })

    let max = 0;
    let guess = null;  
    for(let char in letterCounts) {
        if(letterCounts[char] > max && !this.guessedChars.has(char)) {
            max = letterCounts[char];
            guess = char; 
        }
    }
    this.guessedChars.add(guess)
    return guess; 
  }

  reveal() {
      return this._secretWord;
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

module.exports = ComputerPlayer;