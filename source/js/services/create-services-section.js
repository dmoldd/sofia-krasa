import {ITEMS_OF_SERVICES, PACKS_OF_SERVICES} from "./data.js"

const servicesContainer = document.createElement('div');
const serviceTemplate = document.querySelector('.template__service-item').content.querySelector('.services__price-item');
const servicePackTemplate = document.querySelector('.template__service-pack').content.querySelector('.services__item--pack');
const servicePack = servicePackTemplate.cloneNode(true);

// работает
const createItem = (packName) => {
  const serviceElement = serviceTemplate.cloneNode(true);
  serviceElement.querySelector('.services__price-title').textContent = ITEMS_OF_SERVICES[packName].name;
  serviceElement.querySelector('.services__price-count').textContent = `${ITEMS_OF_SERVICES[packName].price} / ${ITEMS_OF_SERVICES[packName].unit}` ;
  servicesContainer.appendChild(serviceElement);
};

// работает
const createItems = () => {
  const itemNames = Object.keys(ITEMS_OF_SERVICES);
  itemNames.forEach((item) => createItem(item));
  console.log(servicesContainer);
}

const createPackDescriptions = (packName) => {

}

const createPack = () => {

}

const createServiceSection = () => {
  createItems();
}

export {createServiceSection};


