var x = 0;
var y = 0;
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// declaring a function that will change the color of the drawing
// their might be a better way to change the color, like to be able to
// somehow access the color picker.
function yellow(){
  // we use the fillStyle to set the color
  ctx.fillStyle = "gold";
}
// another color function
function pink(){
  // we use the fillStyle to set the color
  ctx.fillStyle = "pink";
}
// and another color function
function crimson(){
  // we use the fillStyle to set the color
  ctx.fillStyle = "crimson";
}

// this will clear the canvas
function clearCanvas(){
  ctx.clearRect(0,0,300,300);
}

function draw(){
  ctx.fillRect(x,y,10,10);
}

setInterval(draw, 10);

function move(event){
  // right
  if(event.keyCode === 39){
    x += 6;
  }
  // left
  if(event.keyCode === 37){
    x -= 6;
  }
  // up
  if(event.keyCode === 40){
    y += 6;
  }
  // down
  if(event.keyCode === 38){
    y -= 6;
  }
}

addEventListener("keydown", move);
