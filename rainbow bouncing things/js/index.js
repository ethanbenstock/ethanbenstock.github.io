var canvas = document.getElementById("gc");
var ctx = canvas.getContext("2d");
var x = 50;
var y = 30;
var r = 70;
var sx = 7;
var sy = -10;

var x2 = 50;
var y2 = 30;
var r2 = 70;
var sx2 = 7;
var sy2 = -10




function circle(x, y) {

  ctx.beginPath();
  ctx.arc(x, y, 9, 0, Math.PI * 2, true);
  ctx.fillStyle = "hsl(" + (x + y) + ",100%,25%)"
  ctx.fill();
}

function draw() {
  clears();
  circle(x, y);
  x += sx;
  y += sy;
  if (x < 0 || x > 700) {
    sx = -sx;
  }
  if (y < 0 || y > 450) {
    sy = -sy;
  }
}

function init() {
  window.setInterval(draw, 20);

}

function clears() {
  ctx.fillStyle = "rgba(0,0,0,0.15)";
  ctx.fillRect(0, 0, 700, 450);
}

init();