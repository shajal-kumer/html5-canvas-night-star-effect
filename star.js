// selectors
const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

// golval vairalbe
let canvasWidth;
let canvasHeight;

let layer1;
let layer2;
let layer3;

const NO_OF_STARS = 60;
const SPEED1 = 1;
const SPEED2 = 2;
const SPEED3 = 3;

// Event listeners
window.addEventListener("resize", init);
window.addEventListener("load", init);

// classes

class Layer {
	constructor(noOfStar, speed, color) {
		this.noOfStar = noOfStar;
		this.speed = speed;
		this.color = color;
		this.stars = [];
	}
	createStar() {
		for (let i = 0; i < this.noOfStar; i++) {
			this.stars.push(new Star());
		}
	}
	moveLayer() {
		for (let i = 0; i < this.noOfStar; i++) {
			this.stars[i].move(this.speed);
		}
	}
	drawLayer() {
		for (let i = 0; i < this.noOfStar; i++) {
			this.stars[i].draw(this.color);
		}
	}
}

class Star {
	constructor() {
		this.x = Math.floor(Math.random() * canvasWidth);
		this.y = Math.floor(Math.random() * canvasHeight);
	}
	draw(color) {
		context.fillStyle = color;
		context.fillRect(this.x, this.y, 1, 1);
	}
	move(speed) {
		this.y += speed;
		if (this.y + speed > canvasHeight) {
			this.y = 0;
			this.x = Math.floor(Math.random() * canvasWidth);
		}
	}
}

//  functions
function init() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	canvasWidth = canvas.width;
	canvasHeight = canvas.height;

	layer1 = new Layer(NO_OF_STARS, SPEED1, "red");
	layer2 = new Layer(NO_OF_STARS, SPEED2, "green");
	layer3 = new Layer(NO_OF_STARS, SPEED3, "yellow");

	drawLayers();
}

function drawLayers() {
	context.fillStyle = "#000000";
	context.fillRect(0, 0, canvasWidth, canvasHeight);

	layer1.createStar();
	layer2.createStar();
	layer3.createStar();

	layer1.drawLayer();
	layer2.drawLayer();
	layer3.drawLayer();

	layer1.moveLayer();
	layer2.moveLayer();
	layer3.moveLayer();

	requestAnimationFrame(drawLayers);
}
