const Board = require("./Board.js");
// const HumanPlayer = require("./HumanPlayer.js");
const { hangManPics } = require("./words.js");

class Game {
    constructor(players) {
        this.guesser = players.guesser;
        this.referee = players.referee;
        this.guessesRemaining = 6;
        this.alreadyGuessed = new Set(); 
    }
    
    play() {
        this._secretWordCount = this.referee.selectSecretWord()
        this.board = new Board(this._secretWordCount);
        while(!this.isGameOver()) {
            // this.displayBoard();
            console.log(hangManPics[this.guessesRemaining]);
            let guess = this.guesser.getMove(this.board);
            if(this.isValidGuess(guess)) {
                console.clear()
                this.addGuess(guess);
                let positions = this.referee.givePositions(guess);
                this.board.addChar(guess, positions);
                if(!positions.length) this.guessesRemaining--;
            } else {
                console.clear();
                if(this.alreadyGuessed.has(guess)) {
                    
                    console.log("You've already guessed that letter! Try Again ");
                } else {

                    console.log("Invalid Guess. Please Try Again with a valid character");
                }
                   }
        }

        if(this.guessesRemaining) {
            console.log("Congratulations, Guesser! You Win! ")
        } else {
            console.log(hangManPics[this.guessesRemaining]);
            console.log("Guesser Loses, the word was ", this.referee.reveal() )

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

    // displayBoard() {
    //     console.clear();
    //     let output = [];

    //     for(let i = 0; i < this.board.length(); i++) {
    //         let char = this.board.get(i);
    //         output.push( char ? char : "_")
    //     }
    //     console.log(output.join(" ")) 
        
    // }
        // console.log("Already Guessed: ", ...this.alreadyGuessed)
        // console.log(hangManPics[this.guessesRemaining]);       


}

module.exports = Game;