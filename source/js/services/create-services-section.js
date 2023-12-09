import {ITEMS_OF_SERVICES, PACKS_OF_SERVICES} from "./data.js"

const servicesTemplate = document.querySelector('.template__services');
const servicesItemsContainer = servicesTemplate.content.querySelector('.services__list');
const serviceTemplate = document.querySelector('.template__service-item').content.querySelector('.services__price-item');
const finalSection = servicesTemplate.cloneNode(true);
const finalList = finalSection.content.querySelector('.services').querySelector('.container').querySelector('.services__list');

// работает
const createItem = (packName) => {
  const serviceElement = serviceTemplate.cloneNode(true);
  serviceElement.querySelector('.services__price-title').textContent = ITEMS_OF_SERVICES[packName].name;
  serviceElement.querySelector('.services__price-count').textContent = `${ITEMS_OF_SERVICES[packName].price} / ${ITEMS_OF_SERVICES[packName].unit}` ;
  finalList.appendChild(serviceElement);
};

// работает
const createItems = () => {
  const itemNames = Object.keys(ITEMS_OF_SERVICES);
  itemNames.forEach((item) => createItem(item));
}


const createServiceSection = () => {
  createItems();
  console.log(finalList);
}

export {createServiceSection};


