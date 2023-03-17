var canvas;
var stage: createjs.Stage;

var helloText : createjs.Text;
var button : createjs.Bitmap;

function init() {
	canvas = document.getElementById("canvas");
	stage = new createjs.Stage(canvas);
	stage.enableMouseOver(20);
	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", gameLoop);
	main();
}

function gameLoop() {
	helloText.rotation += 5;
	stage.update();
}

function buttonClicked() {
	helloText.text = "Good bye";
}

function buttonOut() {
	button.alpha = 1.0;
}

function buttonOver() {
	button.alpha = 0.5;
}

function main() {

	//button
	button = new createjs.Bitmap("assets/images/button.png");
	stage.addChild(button);
	button.x = stage.canvas.width * 0.5;
	button.y = stage.canvas.height * 0.5;
	button.regX = 120;
	button.regY = 120;

	button.addEventListener("click", buttonClicked);
	button.addEventListener("mouseover", buttonOver);
	button.addEventListener("mouseout", buttonOut);

	helloText = new createjs.Text("Hello World", "40px consolas", "#000000");
	stage.addChild(helloText);
	//label
	helloText.x = stage.canvas.width * 0.5;
	helloText.y = stage.canvas.height * 0.5;
	helloText.regX = helloText.getBounds().width * 0.5;
	helloText.regY = helloText.getBounds().height * 0.5;

	



}