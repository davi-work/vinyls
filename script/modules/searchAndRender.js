// import { vinyls } from '../arrays.js'

// export const cycle = () => {
//  const cardsContainer = document.querySelector('.releases-cards');

//   vinyls.forEach(item => {
//     const cardDiv = document.createElement('div');
//     cardDiv.classList.add('releases-cards-item');
//     cardDiv.innerHTML = `
//       <span class="releases-cards-absolute price">${item.price}$</span>
//       <div class="releases-cards-absolute btns">
//         <button><img src="./img/like.svg" alt=""></button>
//         <button><img src="./img/cart.svg" alt=""></button>
//       </div>
//       <img src="${item.img}" alt="">
//       <h3 class="releases-cards-item-title">${item.title}</h3>
//     `;

//     cardsContainer.appendChild(cardDiv);
//   });
// };


// export default cycle;

import { vinyls } from '../arrays.js';

const searchInput = document.querySelector('input');
const cardsContainer = document.querySelector('.releases-cards');

function renderCards(vinylsToRender) {
  cardsContainer.innerHTML = '';
  vinylsToRender.forEach(item => {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('releases-cards-item');
    cardDiv.innerHTML = `
      <span class="releases-cards-absolute price">${item.price}$</span>
      <div class="releases-cards-absolute btns">
        <button><img src="./img/like.svg" alt=""></button>
        <button><img src="./img/cart.svg" alt=""></button>
      </div>
      <img src="${item.img}" alt="">
      <h3 class="releases-cards-item-title">${item.title}</h3>
    `;

    cardsContainer.appendChild(cardDiv);
  });
}

function filterCards() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredVinyls = vinyls.filter(vinyl =>
    vinyl.title.toLowerCase().includes(searchTerm)
  );
  renderCards(filteredVinyls);
}

searchInput.addEventListener('input', filterCards);

renderCards(vinyls); // Отображение всех карточек при загрузке страницы



export default filterCards;
