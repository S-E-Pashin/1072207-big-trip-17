import dayjs from "dayjs";
import {render} from '../../framework/render.js';
import {presenterMain} from "../../main";
import {siteTripEventsContainer} from "../../main";
/*Условие
* Возвращает?
* Список точек соответствующих условию
*
* Получает на вход?
* список точек
* нажатое значение/ или результат нажатого ключ/значения
*
*
*
*
*
*
*
*
*
*
*
*
* */
export const filterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PAST: 'past',
}



// const conditionFilter = {
//   EVERYTHING: true,
//   FUTURE: dayjs(points[i].date.from.ddmmyy).format('YYYY-MM-DD'),
//   PAST: '',
// }



export const filter = (points, condition) => {
  const conditionText = (condition.textContent).toUpperCase();
  const dayToDay = dayjs().format('YYYY-MM-DD');
  console.log(points);
  console.log(conditionText);

  for (let i = 0; i < points.length; i++) {
    const pointsDateFrom = dayjs(points[i].date.from.ddmmyy).format('YYYY-MM-DD');
    const pointsDateTo = dayjs(points[i].date.to.ddmmyy).format('YYYY-MM-DD');

    const conditionFilter = {
      EVERYTHING: true,
      PAST: (dayjs(pointsDateTo).isBefore(dayjs(dayToDay))), /*дата 1 до даты 2 ?*/
      FUTURE: dayjs(pointsDateFrom).isAfter(dayjs(dayToDay)), /*дата 1 после даты 2?*/
    }

    if (conditionFilter[conditionText]) {

      // presenterMain.init(siteTripEventsContainer, pointsModel);


      console.log(points[i]);
    }

    // console.log(conditionFilter[conditionText]);



    // console.log(pointsDateFrom);
    // console.log(pointsDateTo);
    // console.log(dayToDay);

    // console.log(dayjs(pointsDateTo).isBefore(dayjs(dayToDay))); /*дата 1 до даты 2 ?*/
    //
    // console.log(dayjs(pointsDateTo).isAfter(dayjs(dayToDay))); /*дата 1 после даты 2?*/

    // this.#renderPointToTripList(this.#points[i]); /*Вызов функции рендера на каждой точке из массива.*/



  }






return dayToDay;

}
// console.log(filter());



























