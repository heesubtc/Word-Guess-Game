// create array of words
var words = ["canine", "feline", "lion", "zebra", "computer"]
// choose word randomly
var randomWord = Math.floor(Math.random() * words.length);
// set variable for random word used in the game
var gameWord = words[randomWord];
// set variable for blank spot for the word in play
var blank = [];
// correct letter guessed array
var correctGuesses = [];
// wrong letter guessed array
var wrongGuesses = [];
// guess used array
var usedGuesses = [];
// guesses left array
var leftGuesses = [];

// set variables for ids to target in html
// var blankhtml = document.getElementById() 
var currentwordhtml = document.getElementById("current-word");
var guesseslefthtml = document.getElementById("guesses-left");
var guessesusedhtml = document.getElementById("guesses-used");


// create blanks based on length of words
function createBlank() {
    for (var i = 0; i < gameWord.length; i++) {
        blank[i] = " _ ";
    }
    return blank;
   
};
console.log(createBlank());

// this will get user's keypress and convert to unicode to key letter
document.addEventListener("keypress", getGuess);  // looking for a keypress
function getGuess(event) {  // function that takes the keypress and converts into string
    var key = event.keyCode;
    // console.log(key);
    var letter = String.fromCharCode(key);
    // console.log(letter);
// 
    if (gameWord.indexOf(letter) > -1) {  // if letter from keypress is part of the index of letters of gameword
        console.log(letter);
        correctGuesses.push(letter);  // push into correctGuesses array
        letter = blank[gameWord.indexOf(letter)];  // correct letter fills in the blank of gameWord
    } else {
        wrongGuesses.push(letter); // push to wrongguesses
        usedGuesses.push(letter); // push into used guesses array
        
    }
};

function drawLine() { //displays in html blanks
    currentwordhtml.innerHTML = blank;
}
drawLine(); //calling function






// if the letter is correct push to correct letter array
// if the letter is wrong push to wrong letter array
// detect if used letter was used again
// once 







