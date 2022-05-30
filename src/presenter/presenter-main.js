import {render} from '../render.js';
import SortView from '../view/sort-view.js';
import TripListView from '../view/trip-list-view.js';
import CreateAddNewPointView from '../view/add-new-point-view.js';
import CreateItemPointView from '../view/item-point-view.js';
import CreateEditPointView from '../view/edit-point-view';

export default class PresenterMain {
  #SortBlock = new SortView();
  #TripList = new TripListView();
  #AddNewPoint = new CreateAddNewPointView();
  #mainContainer = null;
  #pointsModel = null;
  #points = [];

  init = (mainContainer, pointsModel) => { /* Метод инициализурующий начало работы приложения. В него получаем контейнер куда нужно отрисовать todo наполнение приложения-сайта?. Он инициализируется и приложение начнет работать. */
    this.#mainContainer = mainContainer; /*куда передаю*/
    this.#pointsModel = pointsModel;
    this.#points = [...this.#pointsModel.points]; /*TODO ...this это оператор расширения из ES 6, он позволяет вставить массив в другой массив как бы между элементами массива. В данном случае он позволяет создать новый массив "развернув" старый и изменять его без изменений "старого" массива.  */ /*Вызываю метод get(не как функцию так как синтаксис) который возвращает результат вычисляемого приватного свойства которое в свою очередь является созданным массивом*/
    render(this.#SortBlock, this.#mainContainer); /*В рендер передается (Обязательно с new) сначала что отрисовать а потом куда отрисовать это.*/
    render(this.#TripList, this.#mainContainer);
    //todo обратить внимание что на этом этапе в перечень листа можно добавить первым элементом элемент добавления точки путем передачи его в массив листа с 0 номером.
    // render(this.AddNewPoint, this.TripList.getElement()); /*Добавляю элемент в список-трип,лист*/


    for (let i = 0; i < this.#points.length; i++) {
      // render(new CreateEditPointView(this.#points[i]), this.#TripList.element); /*Добавляет элемент открытый для редактирования*/
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




    //Функция добавления слушателя для кнопки стрелка вверх у формы.
    // const getAddEventListenerToPointFormEditClose = () => { /*Слушатель закрытия окна по нажатию на стрелку вверх*/
    //   pointEditComponent.element.querySelector('.event__rollup-btn').addEventListener('click', (evt) => {
    //     evt.preventDefault();
    //     replaceFormToPoint();
    //     document.removeEventListener('keydown', onEscKeyDown);
    //     pointEditComponent.element.querySelector('.event__rollup-btn').removeEventListener('click', getAddEventListenerToPointFormEditSubmit);
    //   });
    // };

    //Функция добавления слушателя для кнопки сохранить.
    // const getAddEventListenerToPointFormEditSubmit = () => {
    //   pointEditComponent.element.querySelector('.event--edit').addEventListener('submit', (evt) => {/*Слушатель закрытия окна на нажатие сохранить/событие submit*/
    //     evt.preventDefault();
    //     replaceFormToPoint();
    //     document.removeEventListener('keydown', onEscKeyDown);
    //     pointEditComponent.element.querySelector('.event__rollup-btn').removeEventListener('click', getAddEventListenerToPointFormEditSubmit);
    //   });
    // };

    //Функция закрытия
    const onEscKeyDown = (evt) => {/*Закроет окно при нажатии ЭСК, отмена дефолта, замена отображения формы на точку.Снятие слушателя.*/
      if (evt.key === 'Escape' || evt.key === 'Esc') {
        evt.preventDefault();
        replaceFormToPoint();
        document.removeEventListener('keydown', onEscKeyDown);
        pointEditComponent.element.querySelector('.event__rollup-btn').removeEventListener('click', getAddEventListenerToPointFormEditSubmit);
        getAddEventListenerToPointEdit();
      }
    };


    const pointFormEditClose = () => { /*Функция закрытия окна по нажатию на стрелку вверх*/
        replaceFormToPoint();
        document.removeEventListener('keydown', onEscKeyDown);
        pointEditComponent.element.querySelector('.event__rollup-btn').removeEventListener('click', pointFormEditClose);
        getAddEventListenerToPointEdit();
      };

    const pointFormEditSubmit = (evt) => {
      evt.preventDefault();
      replaceFormToPoint();
      document.removeEventListener('keydown', onEscKeyDown);
      pointEditComponent.element.querySelector('.event__rollup-btn').removeEventListener('click', pointFormEditClose);
      pointEditComponent.element.querySelector('.event--edit').removeEventListener('submit', pointFormEditSubmit);
      getAddEventListenerToPointEdit();
    };

    //Функция добавления слушателя для кнопки открыть форму/стрелка вниз.
    const getAddEventListenerToPointEdit = () => { /*Ф добавляющая слушатель для кнопки редактирования которая в свою очередь при нажатии изменит отображение с точки на форму для данной точки.*/
      const pointBtn = pointComponent.element.querySelector('.event__rollup-btn');

      const pointFormEditOpen = () => {
        replacePointToForm();
        pointComponent.element.querySelector('.event__rollup-btn').removeEventListener('click', pointFormEditOpen);
        pointEditComponent.element.querySelector('.event__rollup-btn').addEventListener('click', pointFormEditClose);
        pointEditComponent.element.querySelector('.event--edit').addEventListener('submit', pointFormEditSubmit);
        document.addEventListener('keydown', onEscKeyDown);
      }
      pointBtn.addEventListener('click', pointFormEditOpen);
    };
    getAddEventListenerToPointEdit(); /*Запуск функции. TODO обратить внимание что слушатель устанавливается на все точки */
    render(pointComponent, this.#TripList.element);
  };
}


