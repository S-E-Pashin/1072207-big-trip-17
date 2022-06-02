import {render} from '../render.js';
import SortView from '../view/sort-view.js';
import TripListView from '../view/trip-list-view.js';
import CreateAddNewPointView from '../view/add-new-point-view.js';
import CreateItemPointView from '../view/item-point-view.js';
import CreateEditPointView from '../view/edit-point-view';
import CreateMessageZeroPoint from '../view/zero-point-message-view/zero-point-message-view';

const NUMBER_POINT_TO_SHOW_MESSAGE_ZERO_POINT = 0;

export default class PresenterMain {
  #SortBlock = new SortView();
  #TripList = new TripListView();
  #AddNewPoint = new CreateAddNewPointView();
  #massageZeroPoint = new CreateMessageZeroPoint();
  #mainContainer = null;
  #pointsModel = null;
  #points = [];

  init = (mainContainer, pointsModel) => { /* Метод инициализурующий начало работы приложения. В него получаем контейнер куда нужно отрисовать todo наполнение приложения-сайта?. Он инициализируется и приложение начнет работать. */
    this.#mainContainer = mainContainer; /*куда передаю*/
    this.#pointsModel = pointsModel;
    this.#points = [...this.#pointsModel.points]; /*TODO ...this это оператор расширения из ES 6, он позволяет вставить массив в другой массив как бы между элементами массива. В данном случае он позволяет создать новый массив "развернув" старый и изменять его без изменений "старого" массива.  */ /*Вызываю метод get(не как функцию так как синтаксис) который возвращает результат вычисляемого приватного свойства которое в свою очередь является созданным массивом*/

    if (this.#points.length === NUMBER_POINT_TO_SHOW_MESSAGE_ZERO_POINT) {
      render(this.#massageZeroPoint, this.#mainContainer);/*Добавляю элемент в главный контейнер*/
    } else {
      render(this.#SortBlock, this.#mainContainer); /*В рендер передается (Обязательно с new) сначала что отрисовать а потом куда отрисовать это.*/
      render(this.#TripList, this.#mainContainer);/*Добавляю элемент в главный контейнер*/
    }

    for (let i = 0; i < this.#points.length; i++) {
      this.#renderPointToTripList(this.#points[i]); /*Вызов функции рендера на каждой точке из массива.*/
    }
  };

  #renderPointToTripList = (point) => { /*Функция, создает компонент с разметкой на основании данных и отрисовывает/рендерит его в перечень точек маршрутов, приватная, может быть вызвана только в данном классе.*/
    const pointComponent = new CreateItemPointView(point);
    const pointEditComponent = new CreateEditPointView(point);

    const replacePointToForm = () => { /*Функция изменяющая визуал точки на форму*/
      this.#TripList.element.replaceChild(pointEditComponent.element, pointComponent.element);/*Что вставляю, вместо чего*/
    };

    const replaceFormToPoint = () => {/*Функция изменяющая визуал формы на точку*/
      this.#TripList.element.replaceChild(pointComponent.element, pointEditComponent.element);
    };

    const closeForm = (evt) => { /*вот функция которая должна все общие действия по закрытию формы. */
      evt.preventDefault();
      document.removeEventListener('keydown', closeForm);
      pointEditComponent.element.querySelector('.event__rollup-btn').removeEventListener('click', closeForm);
      pointEditComponent.element.querySelector('.event--edit').removeEventListener('submit', closeForm);
      replaceFormToPoint();
      getListenerToPointEdit();
    };

    const getFormListeners = () => {
      pointEditComponent.element.querySelector('.event__rollup-btn').addEventListener('click', closeForm);
      pointEditComponent.element.querySelector('.event--edit').addEventListener('submit', closeForm);
      document.addEventListener('keydown', closeForm);
    };

    const pointFormEditOpen = () => { /*ф откроет окно,удалит слушатель себя же, добавит слушатели действий уже на элементах формы.*/
      pointComponent.element.querySelector('.event__rollup-btn').removeEventListener('click', pointFormEditOpen);
      replacePointToForm();
      getFormListeners();
    };

    //Функция добавления слушателя для кнопки открыть форму/стрелка вниз.
    function getListenerToPointEdit () { /* todo >FD!!! Ф добавляющая слушатель для кнопки редактирования которая в свою очередь при нажатии изменит отображение с точки на форму для данной точки.*/
      const pointBtn = pointComponent.element.querySelector('.event__rollup-btn');
      pointBtn.addEventListener('click', pointFormEditOpen);
    }

    getListenerToPointEdit(); /*Запуск функции. TODO обратить внимание что слушатель устанавливается на все точки */
    render(pointComponent, this.#TripList.element);
  };
}
