var game = undefined;

function startGame() {
  game = new Game();
  game.start("canvasPiano");
  
  doHide();
  hideImage();
}





function doHide() {
  document.getElementById("bubble").style.display = "none";
}

function hideImage() {
  //  5000 = 5 seconds
  setTimeout("doHide()", 5000);
}

