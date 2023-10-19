// Dati
const kmPrice = 0.21;

const name = prompt(
  "Benvenuto nella nostra piattaforma, la preghiamo di indicarci il suo nome."
);
console.log(name);

const kmToTravel = parseInt(
  prompt(`${name} iniziamo con la prima domanda, quanti km intendi percorrere?`)
);

// Messaggio da mostrare in caso l'utente non inserisca un numero
if (isNaN(kmToTravel)) {
  console.log("Inserire un numero");
}
console.log(kmToTravel);

const age = parseInt(prompt(`Per favore ${name} indicaci anche la tua età?`));
console.log(age);

// Logica

const standardPrice = kmToTravel * kmPrice;
console.log(standardPrice);

const underPrice = standardPrice - standardPrice * 0.2;
const overPrice = standardPrice - standardPrice * 0.4;

let finalPrice = "";
let price = "Giulio";

if (age < 18) {
  finalPrice = underPrice;
  price = " con sconto del 20%";
} else if (age > 65) {
  finalPrice = overPrice;
  price = " con sconto del 40%";
} else {
  finalPrice = standardPrice;
  price = " con la tariffa standard";
}

console.log(finalPrice + price);

// Output
document.getElementById(
  "finalPrice"
).innerHTML = `Caro ${name} l'offerta che ti proponiamo è di €${
  finalPrice.toFixed(2) + price
}`;
