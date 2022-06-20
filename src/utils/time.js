/*Передаваемая в Date 1 равна одной миллисекунде. Иными словами мы говорим
* Покажи мне какое было время через 1у миллисекунду после 1 января 1970 года*/
/*let Jan02_1970 = new Date(24 * 60 * 60 * 1000); /!*Это через одни сутки ч/м/сек/мСек*!/*/

const nowDate = new Date();
const numberDayToDay = +nowDate;

export const isTimeOld = (searchDay) => {
  const dateFormat = new Date(`${searchDay}`);
  const dateNumber = dateFormat.getTime();
  return numberDayToDay > dateNumber;
};
