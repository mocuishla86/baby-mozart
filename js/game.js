function Game() {
  this.canvas = undefined;
  this.ctx = undefined;
  this.note = undefined;

  this.start = function(canvasID) {
    this.canvas = document.getElementById(canvasID);
    this.ctx = this.canvas.getContext("2d");
    this.note = new Note(70, 100);
    var that = this;

    setInterval(function() {
      that.update();
      that.draw();
    }, 10);
  };

  this.update = function() {
    this.note.y++;
  };

  this.draw = function() {
    this.ctx.clearRect(0, 0, 600, 1000);
    this.ctx.beginPath();
    var radius = 30;
    var startAngle = 0;
    var endAngle = Math.PI * 2;
    this.ctx.arc(this.note.x, this.note.y, radius, startAngle, endAngle, true);
    this.ctx.fillStyle = "green";
    this.ctx.fill();
  };
}

function Note(x, y) {
  this.x = x;
  this.y = y;
}

var game = new Game();
