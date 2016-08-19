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

// reset all the variables

// if the EndUser wins --> formula for winning

//tf the EndUser lossess --> formula for loosing

//the function needs to be recorded



//computer needs to recognize the EndUser is responding/guessing. In this case a letter key is pushed

	//keyup illustrates that a guess was being used and needs to be subtracted. include a consolelog to see if page is responding.

	//the EndUser guess needs to be stored so that either the computer or EndUser cannot cheat

	//So the EndUserGuess needs to be added to the EndUserGuesses

	//the guess will be recorded to the document --> guess count


	//Here we need fome if and else statements. 

	
