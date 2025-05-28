import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


const palo = ["♥", "♦", "♠", "♣"];
const number = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function getRandomCard() {
    const palo = palo[Math.floor(Math.random() * palo.length)];
    const number = number[Math.floor(Math.random() * palo.length)];
    return { palo, number };
}

function displayCard(card) {
    document.getElementById("palo-top-left").textContent = card.palo;
    document.getElementById("number").textContent = card.number;
    document.getElementById("palo-bottom-right").textContent = card.palo;
}

document.getElementById("new-card-button").addEventListener("click", () => {
    const card = getRandomCard();
    displayCard(card);
});

// Display an initial card when the page loads
displayCard(getRandomCard());