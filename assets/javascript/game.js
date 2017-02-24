
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
var wordBeingGuessed = "";
var answerArray = [];
var wins = 0;
var losses = 0;
var lives = 8;
var wrongGuess = [];

var livesRemaining =
	"<h3>Lives Remaining: " + lives + "</h3>";
document.querySelector("#livesLeft").innerHTML = livesRemaining;

var winLoss =
	"<h3>Wins: " + wins + "</h3>" +
	"<h3>Losses: " + losses + "</h3>";
document.querySelector("#gameData").innerHTML = winLoss;


//INITIALIZE GAME
function init() {
		//picks a random word from above array of choices
	wordBeingGuessed = wordBank[Math.floor(Math.random() * wordBank.length)];
		//make answer array appear as underscores
	for (var i = 0; i < wordBeingGuessed.length; i++) {
	answerArray[i] = "_";
	}
		//inserts wordBeingGuessed into my html  - links to currentWord div
	document.getElementById("currentWord").innerHTML = answerArray.join(" ");  
};
init();


//LETTER INPUT
document.onkeyup = function(event) {
	var letter = String.fromCharCode(event.keyCode).toUpperCase();
	for (var i = 0; i < wordBeingGuessed.length; i++) {
		if (wordBeingGuessed[i] === letter) {
			answerArray[i] = letter;
			document.getElementById("currentWord").innerHTML = answerArray.join(" ");
			var letterCorrect = true;
		}
	}
	if (!letterCorrect) {
		lives--;
		wrongGuess.push(letter);
		document.getElementById("wrongGuess").innerHTML = wrongGuess;
		var livesRemaining = "<h3>Lives Remaining: " + lives + "</h3>";
		document.querySelector("#livesLeft").innerHTML = livesRemaining;
	}
}

//checks if all letters have been found

