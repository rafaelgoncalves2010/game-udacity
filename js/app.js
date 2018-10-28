// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
  //ctx.clearRect(0,0, this.x, this.y);
  // all computers.
   //ctx.clearRect(0,0, this.x, this.y);

      while(this.x < 400){
        
        this.x += 50 * dt; // vc precisa multiplicar a posição pelo DT aqui
        console.log(this.x);    
      }

      this.x = 0;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/* Enemy.prototype.handleInput = function(){

} */
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Joagador = function(){
    this.caracter = 'images/char-boy.png';
    this.x=200;
    this.y=300;
}

Joagador.prototype.update = function(){
  ctx.clearRect(0,0, this.x, this.y);
}

Joagador.prototype.render = function(){
    ctx.drawImage(Resources.get(this.caracter), this.x, this.y);    
}

Joagador.prototype.handleInput = function(n){
    if(n === 'down'){
        this.y += 52;
    }else if(n === 'up'){
        this.y += -52;
    }else if(n === 'left'){
        this.x +=  -52;
    }else{
        this.x += 52;
    }
    this.render();
}

// Now instantiate your objects.
var en1 = new Enemy(0,52);
var en2 = new Enemy(0,122);
var en3 = new Enemy(0,202);


var play1 = new Joagador();
// Place all enemy objects in an array called allEnemies
var allEnemies = [en1,en2,en3];

// Place the player object in a variable called player
var player = play1;


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
    play1.handleInput(allowedKeys[e.keyCode]);
});
