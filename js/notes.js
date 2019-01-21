//notes constructor
function Note(x, y, name, color, sound) {
  this.x = x;
  this.y = y;
  this.name = name;
  this.color = color;
  this.sound = sound;
  this.radius = 30;
}

Note.prototype.draw = function(ctx){
  ctx.beginPath();
  ctx.font = '48px Amatic SC';
  var noteTextX; //para que se centre el texto encima de la nota
  if(this.name === "Sol"){
    noteTextX = this.x - 27
  }
  else {
    noteTextX = this.x-20;
  }
  ctx.fillText(this.name, noteTextX, this.y -35);
 
  var startAngle = 0;
  var endAngle = Math.PI * 2;
  ctx.arc(
    this.x,
    this.y,
    this.radius,
    startAngle,
    endAngle,
    true
  );
  ctx.fillStyle = this.color;
  ctx.fill();
}

Note.prototype.moveDown = function(){
  this.y++;
}

Note.prototype.getBottom = function(){
  return this.y + this.radius
}

Note.prototype.makeSound = function(){
    this.sound.play();
};