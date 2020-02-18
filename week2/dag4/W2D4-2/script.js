/* **Todo list voor deze opdracht:** 

1. Maak een eventlistener vast aan de buttons 
2. Maak een functie die gecalled wordt op het moment dat er op 1 van de buttons wordt geklikt. Check dit met een console.log. 
3. Zorg dat het click event wordt doorgegeven aan deze functie. 
4. Zorg dat je toegang hebt tot de waarde (value) van de button waar op is geklikt in deze functie. Check dit met console.log. De uitkomst die je wilt zien in de console wanneer je klikt is: Leopard / Lion / Elephant / Rhino of Buffalo. 
5. Creeer een nieuw list-item met JavaScript met de bovenstaande waarde (namelijk het dier waar je op hebt geklikt. 
6. Selecteer het parent-element waar je dit nieuwe list-item aan vast wilt maken (de spotted animals list).
7. Maak het nieuwe list-item vast aan het parent-element. */

const buttons = document.getElementsByTagName("button");
const animalSpotted = function(event) {
  const animalSpotted = event.target.innerText;
  const listItem = document.createElement("li");
  listItem.appendChild(document.createTextNode(animalSpotted));
  const list = document.getElementById("spotted-animals-list");
  list.appendChild(listItem);
};

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", animalSpotted);
}

const removeFirstItem = document.getElementById("remove-first-item-button");
const removeFirstAnimal = () => {};
removeFirstItem.addEventListener("click", removeFirstAnimal);

const firstItem = document.getElementById("spotted-animals-list").firstChild;
firstItem.remove();
