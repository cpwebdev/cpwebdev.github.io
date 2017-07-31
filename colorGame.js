var numSquares = 6;
var colors=[];
var pickedColor;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
	setupModeButtons();
	setupSquares();
	resetButton.addEventListener("click",Reset);
	Reset();
}

function setupModeButtons() {
	for (var i=0; i<modeButtons.length; i++) {
		modeButtons[i].addEventListener("click",function() {
			for (var j = 0; j<modeButtons.length; j++) {
				modeButtons[j].classList.remove("selected");
			}	
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			Reset();
			});
		};
	}

function setupSquares() {
	for (var i = 0; i<squares.length; i++){
	 	squares[i].addEventListener("click",function() {
	 		var clickedColor = this.style.backgroundColor;
	 		if (clickedColor === pickedColor) {
	 			messageDisplay.textContent = "Correct!";
	 			changeColors(clickedColor);
	 			resetButton.textContent = "Play Again?";
	 		}
	 		else {
	 			this.style.backgroundColor = "#232323"
	 			messageDisplay.textContent = "Try Again!";
	 		}
	 	});
	 };
}

function changeColors(color){
	for (var i=0; i<squares.length; i++) {
		if (squares[i].style.backgroundColor !== color) {
			squares[i].style.backgroundColor=color;
		}
	}	
	h1.style.backgroundColor=color;
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	var arr = [];
	for (var i = 0; i<num; i++) {
		// var red = Math.floor(Math.random() * 256);
		// var green = Math.floor(Math.random() * 256);
		// var blue = Math.floor(Math.random() * 256);
		// arr.push("rgb("+red+", "+green+", "+blue+")");
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
		var red = Math.floor(Math.random() * 256);
		var green = Math.floor(Math.random() * 256);
		var blue = Math.floor(Math.random() * 256);
		return "rgb("+red+", "+green+", "+blue+")"
}

function Reset(){
	messageDisplay.textContent="";
	colors = generateRandomColors(numSquares);
	for (var i = 0; i<squares.length; i++) {
		if (colors[i]) {
			squares[i].style.backgroundColor = colors[i];
			squares[i].style.display= "block";
		}
		else {
			squares[i].style.display="none";
		}
	}
	pickedColor = pickColor();
 	h1.style.backgroundColor = "steelblue";
 	colorDisplay.textContent=pickedColor;
 	resetButton.textContent = "New Colors";
}