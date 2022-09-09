const API = "https://pokeapi.co/api/v2/pokemon/";

let div = document.querySelector("#card");
// let modal = document.createElement("div");
// modal.classList.add("modal");

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
            card.innerHTML = data.name;
            let cardImg = document.createElement("div");
            cardImg.innerHTML = `<img src=${data.sprites.front_default}>`;
            div.append(card);
            card.append(cardImg);

            card.addEventListener("click", () => {
              fetch(e.url)
                .then((res) => res.json())
                .then((data) => {
                  let modal = document.createElement("div");
                  modal.classList.add("modal");
                  modal.innerHTML = modalWindow(data);
                  document.body.append(modal);
                });
            });
          });
      });
    });
}
cardFunction();

function modalWindow(data) {
  return `
    <tr>
    <td>Name: ${data.name}</td> 
    </tr><br />
    <tr>
    <td>Weight: ${data.weight}</td>
    </tr><br />
    <tr>
    <tr>
    <td>Element🔥: ${data.types[0].type.name}</td>
    </tr><br />
    <tr>
    <td>Growth: ${data.height}</td>
    </tr><br />
    <tr>
    <td><img src=${data.sprites.front_default}></td>
    </tr>
    `;
}
