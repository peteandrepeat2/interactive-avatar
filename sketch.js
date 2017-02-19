var x = [];

function setup(){  
  createCanvas(windowWidth,windowHeight);
      background(255, 0, 0);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

var bloog = 0
var bloog1 = bloog + 2
var plusorneg = 1
var r = 255
var g = 0
var b = 0
var a = 20
var rr = 250
var gr = 15
var br = 0
var ar = 255
var hairwidth = 130
var hairheight = 200
var translateX = 1
var translateY = 1
var reverser1 = 1
var rotationer = 0

function draw(){
background(r, g, b, 255)

// rotate(rotationer)
  var tock = (frameCount % 60)
  if (tock == 1) {
    plusorneg *= -1
  }

      // THE ACTIONS!!!
  if (mouseIsPressed) {        // what happens when you click
      scale(random(5.0));
      translate(mouseX - width/3 - 27, mouseY - width/3 + 16);
      r = (random (255))
      g = (random (255))
      b = (random (255))
      a = random (255)
      rr = r - 30
      gr = g - 30
      br = b - 30
      background(r, g, b, 255)
      rotationer = (random(2 * PI))
      rotate(rotationer)
    } else {     //the way it usually moves
      translate(translateX, translateY);
      translateX += reverser1 / 4
      if (translateX >= (width) - width/3) {
      reverser1 *= -1
       }
      if (translateX <= -width / 3) {
         reverser1 *= -1
      }
  }

 
  
   // face
   noFill();
   strokeWeight(.5)
   stroke(frameCount % 60 * 4, frameCount % 59 / 5, frameCount / 5, ar)
   ellipse (width/3 + 22.5, height/3 + 25, random(90, 120) +
           (random(.1, .5)), 150 + (random (2.0, 2.1)))
  
   //hair
   strokeWeight(random(.1, 3))
   stroke(rr, gr, br, ar)
   arc (width/3 + 22.5, height/3 + 49, 
        hairwidth + random (1, 40), hairheight, PI, PI);
   
  //eyedroop
  strokeWeight(3)
  stroke(50, 50, 100)
  ellipse (width/3, height/3 +2, 28, 30);
  ellipse ((width/3 + 45), height/3 +2, 28, 30);
  
  // eyes
  fill(255, 255, 255)
  strokeWeight(1)
  stroke(0)
  ellipse (width/3, height/3, 30, 30);
  ellipse ((width/3 + 45), height/3, 30, 30);

  // pupils
  fill(0, 0, 0)
  ellipse (width/3 + 2 + bloog, height/3, 10, 25);
  ellipse ((width/3 + 45 + bloog), height/3, 10, 25);
  
  // eye lights
  fill(255, 255, 255)
  ellipse (width/3 + 1 + bloog, height/3 - 8, 5, 5);
  ellipse ((width/3 + 44 + bloog), height/3 - 8, 5, 5);
  bloog += plusorneg / 15
 
 
  //hair color changes
  rr = (rr + plusorneg)
  gr = (gr + plusorneg)
  br = (br + plusorneg)
  

}
