const readlineSync = require('readline-sync');

class HumanPlayer {
    getMove() {
        return readlineSync.question("Please Guess A Letter: ").trim();
    }
}

module.exports = HumanPlayer; 