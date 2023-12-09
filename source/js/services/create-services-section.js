import {ITEMS_OF_SERVICES, PACKS_OF_SERVICES} from "./data.js"

const serviceTemplate = document.querySelector('.template__service-item').content.querySelector('.services__price-item');

const servicePackTemplate = document.querySelector('.template__service-pack').content.querySelector('.services__item--pack');



console.log(serviceTemplate);

const createServiceItem = () => {
  const serviceElement = serviceTemplate.cloneNode(true);
  serviceElement.querySelector('.services__price-title').textContent = ITEMS_OF_SERVICES.good2.name;
  serviceElement.querySelector('.services__price-count').textContent = `${ITEMS_OF_SERVICES.good2.price} / ${ITEMS_OF_SERVICES.good2.unit}` ;
};

const createServicePack = () => {
  const servicePack = servicePackTemplate.cloneNode(true);
  const servicePackInnerFirst = servicePack.querySelector('.services__item-inner');
  const servicePackInnerSecond = servicePack.querySelector('.services__item-inner2');
  servicePackInnerFirst.querySelector('.services__item-title').textContent = PACKS_OF_SERVICES.pack2.name;
}

export {createServiceItem, createServicePack};


