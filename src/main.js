// Файл- точка входа для js

import NewTaskButtonView from './view/filter-view'; /**/
import {render} from './render.js'; /*Функция которая будет отрисовывать. todo Обязательно еще раз посмотреть что именно в нее передается и логику ее действий. */
import BoardPresenter from './presenter/presenter'; /*Подключение презентера в точке входа */

const siteMainElement = document.querySelector('.page-main');/*Todo У него класс майн а в моем индексе классы отличаются! Глубина не влияет! Помни в индексе нет а в доме есть! */
const siteHeaderElement = siteMainElement.querySelector('.trip-events');
const boardPresenter = new BoardPresenter(); /*Создается экземпляр презентера(Каждый раз когда работаем с классом необходимо создавать экземпляр) todo для чего? */

render(new NewTaskButtonView(), siteHeaderElement); /*В рендер передается (Обязательно с new) сначала что отрисовать а потом куда отрисовать это.*/

boardPresenter.init(siteMainElement); /*выполняется функция boardPresenter который тут как коллбэк а именно его метод init(функция в функции с полученным в нее значением siteMainElement)  todo Если я правильно понял*/
