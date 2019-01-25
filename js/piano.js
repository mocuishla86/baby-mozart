 this.addEventListener("keydown", function(event) {
   var audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  
   var key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  
  if (!audio) return;
  audio.currentTime = 0;
   audio.play();
  key.classList.add("active");

  $(".tecla").keydown(function(e){
    if(e.which === 90)
    $(this).css("background-color", "red")
  })



  
 });
