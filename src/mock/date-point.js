import {humanizePointDueDateDay} from '../utils/point.js'; /*экспорт человеческой даты созданной на основании dayjs*/
// import {humanizePointDueDateMmHh} from '../utils/point.js'; /*экспорт человеческой даты созданной на основании dayjs*/
import {humanizePointDueDateMmHh} from '../utils/point.js';


import {getRandomInteger} from '../utils/common.js';
// const {dueDate} = point;/*Деструктуризация. Деструктурирующее присваивание=разбиение переменных и получение данных ... ЕСЛИ ЧТОТО Разбиваешь ПОСМОТРИ! оч полезно!*/
// const date = (dueDate !== null) ? humanizePointDueDate(dueDate) : ''; Пока не нужно, оставляю если буду после изменять датуimport {getRandomInteger} from '../utils';

export const localPointDate = [
  {
    'date_from': '2022-07-10T22:54:56.845Z',
    'date_to': '2022-07-11T11:22:11.375Z',
  },
  {
    'date_from': '2019-07-10T20:52:56.845Z',
    'date_to': '2019-07-11T11:20:11.375Z',
  },
  {
    'date_from': '2023-07-10T21:51:56.845Z',
    'date_to': '2023-07-11T11:21:15.375Z',
  },
  {
    'date_from': '2019-07-10T22:57:56.845Z',
    'date_to': '2019-07-11T11:22:17.375Z',
  }
];

export const getDates = () => {
  const datesPoint = localPointDate[getRandomInteger(0, localPointDate.length - 1)];
  let humanDate = '';
  if (datesPoint !== null) {
    const dateFrom = datesPoint.date_from;
    const dateTo = datesPoint.date_to;
    const humanDateFromDDMMYY = humanizePointDueDateDay(dateFrom);
    const humanDateFromHHMM = humanizePointDueDateMmHh(dateFrom);
    const humanDateToDDMMYY = humanizePointDueDateDay(dateTo);
    const humanDateToHHMM = humanizePointDueDateMmHh(dateTo);

    humanDate = {
      from: {
        ddmmyy: humanDateFromDDMMYY,
        hhmm: humanDateFromHHMM,
      },
      to: {
        ddmmyy: humanDateToDDMMYY,
        hhmm: humanDateToHHMM,
      },
    };
  }
  return humanDate;
};
