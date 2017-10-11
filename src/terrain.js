/** @class terrain
  * A terrain for the lander ot land on
  * or collide with
  */
export default class Terrain{
  constructor(width, high){
      var x = 0;
      var y = Math.random() * high/2  + high/2 - 10;
      this.path = [];
      function clampHeight(y){
        do{
          var height = y;
          var probability = Math.random();
          if(probability < 0.30){ //45% chance
            height -= Math.random() * 50;
          }
          else if(probability < 0.60){ //45% chance
            height += Math.random() * 50;
          }
        }while (height < high / 2 || height > high - 10)
        return height;
      }

      while(x < width){
        //Calc a random height


        //update our x

        y = clampHeight(y);

        //push endpoint to array
        this.path.push({x: x, y: y});

        x = x + Math.random() * 50;
      }
  }
  render(ctx){
    ctx.save();
    //TODO: Draw Terrain
    ctx.strokeStyle = "#fff";
    ctx.beginPath();
    ctx.moveTo(this.path[0].x, this.path[0].y);
    for(var i = 1; i < this.path.length; i++){
      ctx.lineTo(this.path[i].x, this.path[i].y);
    }
    ctx.stroke();
    ctx.restore();
  }
}
