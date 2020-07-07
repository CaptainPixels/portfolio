const rightController = document.getElementById("right-controller");
const leftController = document.getElementById("left-controller");
const debug = document.getElementById("debug");

const pointer = document.getElementById("pointer");
const pointerAdjusted = document.getElementById("pointer-adjusted");
const rotationMarker = document.getElementById("rotation-marker");
const projectSelector = document.getElementById("project-selector");

var firstRotation = 0;

// GAME LOOP ///////////////////////////////////////////////////////////////////
setInterval(gameLoop, 16);
function gameLoop() {
    if (trigger) {
      debug.setAttribute('text', 'value: 0 ' + ((Math.atan2(rightController.getAttribute('position').z, rightController.getAttribute('position').x)+Math.PI)*(180/Math.PI))*-1 + ' 0');
      pointer.setAttribute('rotation', '0 ' + ((Math.atan2(rightController.getAttribute('position').z, rightController.getAttribute('position').x)+Math.PI)*(180/Math.PI))*-1 + ' 0');

      if (firstDown) {
        firstDown = false;
        firstRotation = parseFloat(pointer.getAttribute('rotation').y) - parseFloat(pointerAdjusted.getAttribute('rotation').y);
        console.log(firstRotation);
      }

      pointerAdjusted.setAttribute('rotation', '0 ' + (((Math.atan2(rightController.getAttribute('position').z, rightController.getAttribute('position').x)+Math.PI)*(180/Math.PI))*-1 - firstRotation) + ' 0');
      rotationMarker.setAttribute('position', rightController.getAttribute('position').x + ' 0 ' + rightController.getAttribute('position').z);
    }
}

createCircle(.5, 20, .125, 1, .01, true);
function createCircle(radius, divisions, width, height, boxSize, lines) {
  var lineEntity = '<a-entity';
  var last0, last1, last2, last3;
  for (var i=0; i<divisions; i++) {
    const angleD = 360*i/divisions; // angle degrees
    const angleR = angleD*(Math.PI/180); // angle radians
    const x = Math.cos(angleR); // x value
    const y = Math.sin(angleR); // y value
    const rp = radius+(width/2); // radius plus
    const rm = radius-(width/2); // radius minus
    const scale = (boxSize.toString() +" ").repeat(3); // scale of verts
    const point0 = (x*rp) +' '+ rp +' '+ (y*rp),
          point1 = (x*rm) +' '+ rp +' '+ (y*rm),
          point2 = (x*rm) +' '+ rm +' '+ (y*rm),
          point3 = (x*rp) +' '+ rm +' '+ (y*rp);
          
    // place verticies
    projectSelector.innerHTML += '<a-box position="'+ point0 +'" scale="'+ scale +'" rotation="0 '+ -angleD +' 0"></a-box>';
    projectSelector.innerHTML += '<a-box position="'+ point1 +'" scale="'+ scale +'" rotation="0 '+ -angleD +' 0"></a-box>';
    projectSelector.innerHTML += '<a-box position="'+ point2 +'" scale="'+ scale +'" rotation="0 '+ -angleD +' 0"></a-box>';
    projectSelector.innerHTML += '<a-box position="'+ point3 +'" scale="'+ scale +'" rotation="0 '+ -angleD +' 0"></a-box>';

    // place lines
    if (lines) {
      // vertical lines
      lineEntity += ' line__'+ (8*i+0) +'="start: '+ point0 +'; end: '+ point1 +'; color: white"';
      lineEntity += ' line__'+ (8*i+1) +'="start: '+ point1 +'; end: '+ point2 +'; color: white"';
      lineEntity += ' line__'+ (8*i+2) +'="start: '+ point2 +'; end: '+ point3 +'; color: white"';
      lineEntity += ' line__'+ (8*i+3) +'="start: '+ point3 +'; end: '+ point0 +'; color: white"';

      if (i>0) {
        // horizontal lines
        lineEntity += ' line__'+ (8*i+4) +'="start: '+ last0 +'; end: '+ point0 +'; color: white"';
        lineEntity += ' line__'+ (8*i+5) +'="start: '+ last1 +'; end: '+ point1 +'; color: white"';
        lineEntity += ' line__'+ (8*i+6) +'="start: '+ last2 +'; end: '+ point2 +'; color: white"';
        lineEntity += ' line__'+ (8*i+7) +'="start: '+ last3 +'; end: '+ point3 +'; color: white"';
        if (divisions-1 == i) {

        }
      }
      last0 = point0;
      last1 = point1;
      last2 = point2;
      last3 = point3;
    }
  }
  lineEntity += '></a-entity>';
  projectSelector.innerHTML += lineEntity;
}
