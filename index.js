function generateRandomInt(min,max){
    return Math.floor((Math.random() * (max+1 -min)) +min);
}

let firstCard = generateRandomInt(2, 11);
let secondCard = generateRandomInt(2, 11);
let cards = [firstCard, secondCard]

let sum = firstCard + secondCard;

let hasBlackJack = false;
let isAlive = true;

let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl = document.getElementById("cards-el")

function start(){
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
    cardsEl.textContent = "Cards: " + cards
}

function newCard(){
    let card = generateRandomInt(2, 11);
    sum += card;
    cards.push(card)
    renderGame();
}