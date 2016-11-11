var x = 0;
var y = 0;
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');


// we took out the x++ and y++ and are building those controls with a function below
// we also took out the ctx.clearRect(0,0,300,300) so that we aren't clearing
// the canvas to create the effect of drawing.
function draw(){
  ctx.fillRect(x,y,10,10);
}

setInterval(draw, 10);

// we are declare the move function that will wire keys to x and y movements
// the move function will take event as a parameter
// I am incrementing the x and y variables by 6 to make it draw faster.
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

// we will add an event listener to have our script listen for keypresses to
// control the x and y coordinates on the canvas. note: this would probably also
// work for mobile touch-events, more information at:
// https://developer.mozilla.org/en-US/docs/Web/API/Touch_events
// the addEventListener method takes two arguments: the first being the event that
// it is listening for and the second argument is the function that will fire
// when the event has happened.
addEventListener("keydown", move);
