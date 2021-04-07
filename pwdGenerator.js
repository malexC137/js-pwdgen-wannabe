var nameUser = prompt("Qual'è il tuo nome?");
var surname = prompt("Qual'è il tuo cognome?");
var favColor = prompt("Qual'è il tuo colore preferito?");
var age = prompt("Qual'è la tua età?");
var pwdGenerated = nameUser + surname + favColor;
var todayDate = new Date().getFullYear();
var birthDate = todayDate - age;

document.getElementById("generatedPassword1").innerHTML = pwdGenerated + "21";
document.getElementById("generatedPassword2").innerHTML = pwdGenerated + todayDate;
document.getElementById("generatedPassword3").innerHTML = pwdGenerated + birthDate;