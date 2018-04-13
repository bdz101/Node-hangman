// Jeffrey Phelps - DU Web Dev Bootcamp 2017/2018 - Mod-11 Homework (Node Hangman)

//list of words to guess.
exports.newWord = {
  wordList: ['YODA','LUKE SKYWALKER','PRINCESS LEIA','CHEWBACCA','DARTH VADER','DEATH STAR','STORMTROOPER','ANAKIN SKYWALKER','HAN SOLO'],
  hangman: ["\n\n\n\n\n\n\n-------------", "\n |\n |\n |\n |\n |\n |\n |\n-------------", "____________\n |         |\n |\n |\n |\n |\n |\n-------------","____________\n |         |\n |         O\n |\n |\n |\n |\n |\n-------------","____________\n |         |\n |         O\n |         |\n |         |\n |\n |\n |\n-------------","____________\n |         |\n |         O\n |         |\n |         |\n |        ---\n |\n |\n-------------", "____________\n |         |\n |         O\n |       __|\n |         |\n |        ---\n |\n |\n-------------", "____________\n |         |\n |         O\n |       __|__\n |         |\n |        ---\n |\n |\n-------------", "____________\n |         |\n |         O\n |       __|__\n |         |\n |        ---\n |        |\n |\n-------------","____________\n |         |\n |         O\n |       __|__\n |         |\n |        ---\n |        | |\n |\n-------------"]
};
