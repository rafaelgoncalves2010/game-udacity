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

function resetPlayer(){
    play1.x = 200;
    play1.y = 300;
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
                resetPlayer();
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

function createEfect(){
    var div = document.createElement('div');
    div.style.color = 'black';
    div.style.height = '100vh';
    div.style.width = '100%';
    return div;
}

Enemy.prototype.colisao = function(xE,yE,xP,yP){
    let tamanhoInimigo = 50;
 var t = document.querySelector('body');
    if((xE + tamanhoInimigo) >= xP && (xE - tamanhoInimigo) <= xP) {
        if((yE + tamanhoInimigo) >= yP && (yE - tamanhoInimigo) <= yP) {
            resetPlayer();
            var d = createEfect();
            t.appendChild(d);
        }
    }
}

// Now instantiate your objects.
var en1 = new Enemy(Math.floor(Math.random() * 480),60);
var en2 = new Enemy(Math.floor(Math.random() * 480),140);
var en3 = new Enemy(Math.floor(Math.random() * 480),220);
var play1 = new Jogador(200,300);


// Place all enemy objects in an array called allEnemies
var allEnemies = [en1];

setTimeout(function(){
allEnemies.push(en2);
},3000);

setTimeout(function(){
allEnemies.push(en3);
},1000);

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
