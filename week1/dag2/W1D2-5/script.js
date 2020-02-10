const age = 25;
const isFemale = true;
const driverStatus = "bob";
const name = "Bram";
const totalAmount = 26;

// Leeftijd controle
if (age >= 18) {
  console.log("Je mag naar binnen!");
} else {
  console.log("Je bent te jong! Ga maar naar de zandbak!");
}

// Controle geslacht
if (isFemale) {
  console.log("Je bent welkom op de ladysnight...");
} else {
  console.log(
    "Je hebt aangegeven een man te zijn, helaas mag je vanavond niet naar binnen."
  );
}

//Controle of het een "bob" is
if (driverStatus == "bob") {
  console.log("Jij bent vandaag de bob, drive safe!");
} else {
  console.log("Jij bent geen bob, bel je even een taxi??");
}

// Controle korting 18 t/m 25 jaar
if (age >= 18 && age <= 25) {
  console.log("Je krijgt 50% korting!");
} else {
  console.log("Je krijgt helaas geen korting!");
}

// controle gratis biertje voor Bram en Sarah
if (name == "Bram" || name == "Sarah") {
  console.log("Jij heet Sarah of Bram, dus het eerste biertje is gratis!");
} else {
  console.log("Geen gratis bier voor jou...");
}

// controle Jubileum korting
if (totalAmount >= 101) {
  console.log("Jij krijgt een gratis flesje champagne!");
} else if (totalAmount >= 51) {
  console.log("Jij krijgt een gratis portie nachos!");
} else if (totalAmount >= 26) {
  console.log("Jij krijgt gratis (vega)bitterballen");
} else {
  console.log("Helaas geen korting, maar je mag altijd bijbestellen ;)");
}
