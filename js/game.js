function Game() {
  this.width = 1000;
  this.height = 600;
  this.keyLeft = 37;
  this.keyRight = 39;
  this.keyDown = 40;

  this.currentNote = undefined;
  this.canvas = undefined;
  this.ctx = undefined;

  this.score = 0;

  this.allNotes = [
    new Note(0, 0, "Do", "#C76CE5", document.getElementById("Do")),
    new Note(0, 0, "Re", "#6EA3E8", document.getElementById("Re")),
    new Note(0, 0, "Mi", "#72FFC4", document.getElementById("Mi")),
    new Note(0, 0, "Fa", "#A0E85E", document.getElementById("Fa")),
    new Note(0, 0, "Sol", "#FFE15D", document.getElementById("Sol")),
    new Note(0, 0, "La", "#FFAE68", document.getElementById("La")),
    new Note(0, 0, "Si", "#E56D85", document.getElementById("Si"))
  ];

  this.pianoKeysLocation = [
    { id: "Do", x1: 30, x2: 160 },
    { id: "Re", x1: 160, x2: 290 },
    { id: "Mi", x1: 290, x2: 420 },
    { id: "Fa", x1: 420, x2: 550 },
    { id: "Sol", x1: 550, x2: 680 },
    { id: "La", x1: 680, x2: 810 },
    { id: "Si", x1: 810, x2: 940 }
  ];

  this.start = function(canvasID) {
    this.canvas = document.getElementById(canvasID);
    this.ctx = this.canvas.getContext("2d");
    this.generateNote();
    this.setListeners();

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
    if (this.currentNote.getBottom() >= this.height) {
      if (this.isOnItsKey(this.currentNote) === true) {
        this.score++;
        this.generateNote();
      } else {
        alert("game over");
      }

      // console.log("collision!");
    }
  };

  this.drawScore = function() {
    this.ctx.font = "48px Amatic SC";
    this.ctx.fillStyle = "rgb(56, 167, 175)";
    this.ctx.fillText("Score: " + this.score, 50, 50);
  };

  this.generateNote = function() {
    var randomNoteIndex = Math.floor(Math.random() * this.allNotes.length);
    this.currentNote = this.allNotes[randomNoteIndex];
    var randomXPosition = Math.floor(Math.random() * 900);
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
    this.drawScore();
  };

  this.setListeners = function() {
    document.onkeydown = function(event) {
      if (event.keyCode === 37) {
        this.currentNote.moveLeft();
      }
      if (event.keyCode === 39) {
        this.currentNote.moveRight();
      }
      if (event.keyCode === 40) {
        this.currentNote.moveKeyDown();
      }
    }.bind(this);
  };

  this.isOnItsKey = function(note) {
    var foundKey = this.pianoKeysLocation.find(function(key) {
      if (key.id === note.name) {
        return true;
      } else {
        return false;
      }
    });
    if (note.x < foundKey.x2 && note.x > foundKey.x1) {
      return true;
    } else {
      return false;
    }
  };
}
