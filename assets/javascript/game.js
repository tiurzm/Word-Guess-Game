// create an array of the songs and choose a song randomly
var animeList = ["dragonball", "inuyasha", "pokemon", "hunterxhunter", "sailormoon", "onepiece", "gundam", "digimon"];

var aNime = animeList[Math.floor(Math.random() * animeList.length)];

// create underscores based on the length of songs
var underScore = [];
for(var i = 0; i < aNime.length; i++){
    underScore.push("_");
}; 

// display underscores to the screen
var currentWord = document.getElementById("word");
currentWord.textContent = underScore.join(" ");

// GAME
var letterGuess = document.getElementById("letters");
var remainNum = document.getElementById("guesses"); 
var userWins = document.getElementById("wins");
var alLetter = [];
var numGuess = 12;
var winScore = 0;

// get user guess
document.onkeyup = game; 
function game() {
var userPress = event.key.toLowerCase();
    if (aNime.indexOf(userPress) > -1) {
        for(var i = 0; i < aNime.length; i++) {
           if(aNime[i] === userPress){
            underScore[i] = userPress;
            currentWord.textContent = underScore.join(" ");
           };
        };     
        
    } else {
        if (alLetter.indexOf(userPress) === -1) {
            alLetter.push(userPress);
            numGuess--;
            remainNum.textContent = numGuess;
            letterGuess.textContent = alLetter + ",";
            console.log(alLetter);
            console.log(numGuess);
        };
    };
if(!underScore.includes("_")){
        winScore++;
        userWins.textContent = winScore;
        reset();
    };
if(numGuess === 0) {
    alert("You lose");
    return reset();
    };
}; 

// reset game
function reset(){
    numGuess = 12 ;
    remainNum.textContent = 12; 
    aNime = animeList[Math.floor(Math.random() * animeList.length)];
    underScore = [];
    for(var i = 0; i < aNime.length; i++){
        underScore.push("_");
    }; 
    currentWord.textContent = underScore.join(" ");
    alLetter = [];
    letterGuess.textContent = "";
};