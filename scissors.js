//Get all of the variables from HTML into JS
var rock = document.getElementById("rock")
var paper = document.getElementById("paper")
var scissors = document.getElementById("scissors")
var playerScore = document.getElementById("player-score")
var npcScore = document.getElementById("npc-score")
var outcome = document.getElementById("outcome")
var reset = document.getElementById("reset")

//start off with 0 scores
let playerScoreInit = 0;
let npcScoreInit = 0;
const winningScore = 10;
gameOver = false;



//generate a random R,P or S on click
rock.addEventListener("click", function(){
	if (gameOver === false) {
		let C = Math.floor(Math.random() * 3);
		if (C === 1) {
			playerScoreInit++;
			playerScore.innerHTML = playerScoreInit;
			outcome.innerHTML = "You Won"
			
			if (playerScoreInit === winningScore) {
				gameOver = true;
				outcome.innerHTML = "You Won The Game!";
				reset.innerHTML = "Play Again"
			}
		}
		if (C === 0) {
			outcome.innerHTML = "You Tied";
		}
		if (C === 2){
			npcScoreInit++;
			npcScore.innerHTML = npcScoreInit;
			outcome.innerHTML = "You Lost";

			if (npcScoreInit === winningScore) {
				gameOver = true;
				outcome.innerHTML = "You Lost The Game"
				reset.innerHTML = "Play Again"
			}
		}
	}
	else{
		return 0;
	}
})

paper.addEventListener("click", function(){
		if (gameOver === false) {
		let C = Math.floor(Math.random() * 3);
		if (C === 1) {
			playerScoreInit++;
			playerScore.innerHTML = playerScoreInit;
			outcome.innerHTML = "You Won"
			
			if (playerScoreInit === winningScore) {
				gameOver = true;
				outcome.innerHTML = "You Won The Game!";
				reset.innerHTML = "Play Again"
			}
		}
		if (C === 0) {
			outcome.innerHTML = "You Tied";
		}
		if (C === 2){
			npcScoreInit++;
			npcScore.innerHTML = npcScoreInit;
			outcome.innerHTML = "You Lost";

			if (npcScoreInit === winningScore) {
				gameOver = true;
				outcome.innerHTML = "You Lost The Game"
				reset.innerHTML = "Play Again"
			}
		}
	}
	else{
		return 0;
	}
})

scissors.addEventListener("click", function(){
	if (gameOver === false) {
		let C = Math.floor(Math.random() * 3);
		if (C === 0) {
			playerScoreInit++;
			playerScore.innerHTML = playerScoreInit;
			outcome.innerHTML = "You Won"
			
			if (playerScoreInit === winningScore) {
				gameOver = true;
				outcome.innerHTML = "You Won The Game!";
				reset.innerHTML = "Play Again"
			}
		}
		if (C === 1) {
			outcome.innerHTML = "You Tied";
		}
		if (C === 2){
			npcScoreInit++;
			npcScore.innerHTML = npcScoreInit;
			outcome.innerHTML = "You Lost";

			if (npcScoreInit === winningScore) {
				gameOver = true;
				outcome.innerHTML = "You Lost The Game"
				reset.innerHTML = "Play Again"
			}
		}
	}
	else{
		return 0;
	}
})


reset.addEventListener("click", function(){
	playerScoreInit = 0;
	npcScoreInit = 0
	playerScore.innerHTML = playerScoreInit;
	npcScore.innerHTML = npcScoreInit;
	gameOver = false;
	reset.innerHTML = "Reset";
	outcome.innerHTML = "";
})



