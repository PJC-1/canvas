var x = 0;
var y = 0;
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');


// we will declare the draw function that will handle drawing & moving the
// box on the canvas.
function draw(){
  // clearRect is used to clear the canvas, it uses the same parameters thats
  // translates to "clear the canvas from 0,0 300 pixels wide and 300 pixels high"
  ctx.clearRect(0,0,300,300);
  // we switch out the x-position and y-postion for an x and y variable so
  // we can control the position of the box on the canvas. which we declare
  // at the top.
  ctx.fillRect(x,y,10,10);
  // increment x by one
  x++;
  // increment y by one
  y++;
}

// the setInterval method takes to parameters: first is a function and the
// second parameter is time in milliseconds (so thats 1 - 1000).
setInterval(draw, 25);
