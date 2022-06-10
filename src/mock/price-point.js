import {getRandomInteger} from '../utils/utils';

export const getPrise = () => {
  const price = {
    // base: String(getRandomInteger(100, 1000)),
    base: getRandomInteger(100, 1000),
  };
  // price.base = String(price);
  return price;
};
