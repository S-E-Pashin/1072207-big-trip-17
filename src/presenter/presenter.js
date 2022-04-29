// import BoardView from '../view/board-view.js'; /*импорт превьюх*/
// import SortView from '../view/sort-view.js'; /*импорт превьюх*/
// import TaskListView from '../view/task-list-view.js'; /*импорт превьюх*/
// import TaskView from '../view/task-view.js'; /*импорт превьюх*/
// import TaskEditView from '../view/task-edit-view.js'; /*импорт превьюх*/
// import LoadMoreButtonView from '../view/load-more-button-view.js'; /*импорт превьюх*/
// import {render} from '../render.js';

export default class BoardPresenter {
  boardComponent = new BoardView(); /*Использует бейбл из за повторения*/
  taskListComponent = new TaskListView();  /*Использует бейбл из за повторения todo класс пропертис? для повторяющихся свойств */

  init = (boardContainer) => { /* Метод инициализурующий начало работы приложения. В него получаем контейнер куда нужно отрисовать todo наполнение приложения-сайта?. Он инициализируется и приложение начнет работать. */
    this.boardContainer = boardContainer;
    // const boardComponent = new BoardView();  /*Равнозначно тому что выше. Вариант когда не использовались бы пропертис из бейбла */

    render(this.boardComponent, this.boardContainer); /*Рисует доску */
    // render(new boardComponent, this.boardContainer); /*Рисует доску Вариант когда не использовались бы пропертис из бейбла. Тут отличие что не используется this */
    render(new SortView(), this.boardComponent.getElement()); /*Рисует сортировку */
    render(this.taskListComponent, this.boardComponent.getElement()); /*Рисует лист задач/т.н. таск лист. */
    render(new TaskEditView(), this.taskListComponent.getElement()); /* Рисует форму ридактирования */

    for (let i = 0; i < 3; i++) { /*Цикл для отрисовки нескольких карточек */
      render(new TaskView(), this.taskListComponent.getElement()); /* */
    }

    render(new LoadMoreButtonView(), this.boardComponent.getElement()); /*Рисует кнопку */
  };
}
