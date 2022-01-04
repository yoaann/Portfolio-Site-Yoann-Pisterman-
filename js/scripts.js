console.log("Welcome to my Portfolio site");
// You can press the green "run" button to execute the lesson from above
// Feel free to experiment with the code by changing some values here or "open in repl.it button" on the right
function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }
}
