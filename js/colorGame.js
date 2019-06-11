var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var messageDisplay = document.querySelector("#message");
var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();


resetButton.addEventListener("click", function(){
	reset();
})


function changeColors(color){
	// loop through all squares
	for(var i=0; i<colors.length;i++){
		// change each color to match given color
		squares[i].style.backgroundColor = color;


	}
}
function pickColor(){
	var index = Math.floor(Math.random() * colors.length);
	return colors[index];
}
function generateRandomColors(num){
	// make an array
	var arr = [];
	// add num random colors to array
	for(var i=0; i<num;i++){
		// get random color and push into arr
		arr[i] = randomColor();
	}
	// return that array
	return arr;
}
function randomColor(){
	// pick a "red" from 0 to 255
	var red = Math.floor(Math.random() * 256);
	// pick a "green" from 0 to 255
	var green = Math.floor(Math.random() * 256);
	// pick a "blue" from 0 to 255
	var blue = Math.floor(Math.random() * 256);
	return "rgb("+ red +", " + green + ", " + blue + ")";
}
function reset(){
	colors=generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match picked colorDisplay
	colorDisplay.textContent = pickedColor;
	// chane colors of squares
	for(var i=0; i<squares.length;i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
		else
			squares[i].style.display = "none";
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent ="";
	resetButton.textContent = "New Colors";
}
function init(){
	for(var i = 0;i<modeButtons.length;i++){
		modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent === "Easy")
			numSquares=3;
		else
			numSquares=6;

		reset();
		});
	}
	for(var i=0; i<squares.length;i++){
		// add initial colors to squares
		squares[i].style.backgroundColor = colors[i];
		// add click listeners to squares
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.backgroundColor;
			if(clickedColor===pickedColor){
				messageDisplay.textContent = "Correct!";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
				resetButton.textContent = "Play Again?"
			}
			else {
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}
	reset();
}