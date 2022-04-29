import {createElement} from '../render.js';

const createNewTaskButtonTemplate = () => '<button class="control__button">+ADD NEW TASK</button>'; /*Функция-хранит в себе шаблон элемента.Кнопка добавления новой задачи, ее слепок*/

export default class NewTaskButtonView { /*Это класс с постфиксом вью. это Представление которое отвечает за создание новой кнопки на доске. */
  getTemplate() { /*Метод класса. Метод что бы получить шаблон разметки. Все методы кроме конструктора придумываются самостоятельно.*/
    return createNewTaskButtonTemplate(); /**/
    // return '<button class="control__button">+ADD NEW TASK</button>'; /*Можно обойтись и без функции но тогда может пострадать красота кода и его лаконичность.*/

  }

  getElement() { /*Метод класса. Метод позволяет на основе шаблона создать создать DOM элемент. Импортирует что то из render.js*/
    if (!this.element) { /*Вольная интерпретация сингл-тон или по другому условие при котором не будут делаться дубли. Не совсем понятно. todo Как это работает? */
      this.element = createElement(this.getTemplate()); /*Функция создающая по шаблону элемент. Вызываю функцию, передаю в нее шаблонную строчку с html а она возвращает DOM элемент todo возвращает или создает на странице? Необходимо проверить.. Находится в render.js*/
    }

    return this.element;
  }

  removeElement() { /*Метод класса. Позволяет удалить этот элемент. Созданный ? TODO ?*/
    this.element = null; /**/
  }
}


//###################################################################################
import {createElement} from '../render.js';

const createFilterTemplate = () => ( /*Шаблон элемента*/
  `<form className="trip-filters" action="#" method="get">
    <div className="trip-filters__filter">
      <input
        id="filter-everything"
        className="trip-filters__filter-input visually-hidden"
        type="radio"
        name="trip-filter"
        value="everything">
        <label className="trip-filters__filter-label"
               htmlFor="filter-everything">Everything</label>
    </div>

    <div className="trip-filters__filter">
      <input
        id="filter-future"
        className="trip-filters__filter-input visually-hidden"
        type="radio"
        name="trip-filter"
        value="future">
        <label
          className="trip-filters__filter-label"
          htmlFor="filter-future"
        >Future</label>
    </div>

    <div className="trip-filters__filter">
      <input
        id="filter-past"
        className="trip-filters__filter-input  visually-hidden"
        type="radio"
        name="trip-filter"
        value="past"
        checked>
        <label
          className="trip-filters__filter-label"
          htmlFor="filter-past"
        >Past</label>
    </div>
    <button
      className="visually-hidden"
      type="submit"
    >Accept filter</button>
  </form>
  ` /*todo почему не работают обычные кавычки?*/
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

























