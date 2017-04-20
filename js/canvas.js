var graph = {};

graph.canvas = document.getElementById( 'canvas' ),
graph.context = canvas.getContext( '2d' ),
graph.x = 0,
graph.coords = new Array(),
graph.speed = 8;

graph.draw = function(delay) {

  this.canvas.width = this.canvas.width;
  this.context.moveTo(0, this.canvas.height/2);

  this.x+=this.speed;

  if(this.x>this.canvas.width){
    for(var i in this.coords){
      this.coords[i].x=this.coords[i].x-this.speed;
    }
  }

  this.coords.push({
    x : this.x,
    y : Math.floor(Math.random()*this.canvas.height/2)+this.canvas.height/2
  });

  for(var i in this.coords){
    this.context.lineTo(this.coords[i].x, this.coords[i].y);
  }

  this.context.strokeStyle="#a0f4c6";
  this.context.lineWidth = 1;
  this.context.shadowColor = '#58be90';
  this.context.shadowBlur = 10;

  this.context.stroke();
  this.context.closePath();

  setTimeout(function(){
    graph.draw(delay);
  },delay);

}

graph.draw(100);
