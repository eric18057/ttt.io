var currentPlayer = 1;
var plays = 0;
var board = document.querySelector("#board");

board.b0.addEventListener("click",takeTurn);
board.b1.addEventListener("click",takeTurn);
board.b2.addEventListener("click",takeTurn);
board.b3.addEventListener("click",takeTurn);
board.b4.addEventListener("click",takeTurn);
board.b5.addEventListener("click",takeTurn);
board.b6.addEventListener("click",takeTurn);
board.b7.addEventListener("click",takeTurn);
board.b8.addEventListener("click",takeTurn);

function takeTurn(){
	if(currentPlayer == 1 && this.value == ""){
		this.value = "X";
		this.style.color = "red";
		currentPlayer = 2;
		plays++;
		if(plays >= 5){
			checkWin();
		}
	}
	else if(currentPlayer == 2 && this.value == ""){
		this.value = "O";
		this.style.color = "green";
		currentPlayer = 1;
		plays++;
		if(plays >= 5){
			checkWin();
		}
	}
	console.log("plays =" + plays);
}

function checkWin(){
	if(board.b0.value == board.b1.value && board.b1.value == board.b2.value && board.b0.value != ""){
		announceWin(board.b0.value);
	}
	else if(board.b3.value == board.b4.value && board.b4.value == board.b5.value && board.b3.value != ""){
		announceWin(board.b3.value);
	}
	else if(board.b6.value == board.b7.value && board.b7.value == board.b8.value && board.b3.value != ""){
	
		announceWin(board.b6.value);
	}
	else if(board.b0.value == board.b3.value && board.b3.value == board.b6.value && board.b0.value != ""){
		announceWin(board.b0.value);
	}
	else if(board.b1.value == board.b4.value && board.b4.value == board.b7.value && board.b1.value != ""){
		announceWin(board.b1.value);
	}
	else if(board.b2.value == board.b5.value && board.b5.value == board.b8.value && board.b3.value != ""){
		announceWin(board.b2.value);
	}
	else if(board.b0.value == board.b4.value && board.b4.value == board.b8.value && board.b3.value != ""){
		announceWin(board.b0.value);
	}
	else if(board.b2.value == board.b4.value && board.b4.value == board.b6.value && board.b2.value != ""){
		announceWin(board.b2.value);
	}
	else if(plays == 9){
		announceCatsGame();
	}
}

function announceWin(winner){
	alert(winner + "wins!");
}
function announceCatsWin (winner){
	alert( "Cat's Game! No Winner!");
}

alert("the current player is: " + currentPlayer);