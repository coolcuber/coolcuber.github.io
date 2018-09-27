function getx(int x, int width, int max) {
	return max*((2*x/width)-1);
}

function gety(int y, int height, int max) {
	return max*((2*y/height)+1);
}

/* function drawinit(var ctx) {
	int w = ctx.width;
	int h = ctx.height;
	ctx.moveTo(w/2, 0);
	ctx.lineTo(w/2, h);
	ctx.moveTo(0, h/2);
	ctx.lineTo(w, h/2);
	ctx.stroke();
} */

var canvas = document.getElementById("maingraph")
int w = canvas.width;
int h = canvas.height;


function startup() {
	

document.addEventListener("DOMContentLoaded", startup());