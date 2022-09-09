const API = "https://pokeapi.co/api/v2/pokemon/";

let div = document.querySelector("#card");

async function cardFunction() {
  await fetch(`${API}`)
    .then((res) => res.json())
    .then((data) => {
      data.results.forEach((e) => {
        fetch(e.url)
          .then((res) => res.json())
          .then((data) => {
            let card = document.createElement("div");
            card.classList.add("card");
            let cardImg = document.createElement("div");
            card.innerHTML = data.name;
            cardImg.innerHTML = `<img src=${data.sprites.front_default}>`;
            div.append(card);
            div.append(cardImg);
          });
      });
    });
}
cardFunction();
