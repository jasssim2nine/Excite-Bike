/// <reference path="typings/createjs-lib/createjs-lib.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />




/// <reference path="objects/tracks.ts" />


//global variables
var canvas;
var stage: createjs.Stage;
var assetLoader: createjs.LoadQueue;

var manifest = [
	{ id: "tracks", src: "assets/images/tracks.png" }

			];

//game objects
var tracks: objects.Tracks;


function preload() {
    assetLoader = new createjs.LoadQueue(); // instantiated assetLoader
    assetLoader.installPlugin(createjs.Sound);
    assetLoader.on("complete", init, this); // event handler-triggers when loading done
    assetLoader.loadManifest(manifest); // loading my asset manifest
}

function init() {
	canvas = document.getElementById("canvas");
	stage = new createjs.Stage(canvas);
	stage.enableMouseOver(20);
	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", gameLoop);
	main();
}

function gameLoop() {

	tracks.update();
	stage.update();
}



function main() {


	tracks = new objects.Tracks();
	stage.addChild(tracks);


}