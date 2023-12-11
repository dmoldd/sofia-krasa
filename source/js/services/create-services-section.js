import {ITEMS_OF_SERVICES, PACKS_OF_SERVICES} from "./data.js"

const servicesContainer = document.querySelector('.services .container .services__list')
const serviceTemplate = document.querySelector('.template__service-item').content.querySelector('.services__price-item');
const packTemplate = document.querySelector('.template__service-pack').content.querySelector('.services__item--pack');

const createItem = (itemName) => {
  const serviceElement = serviceTemplate.cloneNode(true);
  const description = serviceElement.querySelector('span');
  if (ITEMS_OF_SERVICES[itemName].description !== null) {
    description.textContent = ITEMS_OF_SERVICES[itemName].description;
  } else {
    serviceElement.querySelector('.services__price-title').textContent = ITEMS_OF_SERVICES[itemName].name;
  }
  serviceElement.querySelector('.services__price-count').textContent = `${ITEMS_OF_SERVICES[itemName].price} / ${ITEMS_OF_SERVICES[itemName].unit}`;
  servicesContainer.appendChild(serviceElement);
};

const createItems = () => {
  const itemNames = Object.keys(ITEMS_OF_SERVICES);
  itemNames.forEach((item) => createItem(item));
}

const createPack = (packName) => {
  const packElement = packTemplate.cloneNode(true);
  packElement.querySelector('.services__item-title').textContent = PACKS_OF_SERVICES[packName].name;
  packElement.querySelector('.services__item-price').textContent = PACKS_OF_SERVICES[packName].price;
  
  for (let i = 0; i < PACKS_OF_SERVICES[packName].inner_text.length; i++) {
    const description = packElement.querySelector(`.services__inner-text[data-count="${i}"]`);
    description.textContent = PACKS_OF_SERVICES[packName].inner_text[i];
  }
  servicesContainer.appendChild(packElement);
}

const createPacks = () => {
  const packNames = Object.keys(PACKS_OF_SERVICES);
  packNames.forEach((item) => createPack(item));
}

const createServiceSection = () => {
  createItems();
  createPacks();
}

export {createServiceSection};


