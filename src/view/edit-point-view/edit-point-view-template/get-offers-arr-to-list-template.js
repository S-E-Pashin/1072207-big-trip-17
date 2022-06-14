export const getListOffersTemplate = (offersArray) => {
  if (offersArray !== null) {
    const offersList = offersArray.map( (offer) => { /*Мне очень не нравится что линтер не дает мне возможности использовать построение согласно тому же МДНу т.к. я считаю что function(offer) {} значительно нагляднее при использовании map и соответствует документации .*/
      const eventOfferTitle = (offer.title !== null) ? offer.title : '';
      const eventOfferPrice = (offer.price !== null) ? offer.price : '';
      const bodyOffersItem = `
      <div class="event__offer-selector">
        <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage" checked="">
        <label class="event__offer-label" for="event-offer-luggage-1">
          <span class="event__offer-title cye-lm-tag">${eventOfferTitle}</span>+€&nbsp;<span class="event__offer-price cye-lm-tag">${eventOfferPrice}</span>
        </label>
      </div>`;
      return bodyOffersItem;
    }).join('\n');
    return offersList;
  }
};
