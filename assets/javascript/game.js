
//choosing random word from word bank
//created array to hold word bank
var wordBank = [
	'DONATELLO', 
	'LEONARDO', 
	'MICHAELANGELO', 
	'RAPHAEL', 
	'SPLINTER', 
	'SHREDDER', 
	'COWABUNGA', 
	'PIZZA'
	];

var wins = 0;
var losses = 0;
var lives = 8;        
var wordtoGuess = null;  
var answerArray = [];
var wrongGuess = [];  

var updatewordToGuess = function() {
    wordToGuess = wordBank[Math.floor(Math.random() * wordBank.length)];
    for (var i = 0; i < wordToGuess.length; i++) {
	answerArray[i] = "_";
	}
	document.querySelector('#currentWord').innerHTML = answerArray.join(" ");
};

// this function will insert our wrong guesses into our html
var updatewrongGuess = function() {
    document.querySelector('#wrongGuess').innerHTML = wrongGuess.join(", ");
};

//this function will insert our lives remaining into our html
var updateLivesRemaining = function() {
    document.querySelector('#livesLeft').innerHTML = lives;
};

//this function resets the page once we invoke it - we won't invoke it until we either win or lose the game
var reset = function() {
    lives = 8;
    wrongGuess = [];
    answerArray = [];
    updatewordToGuess();
    updatewrongGuess();
    updateLivesRemaining();
};


updatewordToGuess();
updateLivesRemaining();


//below function will insert letters into our game upon a keypress
document.onkeyup = function(event) {
	
	var letter = String.fromCharCode(event.keyCode).toUpperCase();
	var letterCorrect = false;
	var alreadyGuessed = false;
	
	//if letter guessed is in the word being guessed
	for (var i = 0; i < wordToGuess.length; i++) {
		if (wordToGuess[i] === letter) {
			answerArray[i] = letter;
			document.getElementById("currentWord").innerHTML = answerArray.join(" ");
			letterCorrect = true;
		}
	}
	
	//if letter guessed is not in the word being guessed
	if (!letterCorrect) {
		for (var j = 0; j < wrongGuess.length; j++) {
			if (letter === wrongGuess[j]) {
				alreadyGuessed = true;
			}
		}
		if (!alreadyGuessed) {
			lives--;
			wrongGuess.push(letter);
			document.getElementById("wrongGuess").innerHTML = wrongGuess.join(", ");
			var livesRemaining = lives;
			document.querySelector("#livesLeft").innerHTML = livesRemaining;
		}
	}

	// if lives remining goes down to 0 (too many wrong guesses), the game resets and increases our loss count
	if (lives === 0) {
		losses++;
		document.querySelector('#losses').innerHTML = losses;
		reset();
	}

	// if the player guesses all letters in the word being guessed, the game resets and increases our win count
	if (!answerArray.includes("_")) {
		wins++;
		document.querySelector('#wins').innerHTML = wins;
		reset();
	}
}