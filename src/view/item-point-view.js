import {createElement} from '../render.js';

const getListOffers = (offersArray) => {
  if (offersArray !== null) {
    const offersList = offersArray.map((offer) => {
      const eventOfferTitle = (offer.title !== null) ? offer.title : '';
      const eventOfferPrice = (offer.price !== null) ? offer.price : '';
      const bodyOffersItem = `
        <li class="event__offer">
          <span class="event__offer-title cye-lm-tag">${eventOfferTitle}</span>+€&nbsp;
          <span class="event__offer-price cye-lm-tag">${eventOfferPrice}</span>
        </li>`;

      return bodyOffersItem;
    }).join('\n');
    return offersList;
  }
};

const createItemPointTemplate = (point) => {
  const {name, offers, pictureDescription, picturesSrc, price, date} = point;
  const listOffers = getListOffers(offers);

  return (
    `<li class="trip-events__item">
              <div class="event">
                <time class="event__date" datetime="2019-03-18"></time>
                <div class="event__type">
                  <img class="event__type-icon" width="42" height="42" src="${picturesSrc}" alt="${pictureDescription}">
                </div>
                <h3 class="event__title">${name}</h3>
                <div class="event__schedule">
                  <p class="event__time cye-lm-tag">
                    <time class="event__start-time" datetime="2019-03-18T10:30">${date.from.hhmm}</time>
                    —
                    <time class="event__end-time" datetime="2019-03-18T11:00">${date.to.hhmm}</time>
                  </p>
                </div>
                <p class="event__price cye-lm-tag">
                  €&nbsp;<span class="event__price-value cye-lm-tag">${price.base}</span>
                </p>
                <h4 class="visually-hidden">Offers:</h4>
                <ul class="event__selected-offers">
                  <li class="event__offer">
                    <span class="event__offer-title cye-lm-tag">Order Uber</span>
                    +€&nbsp;
                    <span class="event__offer-price cye-lm-tag">20</span>
                  </li>${listOffers}
                </ul>
                <button class="event__favorite-btn event__favorite-btn--active" type="button">
                  <span class="visually-hidden cye-lm-tag">Add to favorite</span>
                  <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">
                    <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"></path>
                  </svg>
                </button>
                <button class="event__rollup-btn" type="button">
                  <span class="visually-hidden cye-lm-tag">Open event</span>
                </button>
              </div>            </li>`  );
};

export default class CreateItemPointView {
  #point = null;
  #element = null;

  constructor(point) {
    this.#point = point;
  }

  get template() {
    return createItemPointTemplate(this.#point); /*? Это то что было нужно=передача ссылки объекта точки, todo понять как это работает! Долго искал как передается, сделал по аналогии, пока не понятно.*/
  }

  get element() { /*Метод класса. Метод позволяет на основе шаблона создать DOM элемент. Импортирует что то из render.js*/
    if (!this.#element) { /*Вольная интерпретация сингл-тон или по другому условие при котором не будут делаться дубли. Не совсем понятно. todo Как это работает? */
      this.#element = createElement(this.template); /*Функция создающая по шаблону элемент. Вызываю функцию, передаю в нее шаблонную строчку с html а она возвращает DOM элемент todo возвращает или создает на странице? Необходимо проверить.. Находится в render.js*/
    }
    return this.#element;
  }

  removeElement() { /*Метод класса. Позволяет удалить этот элемент. Созданный ? TODO ?*/
    this.#element = null;
  }
}
