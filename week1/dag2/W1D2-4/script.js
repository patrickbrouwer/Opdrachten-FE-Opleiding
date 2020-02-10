const age = 9;
const isFemale = true;
const driverStatus = "bob";

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
