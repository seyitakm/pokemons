const API = "https://pokeapi.co/api/v2/pokemon/";

let div = document.querySelector("#card");
let modal = document.createElement("div");
modal.classList.add("modal");

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
            card.addEventListener("click", (data) => {
              modalWindow(data);
              document.body.append(modal);
            });
          });
      });
    });
}
cardFunction();
// async function modalWindow(data) {
//   await fetch(`${API}`)
//     .then((res) => res.json())
//     .then((data) => {
//       data.results.forEach((e) => {
//         fetch(e.url)
//           .then((res) => res.json())
//           .then((data) => {
//             let card1 = document.createElement("div");
//             card1.classList.add("card");
//             card1.innerHTML = data.name;
//             let cardImg1 = document.createElement("div");
//             cardImg1.innerHTML = `<img src=${data.sprites.front_default}>`;
//             modal.append(card1);
//             card1.append(cardImg1);
//             document.body.append(modal);
//           });
//       });
//     });
// }
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
    
    </tr><br />
    <tr>
    <td>Growth: ${data.height}</td>
    </tr><br />
    <tr>
    <td><img src=${data.sprites.front_default}></td>
    </tr>
    `;
}
