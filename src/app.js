import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


const suits = ["♥", "♦", "♠", "♣"];
const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function getRandomCard() {
    const suit = suits[Math.floor(Math.random() * suits.length)];
    const rank = ranks[Math.floor(Math.random() * ranks.length)];
    return { suit, rank };
}

function displayCard(card) {
    document.getElementById("suit-top-left").textContent = card.suit;
    document.getElementById("rank").textContent = card.rank;
    document.getElementById("suit-bottom-right").textContent = card.suit;
}

document.getElementById("new-card-button").addEventListener("click", () => {
    const card = getRandomCard();
    displayCard(card);
});

// Display an initial card when the page loads
displayCard(getRandomCard());