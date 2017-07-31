var p1button = document.querySelector("#p1");
var p2button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");

 var p1display = document.querySelector("#p1display");
 var p2display = document.querySelector("#p2display");
 var scoredisplay = document.querySelector("#score");

var maxChooser = document.querySelector("input");

var p1score = 0;
var p2score = 0;
var maxscore = Number(maxChooser.value);

var gameOver = false;

p1button.addEventListener("click",function()
{
	if (!gameOver){
		p1score++;
		if (p1score===maxscore) {
			p1display.classList.add("winner");
			gameOver = true;
		}
		p1display.textContent = p1score;
	}
	

});

p2button.addEventListener("click",function(){
	if (!gameOver){
		p2score++;
		if (p2score===maxscore) {
			p2display.classList.add("winner");
			gameOver=true;
		}
		p2display.textContent = p2score;
	}
	

})

resetButton.addEventListener("click",function(){
	reset();
	maxscore=5;
	maxChooser.value=5;
	scoredisplay.textContent=maxscore.toString();
})

maxChooser.addEventListener("input",function() {
	maxscore = Number(this.value);
	scoredisplay.textContent = maxscore;
	reset();
})

function reset() {
	p1display.textContent="0";
	p2display.textContent="0";
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
	p1score=0;
	p2score=0;
	gameOver=false;

}