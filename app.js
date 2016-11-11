// we create a variable that grabs the canvas
var canvas = document.getElementById('myCanvas');
// we use the getContext method to tell the javascript that the canvas is a 2d game/animation
var ctx = canvas.getContext('2d');
// fillRect is a method that fills the canvas. the first number is the starting
// location of the x-axis which starts from the very top left point of the square
// and the farther it goes right the larger the x value. note: that in canvas there
// are only positive numbers, any negitive values would be outside the canvas.
// the second number in the fillRect method is the y-axis value, and this also
// starts at the very upper left corner and as the y-value gets larger the farther
// down the canvas it goes. the third parameter is how wide the square is and the
// fourth parameter is the height of the square being drawn onto the canvas.
// mess around with the numbers to see it's effects, an example is
// ctx.fillRect(100,100,100,100) would be centered.
ctx.fillRect(100,100,100,100);
