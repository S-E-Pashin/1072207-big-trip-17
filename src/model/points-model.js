// модуль генерирующий данные для 1 точки.Сделать функцией которая вернет объект с данными для одной точки
import {getDestination} from '../mock/generate';

const numPointToModel = {length: 5}; /*todo обратить внимание как используется Array.from с длинной массива/коллекции, пока не понятно как именно работает.*/

export default class PointsModel {
  points = Array.from(numPointToModel, getDestination);
  getPoints = () => this.points;
}

