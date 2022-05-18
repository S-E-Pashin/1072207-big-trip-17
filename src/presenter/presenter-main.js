import {render} from '../render.js';
import SortView from '../view/sort-view.js';
import TripListView from '../view/trip-list-view.js';
import CreateAddNewPointView from '../view/add-new-point-view.js';
import CreateItemPointView from '../view/item-point-view.js';

export default class PresenterMain {
  SortBlock = new SortView();
  TripList = new TripListView();
  AddNewPoint = new CreateAddNewPointView();


  init = (mainContainer, pointsModel) => { /* Метод инициализурующий начало работы приложения. В него получаем контейнер куда нужно отрисовать todo наполнение приложения-сайта?. Он инициализируется и приложение начнет работать. */
    this.mainContainer = mainContainer;
    this.pointsModel = pointsModel;
    this.points = [...this.pointsModel.getPoints()]; /*TODO пересмотреть что за конструкция*/

    render(this.SortBlock, this.mainContainer); /*В рендер передается (Обязательно с new) сначала что отрисовать а потом куда отрисовать это.*/
    render(this.TripList, this.mainContainer);
    render(this.AddNewPoint, this.TripList.getElement()); /*Добавляю элемент в список-трип,лист*/

    for (let i = 0; i < this.points.length; i++) {
      render(new CreateItemPointView(this.points[i]), this.TripList.getElement());
    }
  };
}
