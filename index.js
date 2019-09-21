const Game = require("./Game.js")
const HumanPlayer = require("./HumanPlayer.js");
const ComputerPlayer = require("./ComputerPlayer.js");

let players = { guesser: new ComputerPlayer(), referee: new HumanPlayer() };
const newGame = new Game(players);
newGame.play()
