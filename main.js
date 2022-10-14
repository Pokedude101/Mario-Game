noseX = 0
noseY = 0

function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	gameover = loadSound("gameover.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	coin = loadSound("coin.wav")

	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas')
	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800, 400)
	video.parent("game_console");

	posenet = ml5.poseNet(video, modelloaded);
	posenet.on('pose', gotresult);
	
}

function draw() {
	game()
}

function modelloaded(){
	console.log("model has loaded");
}

function gotresult(results){
	if(results.length > 0){
		noseX = results[0].pose.nose.x
		noseY = results[0].pose.nose.y 
		console.log("X: " + noseX + " Y: " + noseY)
	}
}






