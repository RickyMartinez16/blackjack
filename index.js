function generateRandomInt(min,max){
    return Math.floor((Math.random() * (max+1 -min)) +min);
}

let cards = [];

let sum = 0;

let hasBlackJack = false;
let isAlive = false;

let message = "";

let player = {
    name: "Ricky",
    chips: 150
}


let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips;

function start(){
    isAlive = true;
    hasBlackJack = false;
    let firstCard = generateRandomInt(2, 11);
    let secondCard = generateRandomInt(2, 11);
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame(){
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }

    messageEl.textContent = message;
    sumEl.textContent = "Sum: " + sum;
    cardsEl.textContent = "Cards: " + cards;
}

function newCard(){
    if(isAlive && hasBlackJack === false){
        let card = generateRandomInt(2, 11);
        sum += card;
        cards.push(card);
        renderGame();
    }
}