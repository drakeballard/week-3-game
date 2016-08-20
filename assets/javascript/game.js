//pseudocode for psychic game (nothing needs to be changed under line 1)

//need to decalre certain variables for this game to initiate
var userGuess,
	userGuesses = [],
	computerGuess,
	wins = 0,
	losses = 0,
	guessCount = 13,
	letters,
	html;

//since their are 26 letters in the alphabet. They have to be put into an array. Does each letter have to be in its own array?
	//This needs to split some how?
letters = ("abcdefghijklmnopqrstuvwxyz").split("");


//The game can be initiated with the following factors to be considered:  
function init() {

	//the computer needs to pick (generate) a randome letter out of 26. 
	randomNum = Math.floor(Math.random()*letters.length);

	//After computer selects  the letter, it needs to remember (recall) it.
	computerGuess = letters[randomNum];

	//The EndUser can now start guessing the stored "letter" that the computer selects. In html i indicated that EndUser only gets 10 tries
	guessCount = 13;

	//After the 10 tries, the computer gets to reveal the letter that was selected but gets to select a new letter by reseting itself
	userGuesses = [];
}

// reset all the variables
function reset() {
    guessCount = 13;
}	
	// if the EndUser wins --> formula for winning
function win() {
  	wins++;
 	init();
  	record();
  	console.log('you win. nicely done! total wins: ' + wins);
}
	//tf the EndUser losses --> formula for loosing
function lose() {
  	losses++;
  	init();
  	record();
  	console.log('sorry, you lose sucka. total losses: ' + losses);
}

	//the function needs to be recorded. the html page needs to reflect this info. 
function record() {
  	html='<p>Wins: ' + wins + '</p>' +
         '<p>Losses: ' + losses + '</p>' +
         '<p>Guesses left: ' + guessCount + '</p>' +
         '<p>Your Guesses so far: ' + userGuesses + '</p>';
 	 document.querySelector('#thegame').innerHTML = html;
}





//computer needs to recognize the EndUser is responding/guessing. In this case a letter key is pushed
document.onkeyup = function(event) {

	//keyup illustrates that a guess was being used and needs to be subtracted. include a consolelog to see if page is responding.
	guessCount--;
  	console.log('guesses remaining: ' + guessCount);
	//the EndUser guess needs to be stored so that either the computer or EndUser cannot cheat
	userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	//So the EndUserGuess needs to be added to the EndUserGuesses
	userGuesses.push(userGuess);

	//the guess will be recorded to the document --> guess count
	record();

	//Here we need some if and else statements. 
	if(userGuess === computerGuess)
	{	
		win();		
		} else if(guessCount === 0) {
    	lose();
  		} else {
  		console.log(userGuess + ' is not the same as ' + computerGuess);
  }			
}

init();

	





