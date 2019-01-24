var game = undefined;

function startGame() {
  game = new Game();
  game.start("canvasPiano");
  doHide();
  hideImage();
  document.getElementById("easy").removeAttribute("disabled")
  //document.getElementById("easy").setAttribute("disabled", "disabled")
  document.getElementById("medium").setAttribute("disabled")
  // document.getElementById("medium").setAttribute("disabled", "disabled")
  document.getElementById("hard").setAttribute("disabled")
  // document.getElementById("hard").setAttribute("disabled", "disabled")
  
}





function doHide() {
  document.getElementById("bubble").style.display = "none";
}

function hideImage() {
  //  5000 = 5 seconds
  setTimeout("doHide()", 5000);
  
}

