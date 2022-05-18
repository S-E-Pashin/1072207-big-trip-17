import {getRandomInteger} from '../utils.js';
import {OFFERS} from './offers';

export const generateDescription = () => {
  const descriptions = [
    'Первое описание',
    'Второе описание',
    'Третье описание, более длинное',
    'Четвертое описание, еще более длинное',
  ];

  const randomIndex = getRandomInteger(0, descriptions.length - 1);

  return descriptions[randomIndex];
};

export const generateName = () => {
  const name = [
    'Первое ИМЯ города',
    'Второе ИМЯ города',
    'Третье ИМЯ города',
    'Четвертое ИМЯ города',
  ];

  const randomIndex = getRandomInteger(0, name.length - 1);

  return name[randomIndex];
};

export const generateType = () => {
  const type = ['taxi', 'bus', 'train', 'ship', 'drive', 'flight', 'check-in', 'sightseeing', 'restaurant'];

  const randomIndex = getRandomInteger(0, type.length - 1);
  // console.log(randomIndex);
  return type[randomIndex];
};

export const generateNumber = () => {
  const randomNum = getRandomInteger(0, 100);

  return randomNum;
};

export const getDestination  = () => ({
  type: generateType(),
  description :`Описание точки назначения ${generateDescription()}`,
  name :`Имя точки назначения ${generateName()}`,
  picturesSrc :`http://picsum.photos/248/152?r=${generateNumber()}`,
  pictureDescription :`Описание изображения ${generateDescription()}`,
  offers: OFFERS.slice(0, getRandomInteger(0, OFFERS.length - 1)),
});

