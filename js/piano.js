 this.addEventListener("keydown", function(event) {
   var audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  
   var key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  console.log(key);

  if (!audio) return;
  audio.currentTime = 0;
   audio.play();
  key.classList.add("active");

  
 });
