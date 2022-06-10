import {generateNumber} from './generate';
import {generateDescription} from './generate';
import {getRandomInteger} from '../utils/common.js';

const getPicture = () => ({
  src: `http://picsum.photos/248/152?r=${generateNumber()}`,
  description: `Описание изображения ${generateDescription()}`,
});

const numberPictures = {length: getRandomInteger(2, 7)};

export const pictures = () => Array.from(numberPictures, getPicture);
