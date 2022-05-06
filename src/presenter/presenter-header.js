import FilterView from '../view/filter-view.js';
import {render} from '../render.js';

export default class PresenterHeader {
  filterBlock = new FilterView();


  init = (headerContainer) => { /* Метод инициализурующий начало работы приложения. В него получаем контейнер куда нужно отрисовать todo наполнение приложения-сайта?. Он инициализируется и приложение начнет работать. */
    this.headerContainer = headerContainer;
    render(this.filterBlock, this.headerContainer); /*В рендер передается (Обязательно с new) сначала что отрисовать а потом куда отрисовать это.*/
  //   // render(new boardComponent, this.boardContainer); /*Рисует доску Вариант когда не использовались бы пропертис из бейбла. Тут отличие что не используется this */
  //   render(new SortView(), this.boardComponent.getElement()); /*Рисует сортировку */
  //   render(this.taskListComponent, this.boardComponent.getElement()); /*Рисует лист задач/т.н. таск лист. */
  //   render(new TaskEditView(), this.taskListComponent.getElement()); /* Рисует форму ридактирования */
  //
  //   for (let i = 0; i < 3; i++) { /*Цикл для отрисовки нескольких карточек */
  //     render(new TaskView(), this.taskListComponent.getElement()); /* */
  //   }
  //
  //   render(new LoadMoreButtonView(), this.boardComponent.getElement()); /*Рисует кнопку */
  };
}