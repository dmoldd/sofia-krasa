import {ADVANTAGES_ITEMS} from "./data.js";

const seeMoreButtons = document.querySelectorAll('.advantages__see-more');
const modal = document.querySelector('.advantages-modal');
const modalCloseButton = document.querySelector('.advantages-modal__close-button');
const modalTitle = document.querySelector('.advantages-modal__title');
const modalDescription = document.querySelector('.advantages-modal__text');
const modalImg = document.querySelector('.advantages-modal__image');

const showModal = (dataId) => {
  const itemName = `item${dataId}`;
  const imgUrlCount = parseInt(dataId) + 1;

  document.body.style.overflow = 'hidden';
  modal.classList.remove('visually-hidden');
  modalTitle.textContent = ADVANTAGES_ITEMS[itemName].title;
  modalDescription.textContent = ADVANTAGES_ITEMS[itemName].description;
  modalImg.src = `./img/slider/${imgUrlCount}.jpg`;
  
  if (dataId === '1') {
    modalDescription.style.fontSize = '14px';
  } else {
    modalDescription.style.fontSize = '15px';
  }
}

const hideModal = () => {
  modal.classList.add('visually-hidden');
  document.body.style.overflow = '';
}

const onModalCloseButtonClick = () => {
  hideModal();
}

const onSeeMoreButtonClick = (evt) => {
  evt.preventDefault();
  showModal(evt.target.getAttribute('data-id'));
  modalCloseButton.addEventListener('click', onModalCloseButtonClick);
}

const renderModal = () => {
  for (let i = 0; i < seeMoreButtons.length; i ++) {
    let button = seeMoreButtons[i];
    button.addEventListener('click', onSeeMoreButtonClick);
    button.dataset.id = i;
  }
}

export {renderModal};