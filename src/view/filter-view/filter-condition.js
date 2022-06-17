import dayjs from 'dayjs';
import {presenterMain} from '../../main';
import {siteTripEventsContainer} from '../../main';
import {filterType} from '../../const';

/*Функция получает исходный массив точек и значение нажатой кнопки.*/
export const filter = (points, target) => {
  const dayToDay = dayjs().format('YYYY-MM-DD');  /*Получение сегодняшней даты*/
  const newPointsToVision = {};  /*Создание объекта для использования как pointModel*/
  newPointsToVision.points = []; /*Создание массива для использования как пойнт модела*/

  const label = document.querySelector(`[for = '${target.getAttribute('id')}']`);
  const labelText = (label.textContent).toLowerCase(); /*Получение значения нажатого элемента, преобразование в верхний регистр.*/

  const input = target;
  input.checked = true; /*Устанавливает для элемента значение выбора*/

  for (let i = 0; i < points.length; i++) {  /*Цикл перебора точек для осуществления фильтрации по параметрам.*/
    const pointsDateFrom = dayjs(points[i].date.from.ddmmyy).format('YYYY-MM-DD'); /*Приведение даты к возможной для сравнения согласно док dayjs*/
    const pointsDateTo = dayjs(points[i].date.to.ddmmyy).format('YYYY-MM-DD'); /*-//-*/

    const conditionFilter = {  /*Объект для использования в роли исполнительного фильтра*/
      //Меняя значения в файле констант и в самом теле разметки на аналогичные конструкция продолжит работу и не потребуется использовать данный участок отдельно углубляясь
      [filterType.EVERYTHING]: true,  /*Условие показа.*/
      [filterType.PAST]: (dayjs(pointsDateTo).isBefore(dayjs(dayToDay))), /*дата 1 до даты 2 ?*/
      [filterType.FUTURE]: dayjs(pointsDateFrom).isAfter(dayjs(dayToDay)), /*дата 1 после даты 2?*/
    };

    if (conditionFilter[labelText]) { /*Условие, если дата соответствует заданному условию*/
      newPointsToVision.points.push(points[i]); /*Добавить в новый массив данную точку*/
    }
  }

  if (newPointsToVision.points.length > 0) { /*Если массив не пустой*/
    const list = siteTripEventsContainer.querySelector('.trip-events__list'); /*Находит список в отрисовываемом элементе*/

    while (list.firstChild) { /*Удаляет из списка в отрисованном элементе на каждой итерации первый элемент а так как итераций столько же сколько и элементов будут удалены все дочерние элементы так как на каждой итерации номер 2 занимает 1е место*/
      list.removeChild(list.firstChild);
    }

    presenterMain.init(siteTripEventsContainer, newPointsToVision); /*Отрисовывает согласно условиям в контейнер обновленный список точек.*/
  }
};
