
let square1 = prompt(`Inserisci il tuo nome`);
let suqare2 = prompt(`Inserisci il tuo cognome`);
let square3 = prompt(`Inserisci il tuo colore preferito`);
let square4 = prompt(`Il tuo giorno di nascita`);

let total = square1 + suqare2 + square3 + square4;

let myScript = `La tua password è: ${total}`;
document.getElementById(`ondesk`).innerHTML = myScript;