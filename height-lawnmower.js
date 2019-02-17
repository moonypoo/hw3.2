//Assignment: Perhaps you prefer a much better maintained lawn. Make the lawnmower 
//come by much more often. Save this in your homework repository as speedy-lawnmower.js.

//Assignment: Make the lawnmower come when the grass reaches a pre-determined height. Save this in your homework repository as height-lawnmower.js.



function setup() {
  createCanvas(400, 200);
  colorMode(HSB);
}

var x = 0;
var h = 10;

function draw() {
  stroke(random(125, 70), 100, 90);
  line(x, height-5, x+random(-10, 10), height-15-random(h));
  noStroke();

  x = x + 10;

  if (x > width) {
    x = random(50);
    h = h+5;
  }

  if (random() > 0.999) {
    fill(255);
    rect(0, 0, width, height-50);
    h = 20;
  }

  //ground
  fill(40, 100, 60);
  rect(0, height-10, width, 10);
}
