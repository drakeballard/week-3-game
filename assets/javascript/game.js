//pseudocode for psychic game (nothing needs to be changed under line 1)

//need to decalre certain variables for this game to initiate
	var computerGuess,
		EndUserGuess,
		EndUserGuesses
		letters,
		wins = 0,
		losses = 0,
		guessCount = 10,
		randomNum,
		html;

//since their are 26 letters in the alphabet. They have to be put into an array. Does each letter have to be in its own array?
	letters = abcdefghijklmnopqrstuvxyz

//The game can be initiated with the following factors to be considered:  
	function init () {

	//the computer needs to pick (generate) a randome letter out of 26. 
		computerGuess = Math.floor(Math.random()*letters);

	//After computer selects  the letter, it needs to remember (recall) it.
		computerGuess = randomNum

	//The EndUser can now start guessing the stored "letter" that the computer selects. In html i indicated that EndUser only gets 10 tries
		guessCount = 10;

	//After the 10 tries, the computer gets to reveal the letter that was selected but gets to select a new letter by reseting itself
		EndUserGuesses = x;
}
