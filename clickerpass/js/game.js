let game = document.getElementById("game");

let bank = 0;
let clickvalue = 1;
let powerupvalue = 0;

let clickButton = document.getElementById("clicker");
clickButton.addEventListener('click', () => {
    bank += clickvalue;
});

let powerup = document.getElementById("powerup");
powerup.addEventListener('click', () => {
    if (bank >= 10) {
        bank -= 10;
        powerupvalue++;
    }
});

function step() {
    bank += powerupvalue;
    game.textContent = bank;
    window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);