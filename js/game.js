function Game() {
  this.width = 1000;
  this.height = 600;

  this.currentNote = undefined;
  this.canvas = undefined;
  this.ctx = undefined;

  this.score = 0;
  this.lives = 3;

  
  this.difficulty = "Easy";

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

  this.update = function() {
    this.currentNote.moveDown();
    if (this.currentNote.getBottom() >= this.height) {
      if (this.isOnItsKey(this.currentNote) === true) {
        this.score++;
        this.generateNote();
      } else {
        this.lives--;
        this.generateNote();
      }

      if (this.lives === 0) {
        alert("GAME OVER")
        this.reset();
        //this.reset();
      }
    }
  };

this.drawGameOver = function(){
  this.ctx.font = "100px Amatic SC";
  this.ctx.fillStyle = "#eda195";
  this.ctx.fillText ("GAME OVER!", 500, 300);
}

  this.drawScore = function() {
    this.ctx.font = "48px Amatic SC";
    this.ctx.fillStyle = "#eda195";
    this.ctx.fillText("Score: " + this.score, 50, 50);
  };

  this.drawLives = function() {
    this.ctx.font = "48px Amatic SC";
    this.ctx.fillStyle = "#eda195";
    this.ctx.fillText("Lives: " + this.lives, 850, 50);
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
    this.currentNote.draw(this.ctx, this.difficulty);
    this.drawScore();
    this.drawLives();
  };

  this.setListeners = function() {
    document.onkeydown = function(event) {
      if (event.keyCode === 65) {
        this.currentNote.moveLeft();
      }
      if (event.keyCode === 68) {
        this.currentNote.moveRight();
      }
      if (event.keyCode === 83) {
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


Game.prototype.start = function(canvasID) {
  this.canvas = document.getElementById(canvasID);
  this.ctx = this.canvas.getContext("2d");
  this.generateNote();
  this.setListeners();
  this._setHandlers();

  setInterval(
    function() {
      this.draw();
      this.generateSound();
      this.update();
    }.bind(this),
    17
  );
};

Game.prototype._setHandlers = function() {
  var radios = document.querySelectorAll(".levelChange");
  var that=this;
  radios.forEach(function(radio) {
    radio.addEventListener("change",function(e) {
        that._changeDifficulty(e.target.value);
      }
    );
  });
};

Game.prototype._changeDifficulty = function(newDifficulty) {
  this.difficulty = newDifficulty

  console.log(this.difficulty)
};


Game.prototype.reset = function() {
  this.score = 0;
  this.lives = 3;
};