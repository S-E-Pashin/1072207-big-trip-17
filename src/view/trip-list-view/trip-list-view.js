import AbstractView from '../../framework/view/abstract-view';
import {createTripListTemplate} from './trip-list-view-template';

export default class TripListView extends AbstractView {
  get template() { /* Есть и в родителе но тут он работать не будет. В потомке должен быть свой темплейт, т.к. он уникален! Метод класса. Метод что бы получить шаблон разметки. Все методы кроме конструктора придумываются самостоятельно.*/
    return createTripListTemplate(); /**/
  }
}
