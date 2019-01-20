function Game() {
  this.canvas = undefined;
  this.ctx = undefined;
  this.width = 1000;
  this.height = 600;

  this.note = new Note(70, 0, "Sol"); 
  this.noteRadius = 30;

  this.start = function(canvasID) {
    this.canvas = document.getElementById(canvasID);
    this.ctx = this.canvas.getContext("2d");
    
    
    var that = this;

    setInterval(function() {
      that.update();
      that.draw();
      that.makeSound();
    }, 5);
  };

  this.update = function() {
    this.note.y++;
   
  
    if (this.note.y >= this.height - this.noteRadius) {
     // console.log("collision!");
    }
  };

  this.draw = function() {
    this.ctx.clearRect(0, 0, this.width, this.height);
    this.ctx.beginPath();
    this.ctx.font = '48px Amatic SC';
    var noteTextX;
    if(this.note.name === "Sol"){
      noteTextX = this.note.x - 27
    }
    else {
      noteTextX = this.note.x-20;
    }
    this.ctx.fillText(this.note.name, noteTextX, this.note.y -35);
    /*this.ctx.fillStyle = "pink"
    this.ctx.fill();*/
    var startAngle = 0;
    var endAngle = Math.PI * 2;
    this.ctx.arc(
      this.note.x,
      this.note.y,
      this.noteRadius,
      startAngle,
      endAngle,
      true
    );
    this.ctx.fillStyle = "#FFE15D";
    this.ctx.fill();
  };

  this.makeSound = function(){
    if (this.note.y === 50){
      var sound = document.getElementById(this.note.name);
      sound.play();
    }
    
  }
}

function Note(x, y, name) {
  this.x = x;
  this.y = y;
  this.name = name;
}

var game = new Game();
