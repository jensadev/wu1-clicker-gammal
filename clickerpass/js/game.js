let game = document.getElementById("game");

let bank = 0;
let clickvalue = 1;
let powerupvalue = 0;
let gurka = 10;

let clickButton = document.getElementById("clicker");
clickButton.addEventListener('click', () => {
    bank += clickvalue;
});

let powerup = document.getElementById("powerup");
powerup.addEventListener('click', () => {
    if (bank >= gurka) {
        bank -= gurka;
        powerupvalue++;
        gurka = gurka * 10;
    }
});

function step() {
    bank += powerupvalue;
    game.textContent = bank;
    window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);