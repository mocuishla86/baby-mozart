function Game() {
  this.canvas = undefined;
  this.ctx = undefined;
  this.width = 1000;
  this.height = 600;
  this.currentNote = undefined;
 
  this.allNotes = [
    new Note(0,0,"Do","#C76CE5",document.getElementById("Do")),
    new Note(0,0,"Re","#6EA3E8",document.getElementById("Re")),
    new Note(0,0,"Mi","#72FFC4",document.getElementById("Mi")),
    new Note(0,0,"Fa","#A0E85E",document.getElementById("Fa")),
    new Note(0,0,"Sol","#FFE15D",document.getElementById("Sol")),
    new Note(0,0,"La","#FFAE68",document.getElementById("La")),
    new Note(0,0,"Si","#E56D85",document.getElementById("Si")),
  ];

  //this.note = new Note(70, 0, "Fa");


  this.start = function(canvasID) {
    this.canvas = document.getElementById(canvasID);
    this.ctx = this.canvas.getContext("2d");
    this.generateNote();
   
    setInterval(
      function() {
        
        this.draw();
        this.generateSound();
        this.update();
      }.bind(this),
      10
    );
  };


  this.update = function() {
      this.currentNote.moveDown();
      if(this.currentNote.getBottom() >= this.height){
        this.generateNote();
        // console.log("collision!");
      }
    };

  this.generateNote = function() {
    var randomNoteIndex = Math.floor(Math.random() * this.allNotes.length)
    this.currentNote = this.allNotes[randomNoteIndex];  
    var randomXPosition = Math.floor(Math.random()*900)
    
    this.currentNote.x = randomXPosition;
    this.currentNote.y = 0;  
  };

  this.generateSound = function() {
    if (this.currentNote.y === 0) {
      //para solucionar la problematica con el AUTOPLAY, hacer que interaccione, bajando la y
    this.currentNote.makeSound();
    }
  };

  this.draw = function() {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.currentNote.draw(this.ctx);
  };
}

