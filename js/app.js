// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = Math.floor(Math.random() * x);
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
        this.x += 50 * dt; // vc precisa multiplicar a posição pelo DT aqui
        this.colisao(this.x,this.y,player.x,player.y);
    }else{
        this.x = 0;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

//configurar valores
var config = {
    "player": {
        "initial_X": 200,
         "initial_Y": 300
    }
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Jogador = function(x,y){
    this.caracter = 'images/char-boy.png';
    this.x=x;
    this.y=y;
}

Jogador.prototype.update = function(){
    ctx.clearRect(0,0, this.x, this.y);
}

Jogador.prototype.resetPlayer = function(){
    play1.x = config.player.initial_X;
    play1.y = config.player.initial_Y;
}

Jogador.prototype.render = function(){
    ctx.drawImage(Resources.get(this.caracter), this.x, this.y);    
}

Jogador.prototype.handleInput = function(n){
    switch (n) {
        case "down":
            if (this.y === 320) return;
            this.y += 80;
            console.log(this.y);
            break;
        case "up":
            if (this.y === -20){
                player.resetPlayer();
            }else{
                this.y += -80;
            }
            break;
        case "left":
            if (this.x === 0) return;
            this.x += -100;
            break;
        case "right":
            if (this.x === 400) return;
            this.x += 100;
            break;
        }
}

Enemy.prototype.colisao = function(xE,yE,xP,yP){
    let tamanhoInimigo = 50;
        if((xE + tamanhoInimigo) >= xP && (xE - tamanhoInimigo) <= xP) {
            if((yE + tamanhoInimigo) >= yP && (yE - tamanhoInimigo) <= yP) {
                player.resetPlayer();
            }
        }
}

// Now instantiate your objects.
var en1 = new Enemy(480,60);
var en2 = new Enemy(480,140);
var en3 = new Enemy(480,220);
var play1 = new Jogador(config.player.initial_X, config.player.initial_Y);

// Place all enemy objects in an array called allEnemies
var allEnemies = [];
var randomNumber;

function addEnemies(arr, ene){
    randomNumber = Math.floor((Math.random() * 2000) + 1000);
    setTimeout(function(){
        arr.push(ene);
        },randomNumber);
}

addEnemies(allEnemies, en1);
addEnemies(allEnemies, en2);
addEnemies(allEnemies, en3);

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
