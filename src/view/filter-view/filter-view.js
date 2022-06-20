import {createFilterTemplate} from './filter-view-template';
import AbstractView from '../../framework/view/abstract-view';
import {savePoints} from '../../main';
import {filterType} from '../../const';
import {isTimeOld} from "../../utils/time";

export default class FilterView extends AbstractView {
  get template() { /*Метод класса. Метод что бы получить шаблон разметки. Все методы кроме конструктора придумываются самостоятельно.*/
    return createFilterTemplate(); /**/
  }

  setFiltersListeners = (callback) => { /*метод который при вызове добавит слушатель. Вызовется в презентере. */
    this._callback.clickFilter = callback;
    this.element.addEventListener('change', this.#filterChangeHandler);
  };

  #filterChangeHandler = (evt) => {
    evt.preventDefault();
    const points = savePoints;
    const target = evt.target;
    this._callback.clickFilter(points, target);
  };

  #getFilteredPointsPast = (points) => {
    const pointsPast = points.filter(
      function (element, index) {
        return isTimeOld(points[index].date.from.ddmmyy)
      }
    );
    return pointsPast;
  };

  #getFilteredPointsFuture = (points) => {
    const pointsFuture = points.filter(
      function (element, index) {
        return !isTimeOld(points[index].date.from.ddmmyy)
      }
    );
    return pointsFuture;
  };

  filterCheckSwitch = () => {
    const points = savePoints;

    const filteredPoints = {
      [filterType.EVERYTHING]: points,  /*Условие показа. все точки*/
      [filterType.PAST]: this.#getFilteredPointsPast(points), /*дата 1 до даты 2 ?*/
      [filterType.FUTURE]: this.#getFilteredPointsFuture(points), /*дата 1 после даты 2?*/
    };

    if (filteredPoints[filterType.PAST].length < 1) {
      const input = document.getElementById('filter-past');
      input.setAttribute('disabled', 'disabled');
    }

    if (filteredPoints[filterType.FUTURE].length < 1) {
      const input = document.getElementById('filter-future');
      input.setAttribute('disabled', 'disabled');
    }
  };
}
