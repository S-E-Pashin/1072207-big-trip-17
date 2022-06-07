import {createZeroPointMessageTemplate} from './zero-point-message-view-template';
import AbstractView from "../../framework/view/abstract-view";

export default class CreateMessageZeroPoint extends AbstractView {
  get template() { /*Метод класса. Метод что бы получить шаблон разметки. Все методы кроме конструктора придумываются самостоятельно.*/
    return createZeroPointMessageTemplate(); /**/
  }
}
