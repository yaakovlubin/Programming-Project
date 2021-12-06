var x=20; 
var friend= 0;
var friend2 = 65;
var friend3 = 237;
var circleGrow = 20;
var grayscale = 0;
var R2Y1 = 75;
var R2Y2 = 20;
var R2Y3 = 75;
//The setup function only happens once
function setup() {
	createCanvas(700, 700); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(237, 38, 38 ); //an RGB color for the canvas' background

  //circle
  stroke(255,255,127); // an RGB color for the circle's border
  fill(255, 255, 255 ); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  circleGrow = circleGrow + 1; 
  ellipse(width/2,height/2,circleGrow,circleGrow);

  noStroke();
  fill(friend2, friend3, friend); 
  friend=friend + 0.5;
  friend2 = friend2 + 0.5;
  friend3 = friend3 + 0.1;
  rect(x,20,60,40);
  x=x+1;


 noStroke();
fill(grayscale);
grayscale = grayscale + 0.5;
//rect(580, R2Y, 100, 60);
//R2Y = R2Y + 1;
triangle(600, R2Y1, 648, R2Y2, 686, R2Y3);
R2Y1 = R2Y1 + 1;
R2Y2 = R2Y2 + 1;
R2Y3 = R2Y3 + 1;
}

