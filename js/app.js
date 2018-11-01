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
    // which will ensure the game runs at the same speed for all computers.
    if(this.x < 400){
        this.x += 1; // vc precisa multiplicar a posição pelo DT aqui
        colisao(this.x,this.y,player.x,player.y);
    }else{
        this.x = 0;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Joagador = function(x,y){
    this.caracter = 'images/char-boy.png';
    this.x=x;
    this.y=y;
}

Joagador.prototype.update = function(){
  ctx.clearRect(0,0, this.x, this.y);
}

Joagador.prototype.render = function(){
    ctx.drawImage(Resources.get(this.caracter), this.x, this.y);    
}

Joagador.prototype.handleInput = function(n){
    if(n === 'down'){
        this.y += 80;
    }else if(n === 'up'){
        this.y += -80;
    }else if(n === 'left'){
        this.x +=  -100;
    }else{
        this.x += 100;
    }
    this.render();
}

function colisao(xE,yE,xP,yP){
    console.log("xe "+xE,"ye "+yE,"xp "+xP,"yp "+yP);
    var maximo = xP+50;
    var minimo = xP-50;
    console.log(minimo,maximo);
    if(yP === 220 || yP === 140 || yP === 60 ){

        if(xE > minimo && xE < maximo ){
          alert("bateu!");
          delete player;
         superInit();
        }
    }
}

// Now instantiate your objects.
//var en1 = new Enemy(0,60);
var en2 = new Enemy(0,140);
//var en3 = new Enemy(0,220);
var play1 = new Joagador(200,300);

function superInit(){
    var play1 = new Joagador(200,300);
}
// Place all enemy objects in an array called allEnemies
var allEnemies = [];

setTimeout(function(){
 allEnemies.push(en2);
},3000);

//setTimeout(function(){
  //  allEnemies.push(en3);
  // },1000);

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
});
