//Instruction phase

//1. word is chosen at random from a word bank (which is already created)
//word = wordbank[randomNum]
//wordArray = word.split("") <-- turn word into wordArray
//2. user has a certain number of guesses based on character count of word
//numGuesses = wordsize
//3. user types letters to start guessing
//check if userGuess is in wordArray. if letter is found in word:
// find index of letter in wordArray (if yes, add userGuess to blankLetter at index i)
// if user guesses remaining letts correctly, user wins
// else, if user guesses letters incorrectly they get a strike
// else if the remainder of tries are elimanted, then the user looses

