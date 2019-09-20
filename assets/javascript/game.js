// creat an array of the songs
var animeSongs = ["dragonball", "inuyasha", "pokemon", "hunterxhunter", "sailormoon"];
// choose a song randomly
var aSong = animeSongs[Math.floor(Math.random() * animeSongs.length)];
console.log(aSong);
// create underscores based on the length of songs
var underScore = [];
for(var i = 0; i < aSong.length; i++){
    // underScore[i] = "_"; 
    underScore.push("_");
}; 
console.log(underScore);
// display underscores to the screen
var currentWord = document.getElementById("word");
currentWord.textContent = underScore.join(" ");


// GAME
var letterGuess = document.getElementById("letters");
var remainNum = document.getElementById("guesses"); 
var userWins = document.getElementById("wins");
var currWord = [];
var alLetter = [];
var numGuess = 12;
var winScore = 0;

// get user guess
document.onkeyup = function(event) {
    var userPress = event.key;
    if (aSong.indexOf(userPress) > -1) {
        for(var i = 0; i < aSong.length; i++) {
           if(aSong[i] === userPress){
            underScore[i] = userPress;
            currentWord.textContent = underScore.join(" ");
            console.log(underScore);
           }
        }
                
        
    } else {
        alLetter.push(userPress);
        numGuess--;
        remainNum.textContent = numGuess;
        letterGuess.textContent = alLetter + ",";
        console.log(alLetter);
        console.log(numGuess);
    }
};


// winScore++;
// userWins.textContent = winScore;