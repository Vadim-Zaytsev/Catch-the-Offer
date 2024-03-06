import { data } from '../../../data/data.js';

export function Scores(catchTitle, missTitle) {
    const container = document.createElement('div');
    container.classList.add('scores-wrapper');

    //------------------Element-------------------------------

    const catchElement = document.createElement('div');
    catchElement.classList.add('catch-miss-wrapper');

    const missElement = document.createElement('div');
    missElement.classList.add('catch-miss-wrapper');

    //----------------Title------------------------------------

    const catchTitleElement = document.createElement('span');
    catchTitleElement.classList.add('catch-miss-title');

    const missTitleElement = document.createElement('span');
    missTitleElement.classList.add('catch-miss-title');

    //-----------------Check----------------------------------------

    const catchCheckElement = document.createElement('span');
    catchCheckElement.classList.add('catch-miss-check');

    const missCheckElement = document.createElement('span');
    missCheckElement.classList.add('catch-miss-check');

    //-------------------------------------------------------------
    catchTitleElement.append(catchTitle);
    catchCheckElement.append(data.scores.catchesCount);

    missTitleElement.append(missTitle);
    missCheckElement.append(data.scores.missesCount);

    catchElement.append(catchTitleElement, catchCheckElement);
    missElement.append(missTitleElement, missCheckElement);

    container.append(catchElement, missElement);

    return container;
}
