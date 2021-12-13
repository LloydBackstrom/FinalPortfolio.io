var turn=1;
document.getElementById("Xwin").style.color = "#ff0404";
var Xscore="0";
var Oscore="0";
var audio1=document.getElementById("victory");
var GameOver=false;
var CurrentPlayer="X";
var Square = document.getElementsByClassName("TicTacToeField");
document.getElementById
Square1.addEventListener('click', Checker);
Square2.addEventListener('click', Checker);
Square3.addEventListener('click', Checker);
Square4.addEventListener('click', Checker);
Square5.addEventListener('click', Checker);
Square6.addEventListener('click', Checker);
Square7.addEventListener('click', Checker);
Square8.addEventListener('click', Checker);
Square9.addEventListener('click', Checker);
Resetbut.addEventListener('click', Reset);
function Reset(){
Square1.innerHTML = " ";
Square2.innerHTML=" ";
Square3.innerHTML=" ";
Square4.innerHTML=" ";
Square5.innerHTML=" ";
Square6.innerHTML=" ";
Square7.innerHTML=" ";
Square8.innerHTML=" ";
Square9.innerHTML=" ";
document.getElementById("Xwin").style.color = "#ff0404";
document.getElementById("Owin").style.color = "#20acb6";
turn = 1;
GameOver = false;
document.getElementById("wintext").innerHTML = ("");
console.log ("It's Now Turn " + turn + "!");
}
function Checker(event){
var clickedSquare = event.srcElement.id;
if (GameOver == false){
if (document.getElementById(clickedSquare).innerHTML == " "){
if (turn % 2 == 0){
document.getElementById(clickedSquare).innerHTML= "O";
document.getElementById("Xwin").style.color = "#ff0404";
document.getElementById("Owin").style.color = "#20acb6";
WinChecker();
CurrentPlayer="X";
}
else {
document.getElementById(clickedSquare).innerHTML= "X";
document.getElementById("Owin").style.color = "#ff0404";
document.getElementById("Xwin").style.color = "#20acb6";
WinChecker();
CurrentPlayer="O";
}
turn++;
}
else{
alert ("Box is filled, try again")
}
}
else {
alert ("Please press reset if you want to continue playing!");
}
}
function WinChecker() {
	if (turn > 4){
	console.log ("Turn " + turn + " is coming this way!");
	if (Square1.innerHTML == CurrentPlayer  && Square2.innerHTML == CurrentPlayer && Square3.innerHTML == CurrentPlayer) {
      WinGame();
	}
	if (Square4.innerHTML == CurrentPlayer && Square5.innerHTML == CurrentPlayer  && Square6.innerHTML == CurrentPlayer ) {
		WinGame();
		}
	if (Square7.innerHTML == CurrentPlayer  && Square8.innerHTML == CurrentPlayer  && Square9.innerHTML == CurrentPlayer ) {
		WinGame();
		}
	if (Square1.innerHTML == CurrentPlayer  && Square4.innerHTML == CurrentPlayer  && Square7.innerHTML == CurrentPlayer ) {
		WinGame();
		}
	if (Square2.innerHTML == CurrentPlayer  && Square5.innerHTML == CurrentPlayer  && Square8.innerHTML == CurrentPlayer ) {
		WinGame();
		}
	if (Square3.innerHTML == CurrentPlayer  && Square6.innerHTML == CurrentPlayer  && Square9.innerHTML == CurrentPlayer ) {
		WinGame();
		}
	if (Square1.innerHTML == CurrentPlayer  && Square5.innerHTML == CurrentPlayer  && Square9.innerHTML == CurrentPlayer ) {
		WinGame();
		}
	if (Square3.innerHTML == CurrentPlayer  && Square5.innerHTML == CurrentPlayer  && Square7.innerHTML == CurrentPlayer ) {
		WinGame();
	}
	if ((turn == 9) && (GameOver == false)){
			document.getElementById("wintext").innerHTML = "All Spaces are filled, nobody wins!";
			GameOver = true;
			console.log ("All spaces are filled");
		}
	}
	
	else{
		console.log ("It's Now Turn " + turn + "!");
	}
    }
	function WinGame() {
		document.getElementById("wintext").innerHTML = ("Winner is Player " + CurrentPlayer + "!");
		if  (CurrentPlayer == "O"){
		document.getElementById("Owin").style.color = "#ff0404";
		document.getElementById("Xwin").style.color = "#20acb6";
        var number = Number(Oscore);
		Oscore = number + 1;
		document.getElementById("Owin").innerHTML = "Player O = " + Oscore;
		console.log ("Oscore = " + Oscore);
		audio1.play();
		}
		else {
			document.getElementById("Xwin").style.color = "#ff0404";
            document.getElementById("Owin").style.color = "#20acb6";
			var number = Number(Xscore);
			Xscore = number + 1;
			document.getElementById("Xwin").innerHTML = "Player X = " + Xscore;
			console.log ("Xscore = " + Xscore);
			audio1.play();
		   }
		console.log ("Winner is Player " + CurrentPlayer + "!");
	    GameOver = true;
		}