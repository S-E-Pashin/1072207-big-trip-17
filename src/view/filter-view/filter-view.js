import {createFilterTemplate} from './filter-view-template';
import AbstractView from '../../framework/view/abstract-view';
// import pointsModel from "../../main";
import {savePoints} from "../../main";
// const list = null;
// console.log(list);

import {filter} from "./filter-condition";


export default class FilterView extends AbstractView {
  get template() { /*Метод класса. Метод что бы получить шаблон разметки. Все методы кроме конструктора придумываются самостоятельно.*/
    return createFilterTemplate(); /**/
  }

  setFiltersListeners = (callback) => { /*метод который при вызове добавит слушатель. Вызовется в презентере. */
    this._callback.clickFilter = callback;

    // this.element.querySelector('.event--edit').addEventListener('submit', this.#pointFormClickHandler);

    // this.element.querySelector('.trip-filters__filter').addEventListener('click', this.#filterClickHandler);
    this.element.addEventListener('click', this.#filterClickHandler);

    // document.addEventListener('keydown', this.#pointFormClickHandler);
  };

  #filterClickHandler = (evt) => {
    evt.preventDefault();
    const points = savePoints;
    let target = evt.target;
    // target.checked ='checked';
    // let targetText = (target.textContent).toUpperCase();
    // const input = document.querySelector(`[id='${target.getAttribute('for')}']`)/*Получает значение инпута используя связь между инпутом и лэйблом посредством for id*/
    // input.checked = true; /*Устанавливает для элемента значение выбора*/
    // console.log(input);
    filter(points, target)
    // console.log(target.getAttribute('for'));
    // console.log(filter(points,targetText));


    // if (target.TagName = 'Everything') {
    //   this._callback.clickFilter();
    // }
  };

  // removeOpenPointFormListeners = () => {
  //   this.element.querySelector('.event__rollup-btn').removeEventListener('click', this._callback.editCloseClick);
  //   this.element.querySelector('.event--edit').removeEventListener('submit', this._callback.editCloseClick);
  //   document.removeEventListener('keydown', this._callback.editCloseClick);
  // };
}
