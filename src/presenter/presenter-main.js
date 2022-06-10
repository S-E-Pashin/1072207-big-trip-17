import {render} from '../framework/render';
import SortView from '../view/sort-view/sort-view.js';
import TripListView from '../view/trip-list-view/trip-list-view.js';
import CreateAddNewPointView from '../view/add-new-point-view/add-new-point-view.js';
import CreateItemPointView from '../view/item-point-view/item-point-view.js';
import CreateEditPointView from '../view/edit-point-view/edit-point-view';
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
    // const pointComponent = new CreateItemPointView(point);
    const pointComponent = new CreateItemPointView(point);
    const pointEditComponent = new CreateEditPointView(point);

    const replacePointToForm = () => { /*Функция изменяющая визуал точки на форму*/
      this.#TripList.element.replaceChild(pointEditComponent.element, pointComponent.element);/*Что вставляю, вместо чего*/
    };

    const replaceFormToPoint = () => {/*Функция изменяющая визуал формы на точку*/
      this.#TripList.element.replaceChild(pointComponent.element, pointEditComponent.element);
    };

    const closeForm = (evt) => { /*вот функция которая должна все общие действия по закрытию формы. */
      // evt.preventDefault(); /*Во вью*/
      pointEditComponent.removeOpenPointFormListeners();
      // document.removeEventListener('keydown', closeForm);
      // pointEditComponent.element.querySelector('.event__rollup-btn').removeEventListener('click', closeForm);
      // pointEditComponent.element.querySelector('.event--edit').removeEventListener('submit', closeForm);
      replaceFormToPoint();
      // getListenerToPointEdit(); /*TODO Тут потом добавить метод по добавлению слушателей а в остальных потом переработать на удаление слушателей через метод*/
    };


    /*_______Перенесено во вью */
    // const getOpenPointFormListeners = () => {
    //   pointEditComponent.element.querySelector('.event__rollup-btn').addEventListener('click', closeForm);
    //   pointEditComponent.element.querySelector('.event--edit').addEventListener('submit', closeForm);
    //   document.addEventListener('keydown', closeForm);
    // };
    /*_______*/


    /*ф откроет окно,удалит слушатель себя же, добавит слушатели действий уже на элементах формы.*/
    const pointFormEditOpen = () => {
      pointComponent.removeEditOpenClickHandler();
      // pointComponent.element.querySelector('.event__rollup-btn').removeEventListener('click', pointFormEditOpen);
      // console.log('Сработал слушатель');
      replacePointToForm();
      // getOpenPointFormListeners();
      pointEditComponent.setOpenPointFormListeners(closeForm);
    };

    //Функция добавления слушателя для кнопки открыть форму/стрелка вниз.
    // function getListenerToPointEdit () { /* todo >FD!!! Ф добавляющая слушатель для кнопки редактирования которая в свою очередь при нажатии изменит отображение с точки на форму для данной точки.*/
    //   const pointBtn = pointComponent.element.querySelector('.event__rollup-btn');
    //
    //
    //   pointBtn.addEventListener('click', pointFormEditOpen);
    // }


    // getListenerToPointEdit(); /*Запуск функции. TODO обратить внимание что слушатель устанавливается на все точки */
    render(pointComponent, this.#TripList.element);
    // console.log();
    pointComponent.setEditOpenPointListeners(pointFormEditOpen);

    // pointComponent.setEditOpenPointListeners(() => {
    //   replacePointToForm();
    //   getFormListeners();
    // });
  };
}
















//
//
//
// import {render} from '../framework/render.js';
// import BoardView from '../view/board-view.js';
// import SortView from '../view/sort-view.js';
// import TaskListView from '../view/task-list-view.js';
// import TaskView from '../view/task-view.js';
// import TaskEditView from '../view/task-edit-view.js';
// import LoadMoreButtonView from '../view/load-more-button-view.js';
// import NoTaskView from '../view/no-task-view.js';
//
// const TASK_COUNT_PER_STEP = 8;
//
// export default class BoardPresenter {
//   #boardContainer = null;
//   #tasksModel = null;
//
//   #boardComponent = new BoardView();
//   #taskListComponent = new TaskListView();
//   #loadMoreButtonComponent = new LoadMoreButtonView();
//
//   #boardTasks = [];
//   #renderedTaskCount = TASK_COUNT_PER_STEP;
//
//   constructor(boardContainer, tasksModel) {
//     this.#boardContainer = boardContainer;
//     this.#tasksModel = tasksModel;
//   }
//
//   init = () => {
//     this.#boardTasks = [...this.#tasksModel.tasks];
//
//     this.#renderBoard();
//   };
//
//   #handleLoadMoreButtonClick = () => {
//     this.#boardTasks
//       .slice(this.#renderedTaskCount, this.#renderedTaskCount + TASK_COUNT_PER_STEP)
//       .forEach((task) => this.#renderTask(task));
//
//     this.#renderedTaskCount += TASK_COUNT_PER_STEP;
//
//     if (this.#renderedTaskCount >= this.#boardTasks.length) {
//       this.#loadMoreButtonComponent.element.remove();
//       this.#loadMoreButtonComponent.removeElement();
//     }
//   };
//
//   #renderTask = (task) => {
//     const taskComponent = new TaskView(task);
//     const taskEditComponent = new TaskEditView(task);
//
//     const replaceCardToForm = () => {
//       this.#taskListComponent.element.replaceChild(taskEditComponent.element, taskComponent.element);
//     };
//
//     const replaceFormToCard = () => {
//       this.#taskListComponent.element.replaceChild(taskComponent.element, taskEditComponent.element);
//     };
//
//     const onEscKeyDown = (evt) => {
//       if (evt.key === 'Escape' || evt.key === 'Esc') {
//         evt.preventDefault();
//         replaceFormToCard();
//         document.removeEventListener('keydown', onEscKeyDown);
//       }
//     };
//
//     taskComponent.setEditOpenPointListeners(() => {
//       replaceCardToForm();
//       document.addEventListener('keydown', onEscKeyDown);
//     });
//
//     taskEditComponent.setFormSubmitHandler(() => {
//       replaceFormToCard();
//       document.removeEventListener('keydown', onEscKeyDown);
//     });
//
//     render(taskComponent, this.#taskListComponent.element);
//   };
//
//   #renderBoard = () => {
//     render(this.#boardComponent, this.#boardContainer);
//
//     if (this.#boardTasks.every((task) => task.isArchive)) {
//       render(new NoTaskView(), this.#boardComponent.element);
//       return;
//     }
//
//     render(new SortView(), this.#boardComponent.element);
//     render(this.#taskListComponent, this.#boardComponent.element);
//
//     for (let i = 0; i < Math.min(this.#boardTasks.length, TASK_COUNT_PER_STEP); i++) {
//       this.#renderTask(this.#boardTasks[i]);
//     }
//
//     if (this.#boardTasks.length > TASK_COUNT_PER_STEP) {
//       render(this.#loadMoreButtonComponent, this.#boardComponent.element);
//
//       this.#loadMoreButtonComponent.setClickHandler(this.#handleLoadMoreButtonClick);
//     }
//   };
