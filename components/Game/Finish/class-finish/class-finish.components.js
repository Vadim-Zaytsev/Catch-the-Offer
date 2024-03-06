import { data } from '../../../../data/data.js';
import { buttonPlayAgainElement } from '../../Button/button-playAgain/button-playAgain.components.js';

export class Finality {
    constructor(imgUrl, title, subtitle) {
        this.informationGame = this.informationGame(
            data.scores,
            data.date,
            title,
            subtitle,
            imgUrl
        );
    }

    informationGame(scores, date, title, subtitle, imgUrl) {
        const infoWrapper = document.createElement('div');
        infoWrapper.classList.add('info-block-wrapper');

        const containerCounterCaughtOffers = document.createElement('div');
        containerCounterCaughtOffers.classList.add('info-element-wrapper');

        const containerCounterNotCaughtOffers = document.createElement('div');
        containerCounterNotCaughtOffers.classList.add('info-element-wrapper');

        const containerGameDuration = document.createElement('div');
        containerGameDuration.classList.add('info-element-wrapper');

        //--------------------------------------------------------------------

        const imgElement = document.createElement('img');
        imgElement.src = imgUrl;
        imgElement.classList.add('img-win');

        //---------------title----------------------------
        const titleElement = document.createElement('h1');
        titleElement.classList.add('finish-title');
        titleElement.append(title);

        //-----------------subtitle---------------------------------------
        const subtitleElement = document.createElement('span');
        subtitleElement.classList.add('finish-subtitle');
        subtitleElement.append(subtitle);

        //---------------Information about caught offers------------------------------

        const nameCounterCaughtOffersElement = document.createElement('span');
        nameCounterCaughtOffersElement.classList.add('info-end');
        nameCounterCaughtOffersElement.textContent = 'Catch:';

        const countCaughtOffersElement = document.createElement('span');
        countCaughtOffersElement.classList.add('info-end');
        countCaughtOffersElement.textContent = scores.catchesCount;

        containerCounterCaughtOffers.append(
            nameCounterCaughtOffersElement,
            countCaughtOffersElement
        );

        //----------------------Information about uncaught offers-------------------------

        const nameCounterNotCaughtOffersElement =
            document.createElement('span');
        nameCounterNotCaughtOffersElement.classList.add('info-end');
        nameCounterNotCaughtOffersElement.textContent = 'Miss:';

        const countNotCaughtOffersElement = document.createElement('span');
        countNotCaughtOffersElement.classList.add('info-end');
        countNotCaughtOffersElement.textContent = scores.missesCount;

        containerCounterNotCaughtOffers.append(
            nameCounterNotCaughtOffersElement,
            countNotCaughtOffersElement
        );

        //---------------------------Game length information------------------

        const nameCounterTimeElement = document.createElement('span');
        nameCounterTimeElement.classList.add('info-end');
        nameCounterTimeElement.textContent = 'Time:';

        const gameDurationElement = document.createElement('span');
        gameDurationElement.classList.add('info-end');
        gameDurationElement.textContent = date;

        containerGameDuration.append(
            nameCounterTimeElement,
            gameDurationElement
        );

        //----------------------Button------------------------------------

        const buttonElement = buttonPlayAgainElement.button;

        //----------------------------------------------------------------------

        infoWrapper.append(
            imgElement,
            titleElement,
            subtitleElement,
            containerCounterCaughtOffers,
            containerCounterNotCaughtOffers,
            containerGameDuration,
            buttonElement
        );

        return infoWrapper;
    }
}
