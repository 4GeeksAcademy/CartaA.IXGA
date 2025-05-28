import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";


const palos = ["♥", "♦", "♠", "♣"];
const numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

function getRandomCard() {
    const palo = palos[Math.floor(Math.random() * palos.length)];
    const number= numbers[Math.floor(Math.random() * numbers.length)];
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

displayCard(getRandomCard());

setTimeout(() => {
    const card = getRandomCard();
    displayCard(card);
}
,3000 ); 

