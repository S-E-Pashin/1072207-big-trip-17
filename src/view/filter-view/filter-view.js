import {createFilterTemplate} from './filter-view-template';
import AbstractView from '../../framework/view/abstract-view';

export default class FilterView extends AbstractView {
  get template() { /*Метод класса. Метод что бы получить шаблон разметки. Все методы кроме конструктора придумываются самостоятельно.*/
    return createFilterTemplate(); /**/
  }
}
