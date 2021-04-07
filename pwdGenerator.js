var nameUser = prompt("Qual'è il tuo nome?");
var surname = prompt("Qual'è il tuo cognome?");
var favColor = prompt("Qual'è il tuo colore preferito?")
var pwdGenerated = nameUser + surname + favColor;
var todayDate = new Date().getFullYear();

console.log(pwdGenerated + todayDate);