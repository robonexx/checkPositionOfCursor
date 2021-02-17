// add event listener and function for keypress
const canvasE = document.querySelector('#canvas');
const showXY = document.querySelector('#showXY');

function getMousePosition(canvas, e) {
  const rect = canvas.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  
  console.log("coord x: " + x, "coord y: " + y);
  return x + y;
}

canvasE.addEventListener("mousedown", function(e) {
  
  getMousePosition(canvasE, e);
  // to see the event target in the console
    console.log(canvasE, e);
  // not shown on screen

  

  // writing out the keycode and key on screen
showXY.innerHTML = `
    <div class="xyPos">
    &nbsp;
    <b>X-COORDINATES&nbsp;:</b>&nbsp;${e.clientX}
    &nbsp;
    <b>Y-COORDINATES&nbsp;:</b>&nbsp;${e.clientY}
    &nbsp;&nbsp;
    </div>
  `;
  
});