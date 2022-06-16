import FilterView from '../view/filter-view/filter-view.js';
import {render} from '../framework/render';
import {filter} from "../view/filter-view/filter-condition";

export default class PresenterHeader {
  #filterBlock = new FilterView();
  #headerContainer; /*Инициализирую/создаю приватное свойство. Это обязательное условие для его использования.*/

  init = (headerContainer) => { /* Метод инициализурующий начало работы приложения. В него получаем контейнер куда нужно отрисовать todo наполнение приложения-сайта?. Он инициализируется и приложение начнет работать. */
    this.#headerContainer = headerContainer;

    // const message = () => console.log("asdf");
    // const message = function() {console.log(this)};
    render(this.#filterBlock, this.#headerContainer); /*В рендер передается (Обязательно с new) сначала что отрисовать а потом куда отрисовать это.*/
    this.#filterBlock.filterCheckSwitch();
    this.#filterBlock.setFiltersListeners(filter);




    // this.#filterBlock.filterCheckSwitch();
    // console.log(this.#filterBlock.filterCheckSwitch());

  };

  // filter = (#filterBlock) => {
  //   #filterBlock.filterCheckSwitch()
  // }
}
