// import {createElement} from '../../render.js';
import AbstractView from "../../framework/view/abstract-view";
import {getListOffersTemplate} from './edit-point-view-template/get-offers-arr-to-list-template';
import {getListPicturesTemplate} from './edit-point-view-template/get-pictures-arr-to-list-template';


const createEditPointTemplate = (point) => {
  const {name, offers, price, date, pictures, description} = point;
  const listOffers = getListOffersTemplate(offers);
  const listPictures = getListPicturesTemplate(pictures);
  //todo Когда появится время. можно позже добавить условие/логику при которой по цепочке будет формироваться контент в зависимости от наличия наполнения. Заголовки появляться и пропадать.
  return (
    `<li class="trip-events__item">
              <form class="event event--edit" action="#" method="post">
                <header class="event__header">
                  <div class="event__type-wrapper">
                    <label class="event__type  event__type-btn" for="event-type-toggle-1">
                      <span class="visually-hidden cye-lm-tag">Choose event type</span>
                      <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">
                    </label>
                    <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">

                    <div class="event__type-list">
                      <fieldset class="event__type-group">
                        <legend class="visually-hidden">Event type</legend>

                        <div class="event__type-item">
                          <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">
                          <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">
                          <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">
                          <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">
                          <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">
                          <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked="">
                          <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">
                          <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">
                          <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>
                        </div>

                        <div class="event__type-item">
                          <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">
                          <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>
                        </div>
                      </fieldset>
                    </div>
                  </div>

                  <div class="event__field-group  event__field-group--destination">
                    <label class="event__label  event__type-output" for="event-destination-1">
                      Flight
                    </label>
                    <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${name}" list="destination-list-1">
                    <datalist id="destination-list-1">
                      <option value="Amsterdam"></option>
                      <option value="Geneva"></option>
                      <option value="Chamonix">;</option>
                    </datalist>
                  </div>

                  <div class="event__field-group  event__field-group--time">
                    <label class="visually-hidden" for="event-start-time-1">From</label>
                    <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${date.from.ddmmyy} ${date.from.hhmm}">
                    —
                    <label class="visually-hidden" for="event-end-time-1">To</label>
                    <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${date.to.ddmmyy} ${date.to.hhmm}">
                  </div>

                  <div class="event__field-group  event__field-group--price">
                    <label class="event__label" for="event-price-1">
                      <span class="visually-hidden cye-lm-tag">Price</span>
                      €
                    </label>
                    <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${price.base}">
                  </div>

                  <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>
                  <button class="event__reset-btn" type="reset">Delete</button>
                  <button class="event__rollup-btn" type="button">
                    <span class="visually-hidden cye-lm-tag">Open event</span>
                  </button>
                </header>
                <section class="event__details">
                  <section class="event__section  event__section--offers">
                    <h3 class="event__section-title  event__section-title--offers">Offers</h3>

                    <div class="event__available-offers">
                      ${listOffers}
                    </div>
                  </section>

                  <section class="event__section  event__section--destination">
                    <h3 class="event__section-title  event__section-title--destination">Destination</h3>
                    <p class="event__destination-description cye-lm-tag">${description}</p>
                    <div class="event__photos-container">
                      <div class="event__photos-tape">
                        ${listPictures}
                      </div>
                    </div>
                  </section>
                </section>
              </form>
            </li>` );
};

export default class CreateEditPointView extends AbstractView {
  #point = null;
  constructor(point) { /*TODO !!! когда вызывается класс через new SomeClass то ему могут быть переданы данные, которые экземпляр класса получит в конструкторе, который сконструирует экземпляр класса и положит его в некую переменную, поэтому этот метод и называется конструктор.*/
    super();
    this.#point = point;
  }

  get template() { /*Метод класса. Метод что бы получить шаблон разметки. Все методы кроме конструктора придумываются самостоятельно.*/
    return createEditPointTemplate(this.#point); /**/
  }

  /*Метод добавления слушателей на закрытие/сворачивание редактируемой/открытой точки/формы*/
  setOpenPointFormListeners = (callback) => { /*метод который при вызове добавит слушатель. Вызовется в презентере. */
    this._callback.editCloseClick = callback;

    this.element.querySelector('.event__rollup-btn').addEventListener('click', this.#pointFormClickHandler);
    this.element.querySelector('.event--edit').addEventListener('submit', this.#pointFormClickHandler);
    document.addEventListener('keydown', this.#pointFormClickHandler);
  }

  #pointFormClickHandler = (evt) => {
    evt.preventDefault();
    this._callback.editCloseClick();
  };

  removeOpenPointFormListeners = () => {
    this.element.querySelector('.event__rollup-btn').removeEventListener('click', this._callback.editCloseClick);
    this.element.querySelector('.event--edit').removeEventListener('submit', this._callback.editCloseClick);
    document.removeEventListener('keydown', this._callback.editCloseClick);
  }
}
