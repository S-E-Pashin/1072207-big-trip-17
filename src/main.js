// Файл- точка входа для js. Место запуска рендера для элеметов на странице. Включает в себе ипорт/ссылки на файлы-функции, заключает их в переменные и запускает функцию. /*Функция которая будет отрисовывать. todo Обязательно еще раз посмотреть что именно в нее передается и логику ее действий. */
import PresenterHeader from './presenter/presenter-header'; /*Подключение презентера в точке входа */
import PresenterMain from './presenter/presenter-main';


const siteBodyElement = document.querySelector('.page-body');/*Todo У него класс майн а в моем индексе классы отличаются! Глубина не влияет! Помни в индексе нет а в доме есть! */
const siteHeaderElement = siteBodyElement.querySelector('.trip-controls__filters');
const siteMainElement = siteBodyElement.querySelector('.page-main');
const siteTripEventsContainer = siteMainElement.querySelector('.trip-events');

const presenterHeader = new PresenterHeader(); /*Создается экземпляр презентера(Каждый раз когда работаем с классом необходимо создавать экземпляр) todo для чего? */
const presenterMain = new PresenterMain();

presenterHeader.init(siteHeaderElement); /*выполняется функция boardPresenter который тут как коллбэк а именно его метод init(функция в функции с полученным в нее значением siteMainElement)  todo Если я правильно понял*/
presenterMain.init(siteTripEventsContainer);
