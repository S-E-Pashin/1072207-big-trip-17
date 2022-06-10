import {createAddNewPointTemplate} from './add-new-point-view-template';
import AbstractView from '../../framework/view/abstract-view';

export default class CreateAddNewPointView extends AbstractView {
  get template() { /*Метод класса. Метод что бы получить шаблон разметки. Все методы кроме конструктора придумываются самостоятельно.*/
    return createAddNewPointTemplate();
  }
}
