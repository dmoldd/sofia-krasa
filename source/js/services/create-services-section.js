import {ITEMS_OF_SERVICES, PACKS_OF_SERVICES} from "./data.js"


const servicesContainer = document.querySelector('.services .container')
const serviceTemplate = document.querySelector('.template__service-item').content.querySelector('.services__price-item');
const packTemplate = document.querySelector('.template__service-pack').content.querySelector('.services__item--pack');
const finalSection = document.querySelector('.template__services').cloneNode(true);
const finalList = finalSection.content.querySelector('.services').querySelector('.container').querySelector('.services__list');

// работает
const createItem = (itemName) => {
  const serviceElement = serviceTemplate.cloneNode(true);
  const description = serviceElement.querySelector('span');
  if (ITEMS_OF_SERVICES[itemName].description !== null) {
    description.textContent = ITEMS_OF_SERVICES[itemName].description;
  } else {
    serviceElement.querySelector('.services__price-title').textContent = ITEMS_OF_SERVICES[itemName].name;
  }
  serviceElement.querySelector('.services__price-count').textContent = `${ITEMS_OF_SERVICES[itemName].price} / ${ITEMS_OF_SERVICES[itemName].unit}`;
  finalList.appendChild(serviceElement);
};

// работает
const createItems = () => {
  const itemNames = Object.keys(ITEMS_OF_SERVICES);
  itemNames.forEach((item) => createItem(item));
  servicesContainer.appendChild(finalList);
}

const createPack = (packName) => {
  const packElement = packTemplate.cloneNode(true);
  packElement.querySelector('.services__item-title').textContent = PACKS_OF_SERVICES[packName].name;

  for (let i = 0; i < PACKS_OF_SERVICES[packName].inner_text.length; i++) {
    console.log(i);
  }

  console.log(packElement.innerHTML)
}

const createPacks = () => {
  const packNames = Object.keys(PACKS_OF_SERVICES);
  // packNames.forEach((item) => createPack(item));
  createPack(packNames[0]);
}

const createServiceSection = () => {
  createItems();
  createPacks();
}

export {createServiceSection};


