import CreateItemPointView from "../view/item-point-view/item-point-view";
import CreateEditPointView from "../view/edit-point-view/edit-point-view";
import {render, replace} from "../framework/render";

export default class PointPresenter {
  #container = null;
  #point = null;
  #pointComponent = null;
  #pointEditComponent = null;

  constructor(container) {
    this.#container = container;
  }

  init = (point) => {
    this.#point = point;
    this.#pointComponent = new CreateItemPointView(point);
    this.#pointEditComponent = new CreateEditPointView(point);
    this.#pointComponent.setEditOpenPointListeners(this.#pointFormEditOpen); /*Метод*/
    render(this.#pointComponent, this.#container);
  }


  #replacePointToForm = () => { /*Функция изменяющая визуал точки на форму*/
    replace(this.#pointEditComponent, this.#pointComponent);/*Что вставляю, вместо чего*/ /*todo посмотреть метод*/
  };

  #replaceFormToPoint = () => {/*Функция изменяющая визуал формы на точку*/
    replace(this.#pointComponent, this.#pointEditComponent); /*Что вставляю, вместо чего*/
  };

  #closeForm = () => { /*вот функция которая должна все общие действия по закрытию формы. */
    this.#pointEditComponent.removeOpenPointFormListeners(); /*Метод*/
    this.#replaceFormToPoint();
    this.#pointComponent.setEditOpenPointListeners(this.#pointFormEditOpen); /*Метод*/
  };

  /*ф откроет окно,удалит слушатель себя же, добавит слушатели действий уже на элементах формы.(Теперь из методов)*/
  #pointFormEditOpen = () =>  {
    this.#pointComponent.removeEditOpenClickHandler(); /*Метод*/
    this.#replacePointToForm();
    this.#pointEditComponent.setOpenPointFormListeners(this.#closeForm); /*Метод*/
  }
}
