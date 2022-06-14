import {getRandomInteger} from '../utils/common.js';

export const getPrise = () => {
  const price = {
    // base: String(getRandomInteger(100, 1000)),
    base: getRandomInteger(100, 1000),
  };
  // price.base = String(price);
  return price;
};
