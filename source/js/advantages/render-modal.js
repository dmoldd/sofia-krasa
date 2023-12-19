import {ADVANTAGES_ITEMS} from "./data.js";

const seeMoreButtons = document.querySelectorAll('.advantages__see-more');
const modal = document.querySelector('.advantages-modal');
const modalCloseButton = document.querySelector('.advantages-modal__close-button');
const backgroundPage = document.querySelector('.page');

const showModal = () => {
  modal.classList.remove('visually-hidden');
}

const hideModal = () => {
  modal.classList.add('visually-hidden');
}

const onModalCloseButtonClick = () => {
  hideModal();
}

const onSeeMoreButtonClick = (evt) => {
  evt.preventDefault();
  showModal();
  modalCloseButton.addEventListener('click', onModalCloseButtonClick);
}

const renderModal = () => {
  for (let i = 0; i < seeMoreButtons.length; i ++) {
    let button = seeMoreButtons[i];
    button.addEventListener('click', onSeeMoreButtonClick)
  }
}


export {renderModal};