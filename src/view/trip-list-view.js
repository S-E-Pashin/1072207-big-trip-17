import {createElement} from '../render.js';

const createTripListTemplate = () => ('<ul class="trip-events__list"></ul>');

export default class TripListView {
  getTemplate() { /*Метод класса. Метод что бы получить шаблон разметки. Все методы кроме конструктора придумываются самостоятельно.*/
    return createTripListTemplate(); /**/
  }

  getElement() { /*Метод класса. Метод позволяет на основе шаблона создать DOM элемент. Импортирует что то из render.js*/
    if (!this.element) { /*Вольная интерпретация сингл-тон или по другому условие при котором не будут делаться дубли. Не совсем понятно. todo Как это работает? */
      this.element = createElement(this.getTemplate()); /*Функция создающая по шаблону элемент. Вызываю функцию, передаю в нее шаблонную строчку с html а она возвращает DOM элемент todo возвращает или создает на странице? Необходимо проверить.. Находится в render.js*/
    }
    return this.element;
  }

  removeElement() { /*Метод класса. Позволяет удалить этот элемент. Созданный ? TODO ?*/
    this.element = null; /**/
  }
}
