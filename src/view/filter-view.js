import {createElement} from '../render.js';

const createFilterTemplate = () => ( /*Шаблон элемента*/
  `<form class="trip-filters" action="#" method="get">
                <div class="trip-filters__filter">
                  <input
                  id="filter-everything"
                  class="trip-filters__filter-input  visually-hidden"
                  type="radio"
                  name="trip-filter"
                  value="everything">
                  <label
                  class="trip-filters__filter-label"
                  for="filter-everything"
                  >Everything</label>
                </div>

                <div class="trip-filters__filter">
                  <input
                  id="filter-future"
                  class="trip-filters__filter-input  visually-hidden"
                  type="radio" name="trip-filter" value="future">
                  <label
                    class="trip-filters__filter-label"
                    for="filter-future"
                  >Future</label>
                </div>

                <div class="trip-filters__filter">
                  <input
                  id="filter-past"
                  class="trip-filters__filter-input  visually-hidden"
                  type="radio"
                  name="trip-filter"
                  value="past"
                  checked>
                  <label
                  class="trip-filters__filter-label"
                    for="filter-past"
                    >Past</label>
                </div>

                <button class="visually-hidden" type="submit">Accept filter</button>
              </form>`/*todo почему не работают обычные кавычки?*/
);

export default class FilterView {
  getTemplate() { /*Метод класса. Метод что бы получить шаблон разметки. Все методы кроме конструктора придумываются самостоятельно.*/
    return createFilterTemplate(); /**/
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
