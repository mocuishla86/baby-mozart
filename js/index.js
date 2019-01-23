var game = undefined;

function startGame(){
  game = new Game();
  game.start("canvasPiano")
  doHide()
  hideImage()
  
}

function medium(){
  game.difficulty = "medium"

}

function hard(){
  game.difficulty = "hard"
}

//function showMozartSpeech() {
  // document.getElementById("bubble").style.visibility = "visible";
  //var hidden = false;

  // setTimeout(function(){
  //     document.getElementById("bubble").style.visibility= hidden ? "visible" : "hidden";
  //     hidden = !hidden;
  // },1000);



  function doHide(){
		document.getElementById( "bubble" ).style.display = "none" ;
	}

	function hideImage(){
		//  5000 = 5 seconds
		setTimeout( "doHide()", 5000 ) ;
	}
//}
