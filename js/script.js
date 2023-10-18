// Dati
const kmPrice = 0.21;

const name = prompt(
  "Benvenuto nella nostra piattaforma, la preghiamo di indicarci il suo nome."
);
console.log(name);

const kmToTravel = prompt(
  `${name} iniziamo con la prima domanda, quanti km intendi percorrere?`
);
console.log(kmToTravel);

const age = prompt(`Per favore ${name} indicaci anche la tua età?`);
console.log(age);

// Logica

const standardPrice = kmToTravel * kmPrice;
console.log(standardPrice);

const underPrice = standardPrice - (standardPrice * 0, 2);
const overPrice = standardPrice - (standardPrice * 0, 4);

let finalPrice = "";

if (age < 18) {
  finalPrice = underPrice;
} else if (age > 65) {
  finalPrice = overPrice;
} else {
  finalPrice = standardPrice;
}

console.log(finalPrice);
