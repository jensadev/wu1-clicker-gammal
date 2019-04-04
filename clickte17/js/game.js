/* välj element */
let gameButton = document.getElementById("game");
let bankElement = document.getElementById("bank");
let powerUpsDiv = document.getElementById("powerups");
/* variabel för att spara bank */
let bank = 0;
let pupCost = 10;
/* lyssna på knappen efter click event */
gameButton.addEventListener('click', function() {
    bank += 1;
    gameButton.textContent = Math.floor(bank);
});
/* skapa ett powerup-element */
let powerUp = document.createElement("button");
powerUp.textContent = "The power of Greyskull! " + pupCost;
powerUp.addEventListener('click', function() {
    if (bank >= pupCost) {
        bank = bank - pupCost;
        pupCost = pupCost * 2;
        bank = bank * 10;
        gameButton.textContent = bank;
        powerUp.textContent = "The power of Greyskull! " + pupCost;
        bankElement.textContent = "Du köpte powerup!";
    } else
        bankElement.textContent = "Du har inte råd med powerup!";
});
powerUpsDiv.appendChild(powerUp);

/* skapa ett powerup-element */
let powerUrp = document.createElement("button");
powerUrp.textContent = "PowerURP! " + pupCost;
powerUrp.addEventListener('click', function() {
    if (bank >= pupCost) {
        bank = bank - pupCost;
        pupCost = pupCost * 2;
        bank = bank * 10;
        gameButton.textContent = bank;
        powerUrp.textContent = "PowerURP! " + pupCost;
        bankElement.textContent = "Du köpte powerurp!";
    } else
        bankElement.textContent = "Du har inte råd med powerurp!";
});
powerUpsDiv.appendChild(powerUrp);