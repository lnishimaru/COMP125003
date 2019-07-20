// Create the canvas
var canvas = document.createElement("canvas");
canvas.style.cursor = "crosshair";
var ctx = canvas.getContext("2d");
var fps = 10;
var timer = 0;
var caught = false;
canvas.width = 800;
canvas.height = 540;
document.body.appendChild(canvas);

// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
    bgReady = true;
};
bgImage.src = "images/landscape.jpg";

// Monster image
var monsterReady = false;
var monsterImage = new Image();
monsterImage.onload = function () {
    monsterReady = true;
};
monsterImage.src = "images/bugT.png";

// Game objects
var hero = {
    speed: 256 // movement in pixels per second
};
var monster = {};
var monstersCaught = 0;

// Handle keyboard controls
var keysDown = {};

addEventListener("mousedown", SmashFunction, false);

function SmashFunction(e) {
    hero.x = e.clientX;
    hero.y = e.clientY;
    if (
        hero.x <= (monster.x + 80)
        && monster.x <= (hero.x + 80)
        && hero.y <= (monster.y + 80)
        && monster.y <= (hero.y + 80)
    ) {
        caught = true;
        ++monstersCaught;
        //increases the speed when the bug is hit
        clearInterval(timer);
        fps = fps + 5;
        timer = setInterval(reset, 20000 / fps);
        reset();
    }
    if (ResetScore(hero.x, hero.y)) {
        monstersCaught = 0;
        reset();
        render();

    }
    if (ResetSpeed(hero.x, hero.y)) {
        clearInterval(timer);
        timer = setInterval(reset, 20000 / fps);
        reset();
        render();
    }
}

// Reset the game when the player catches a monster
var reset = function () {
    hero.x = canvas.width / 2;
    hero.y = canvas.height / 2;

    // Throw the monster somewhere on the screen randomly
    monster.x = 40 + (Math.random() * (canvas.width - 70));
    do {
        monster.y = 40 + (Math.random() * (canvas.height - 70));
    }
    while (monster.y < 100)

};
//Reset Score box
function ResetScore(x, y) {

    if (x > (505)
        && x < (650)
        && y > (70)
        && y < (95)
    ) {
        return true;
    }
    return false;
};

//Reset speed box
function ResetSpeed(x, y) {
    if (x > (655)
        && x < (800)
        && y > (70)
        && y < (95)
    ) {
        fps = 10;
        return true;
    }
    return false;
};
// Draw everything
var render = function () {
    if (bgReady) {
        ctx.drawImage(bgImage, 0, 100);
    }
    if (monsterReady) {
        ctx.drawImage(monsterImage, monster.x, monster.y);
    }
    if (caught == true) {
        if (bgReady) {
            ctx.drawImage(bgImage, 0, 100);
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
        }
        caught = false;
    }
    // Score, Title
    ctx.fillStyle = "rgb(14, 102, 95)";
    ctx.fillRect(0, 0, 800, 100)
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.font = "34px Sofia";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    ctx.fillText("Catch the Bug", 295, 10);
    ctx.font = "20px Arial";
    ctx.fillText("Bugs caught: " + monstersCaught, 10, 70);

    // Reset Score Button
    ctx.strokeStyle = "rgb(255, 255, 255)";
    ctx.rect(505, 70, 140, 25);
    ctx.stroke();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.font = "20px Arial";
    ctx.fillText("Reset Score", 515, 71);

    // Reset Speed Button
    ctx.rect(655, 70, 140, 25);
    ctx.stroke();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.font = "20px Arial";
    ctx.fillText("Reset Speed", 665, 71);
};

// The main game loop
var main = function () {
    render();
    // Request to do this again ASAP
    requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
reset();
main();
