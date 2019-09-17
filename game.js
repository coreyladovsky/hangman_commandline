const Board = require("./Board.js");
const HumanPlayer = require("/HumanPlayer.js");
const hangManPics = require("./words.js");

class Game {
    constructor() {
        this.board = new Board();
        this.humanPlayer = new HumanPlayer();
        this.guessesRemaining = 6;
        this.alreadyGuessed = new Set(); 
    }

    play() {
        while(!this.isGameOver()) {
            this.displayBoard();
            let guess = this.humanPlayer.getMove();
            if(this.isValidGuess(guess)) {
                this.addGuess(guess);
                this.board.addChar(guess);
                this.guessesRemaining--
            }
        }

        if(this.guessesRemaining) {
            console.log("Congratulations! You Win! ")
        } else {
            console.log("You Lose, better luck next time")
        }
    }

    isValidGuess(char) {
        return char.length === 1 && char.match(/[a-z]/i) && !this.alreadyGuessed.has(char)
    }

    addGuess(char) {
        this.alreadyGuessed.add(char);
    }

    isGameOver() {
        return this.guessesRemaining <= 0 || this.board.isComplete()
    }

    displayBoard() {
        let output = []
        for(let i = 0; i < this.board.length; i++) {
            let char = this.board.get(i);
            output .push( char ? char : "_")
        }

        console.log(hangManPics.reverse()[this.guessesRemaining]);

        console.log(output.join(" "))

       
    }


}

module.exports = Game;