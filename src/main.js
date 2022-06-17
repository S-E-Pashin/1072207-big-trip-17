// Файл- точка входа для js. Место запуска рендера для элеметов на странице. Включает в себе ипорт/ссылки на файлы-функции, заключает их в переменные и запускает функцию. /*Функция которая будет отрисовывать. todo Обязательно еще раз посмотреть что именно в нее передается и логику ее действий. */
import PresenterHeader from './presenter/presenter-header'; /*Подключение презентера в точке входа */
import PresenterMain from './presenter/presenter-main';
import PointsModel from './model/points-model';

const siteBodyElement = document.querySelector('.page-body');/*Todo У него класс майн а в моем индексе классы отличаются! Глубина не влияет! Помни в индексе нет а в доме есть! */
const siteHeaderElement = siteBodyElement.querySelector('.trip-controls__filters');
const siteMainElement = siteBodyElement.querySelector('.page-main');
export const siteTripEventsContainer = siteMainElement.querySelector('.trip-events');
const pointsModel = new PointsModel();
export const savePoints = pointsModel.points;

const presenterHeader = new PresenterHeader(); /*Создается экземпляр презентера(Каждый раз когда работаем с классом необходимо создавать экземпляр) todo для чего? */
export const presenterMain = new PresenterMain();

presenterHeader.init(siteHeaderElement); /*выполняется функция presenterHeader а именно его метод init(функция в функции с полученным в нее значением siteHeaderElement)*/
presenterMain.init(siteTripEventsContainer, pointsModel); /*В контейнер добавляется перечень точек(Добавляется только в МАЙН т.к. наполнение пока только для МАЙН а именно pointModel)*/
