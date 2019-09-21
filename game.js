const Board = require("./Board.js");
const HumanPlayer = require("./HumanPlayer.js");
const { hangManPics } = require("./words.js");

class Game {
    constructor(players) {
        this.guesser = players.guesser;
        this.referee = players.referee;
        this.board = new Board(this.referee.selectSecretWord());
        this.guessesRemaining = 6;
        this.alreadyGuessed = new Set(); 
    }

    play() {
        while(!this.isGameOver()) {
            this.displayBoard();
            let guess = this.guesser.getMove();
            if(this.isValidGuess(guess)) {
                this.addGuess(guess);
                let positions = this.referee.givePositions();
                this.board.addChar(guess, positions);
                if(!positions.length) this.guessesRemaining--;
            }
        }

        if(this.guessesRemaining) {
            console.log("Congratulations! You Win! ")
        } else {
            console.log("You Lose, the word was ", this.board.reveal() )
        }
    }

    isValidGuess(char) {
        return char.length === 1 && char.match(/[a-z]/i) && !this.alreadyGuessed.has(char) //only valid with alphabet chars that haven't already been guessed. 
    }

    addGuess(char) {
        this.alreadyGuessed.add(char);
    }

    isGameOver() {
        return this.guessesRemaining <= 0 || this.board.isComplete()
    }

    displayBoard() {
        console.clear();
        let output = [];

        for(let i = 0; i < this.board.length(); i++) {
            let char = this.board.get(i);
            output.push( char ? char : "_")
        }
        
        console.log("Already Guessed: ", ...this.alreadyGuessed)
        console.log(hangManPics[this.guessesRemaining]);       
        console.log(output.join(" ")) 
    }


}

module.exports = Game;