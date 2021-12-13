function Hero(image, top, left, size, speed){
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;

  this.getHeroElement = function(){
    return '<img width="'+ this.size + '"' +
      ' height="'+ this.size + '"' +
      ' src="' + this.image +'"' +
      ' style="top: '+this.top+'px; left:'+this.left+'px;position:absolute;" />';
  }

  this.moveRight = function () {
    if (this.left + this.speed < window.innerWidth - this.size) {
      this.left += this.speed;
    } else {
      this.left = window.innerWidth - this.size;
    }
    console.log('ok: ' + this.left);
  }

  this.moveDown = function () {
    if (this.top + this.speed < window.innerHeight - this.size) {
      this.top += this.speed;
    } else {
      this.top = window.innerHeight - this.size;
      this.image = 'images/pikachuRL.png';
    }
    console.log('ok: ' + this.top);
  }

  this.moveLeft = function () {
    if (this.left - this.speed > 0) {
      this.left -= this.speed;
    } else {
      this.left = 0;
    }
    console.log('ok: ' + this.left);
  }

  this.moveTop = function () {
    if (this.top - this.speed > 0) {
      this.top -= this.speed;
    } else {
      this.top = 0;
      this.image = 'images/pikachuLR.png';
    }
    console.log('ok: ' + this.top);
  }
  
  

}

var hero = new Hero('images/pikachuLR.png', 0, 0, 200, 2);

function start(){
  
  if(hero.left < window.innerWidth - hero.size && hero.top == 0){
    hero.moveRight();
  } else {

    if (hero.top < window.innerHeight - hero.size && hero.left == window.innerWidth - hero.size) {
      hero.moveDown();
    } else {
      if (hero.left > 0) {
        hero.moveLeft();
      } else {
        hero.moveTop();
      }
    }
  }
  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 5)
}

start();