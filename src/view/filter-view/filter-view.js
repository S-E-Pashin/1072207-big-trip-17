import {createFilterTemplate} from './filter-view-template';
import AbstractView from '../../framework/view/abstract-view';
import {savePoints} from "../../main";
// import {filter} from "./filter-condition";
import dayjs from "dayjs";
import {filterType} from "../../const";

const dayToDay = dayjs().format('YYYY-MM-DD');  /*Получение сегодняшней даты*/

export default class FilterView extends AbstractView {
  get template() { /*Метод класса. Метод что бы получить шаблон разметки. Все методы кроме конструктора придумываются самостоятельно.*/
    return createFilterTemplate(); /**/
  }

  setFiltersListeners = (callback) => { /*метод который при вызове добавит слушатель. Вызовется в презентере. */
    this._callback.clickFilter = callback;
    this.element.addEventListener('click', this.#filterClickHandler);
  };

  #filterClickHandler = (evt) => {
    evt.preventDefault();
    const points = savePoints;
    let target = evt.target;
    this._callback.clickFilter(points, target);
    // console.log(this.filteringPoints());
  };

  #getFilteredPointsPast = (points) => {
    const pointsPast = [];
    // console.log(points.length);
    for (let i = 0; i < points.length; i++) {
      const pointsDateTo = dayjs(points[i].date.to.ddmmyy).format('YYYY-MM-DD');

      if (dayjs(pointsDateTo).isBefore(dayjs(dayToDay))) { /*Условие, если дата соответствует заданному условию*/
        pointsPast.push(points[i]); /*Добавить в новый массив данную точку*/
      }
    }
    return pointsPast
  }

  #getFilteredPointsFuture = (points) => {
    const pointsFuture = [];
    for (let i = 0; i < points.length; i++) {
      const pointsDateFrom = dayjs(points[i].date.from.ddmmyy).format('YYYY-MM-DD');

      if (dayjs(pointsDateFrom).isAfter(dayjs(dayToDay))) {
        pointsFuture.push(points[i]); /*Добавить в новый массив данную точку*/
      }
    }
    return pointsFuture
  }

  filterCheckSwitch = () => {
    console.log('проверка переключателей ON 1');
    const points = savePoints;

    const filteredPoints = {
      [filterType.EVERYTHING]: points,  /*Условие показа. все точки*/
      [filterType.PAST]: this.#getFilteredPointsPast(points), /*дата 1 до даты 2 ?*/
      [filterType.FUTURE]: this.#getFilteredPointsFuture(points), /*дата 1 после даты 2?*/
    }

    if (filteredPoints[filterType.PAST].length < 1) {
      const input = document.querySelector(`[id='filter-past']`);
      input.setAttribute('disabled', 'disabled');
    }

    if (filteredPoints[filterType.FUTURE].length < 1) {
      const input = document.querySelector(`[id='filter-future']`);
      input.setAttribute('disabled', 'disabled');
    }
  }
}
