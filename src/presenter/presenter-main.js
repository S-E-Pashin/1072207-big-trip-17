import {render, replace} from '../framework/render.js'; /*todo Добавляет из фреймворка. remove пока не нужен*/
import SortView from '../view/sort-view/sort-view.js';
import TripListView from '../view/trip-list-view/trip-list-view.js';
import CreateAddNewPointView from '../view/add-new-point-view/add-new-point-view.js';
import CreateMessageZeroPoint from '../view/zero-point-message-view/zero-point-message-view';
import PointPresenter from "./presenter-point";

const NUMBER_POINT_TO_SHOW_MESSAGE_ZERO_POINT = 0; /*Todo Можно ли перенести в константы?*/

export default class PresenterMain {
  #SortBlock = new SortView();
  #TripList = new TripListView();
  #AddNewPoint = new CreateAddNewPointView();
  #massageZeroPoint = new CreateMessageZeroPoint();
  #mainContainer = null;
  #pointsModel = null;
  #points = [];
  #pointPresenter = new PointPresenter(this.#TripList.element);


  init = (mainContainer, pointsModel) => { /* Метод инициализурующий начало работы приложения. В него получаем контейнер куда нужно отрисовать todo наполнение приложения-сайта?. Он инициализируется и приложение начнет работать. */
    this.#mainContainer = mainContainer; /*куда передаю*/
    this.#pointsModel = pointsModel;
    this.#points = [...this.#pointsModel.points]; /*TODO ...this это оператор расширения из ES 6, он позволяет вставить массив в другой массив как бы между элементами массива. В данном случае он позволяет создать новый массив "развернув" старый и изменять его без изменений "старого" массива.  */ /*Вызываю метод get(не как функцию так как синтаксис) который возвращает результат вычисляемого приватного свойства которое в свою очередь является созданным массивом*/
    this.#renderPointsArea();
  };

  #renderMessageZeroPoint = () => {
    render(this.#massageZeroPoint, this.#mainContainer);/*Добавляю элемент в главный контейнер*/
  }

  #renderSortBlock = () => {
    render(this.#SortBlock, this.#mainContainer); /*В рендер передается (Обязательно с new) сначала что отрисовать а потом куда отрисовать это.*/
  }

  #renderTripList = (points) => {
    render(this.#TripList, this.#mainContainer);/*Добавляю элемент в главный контейнер*/
    this.#renderPoints(points);
  }

  #renderPoints = (points) => {
    for (let i = 0; i < this.#points.length; i++) {
      const presenterPoint = new PointPresenter(this.#TripList.element);
      presenterPoint.init(this.#points[i])
      // this.#pointPresenter.init(this.#points[i]);
    }
  }

  #renderPointsArea = () => {
    if (this.#points.length === NUMBER_POINT_TO_SHOW_MESSAGE_ZERO_POINT) {
      this.#renderMessageZeroPoint();
    } else {
      this.#renderSortBlock();
      this.#renderTripList(this.#points);
    }
  }
}
