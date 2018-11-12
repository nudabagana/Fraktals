'use strict';

let ctx;
let cvWidth;
let cvHeight;
let lHeight = 100;
let lWidth = 20;

let objToDraw = [];

const bgColor = 'hsl(250, 0%, 10%)';

function draw() {
	requestAnimationFrame(draw);

	ctx.clearRect(0, 0, cvWidth, cvHeight);
	ctx.fillStyle = bgColor;
	//ctx.fillRect(0, 0, cvWidth, cvHeight);

	objToDraw.forEach(obj => {
		obj.draw(ctx);
	});
}

function init() {
	console.log('init');
	var canvas = document.getElementById('myCanvas');
	ctx = canvas.getContext('2d');
	cvWidth = canvas.width;
	cvHeight = canvas.height;

	objToDraw.push(new Triangle(1,'rgb(255,0,0)',
		'rgb(0,255,0)','rgb(0,0,255)', 'rgb(128,128,128)'));

	

	let slider = document.getElementById('speedRange');
	slider.oninput = function() {
		objToDraw[0].step = slider.value;
	};

	let button0 = document.getElementById('button0');
	button0.onclick = function() {
		objToDraw[0].chooseAnimation(0);
	}

	let button1 = document.getElementById('button1');
	button1.onclick = function() {
		objToDraw[0].chooseAnimation(1);
	}

	let button2 = document.getElementById('button2');
	button2.onclick = function() {
		objToDraw[0].chooseAnimation(2);
	}

	let button3 = document.getElementById('button3');
	button3.onclick = function() {
		objToDraw[0].chooseAnimation(3);
	}

	let button4 = document.getElementById('button4');
	button4.onclick = function() {
		objToDraw[0].chooseAnimation(4);
	}


	// var slider2 = document.getElementById('colorRange');
	// slider2.oninput = function() {
	// };

	draw();
}

window.onload = function() {
	init();
};
