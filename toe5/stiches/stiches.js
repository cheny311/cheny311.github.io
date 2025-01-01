//defining a variable to store the number of clicks
//reference: samek
var clicks = 0;

let img;

function preload() {
  img = loadImage('yarn.png');
}

function setup() {
 createCanvas(windowHeight,windowWidth);
 
  //get the reset button element from the HTML document
  var resetButton = select('#reset-button');
  
  //add an event listener to the button element
  resetButton.mousePressed(resetClicks);
}

function draw() {
  noStroke();
  textFont('Georgia');
  textStyle(BOLD);
  textSize(80);
  textAlign(CENTER, CENTER);
  
  fill(255,0,255);
  rectMode(CENTER);
  rect(width / 2, height / 2, textWidth(clicks.toString()) + 20, textSize() + 20,20);
 
  //displaying number of clicks
  fill(25);
  text(clicks, width/2, height/2);
  imageMode(CENTER);
  image(img, clicks+130, height/2);
  
  
}

//function is called when user clicks
function mousePressed() {
  
    // add 1 to variable clicks
    clicks ++;
    clear();
  }

 

//function to reset the clicks variable to zero
function resetClicks() {
  clicks = 0;
}
