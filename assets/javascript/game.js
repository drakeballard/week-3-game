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
function reset () {
	guessCount = 10;
}	
	// if the EndUser wins --> formula for winning
function win () {
		wins++;
		init();
		record();
		console.log('YOU WIN!!!! total wins:' = wins);
}

	//tf the EndUser losses --> formula for loosing
function lose (){
		losses++;
		init();
		record();
		console.log('YOU LOOSE!!! SUCKA... total losses:' + lossess);
}

	//the function needs to be recorded. the html page needs to reflect this info. 
function record () {
	html = '<p>Wins:' + wins + '</p>'
		   '<p>Losses:' + lose + '</p>'
		   '<p>Remaining Guesses Left:' + guessCount + '</p>'
		   '<p> Your Guesses thus far:' + EndUserGuesses + '</p>';
}






//computer needs to recognize the EndUser is responding/guessing. In this case a letter key is pushed
document.onkeyup = function(event) {

	//keyup illustrates that a guess was being used and needs to be subtracted. include a consolelog to see if page is responding.
	guessCount--;
	console log('guesses remaining:' + guessCount)
	
	//the EndUser guess needs to be stored so that either the computer or EndUser cannot cheat
	EndUserGuess = ???
	//So the EndUserGuess needs to be added to the EndUserGuesses
	EndUserGuesses.push(EndUserGuess);
	//the guess will be recorded to the document --> guess count
	record();

	//Here we need some if and else statements. 
		if (EndUserGuess === computerGuess){
			win();
		}
		else if (guessCount === 0) {
			lose();
		}

}

	





