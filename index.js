import { Game } from './components/Game/game.component.js';
import { GAME_STATUSES, addEventListener, data } from './data/data.js';

function renderUI() {
    const appElement = document.getElementById('app');
    const container = document.createElement('div');
    container.classList.add('container');
    const sectionOneElement = document.createElement('section');
    sectionOneElement.classList.add('section-one');
    const sectionTwoElement = document.createElement('div');
    sectionTwoElement.classList.add('section-two');

    const gameElements = Game();

    appElement.innerHTML = '';

    switch (data.gameStatus) {
        case GAME_STATUSES.SETTINGS:
            sectionOneElement.append(gameElements.get('button'));
            container.append(sectionOneElement);
            appElement.append(gameElements.get('settings'), container);
            break;
        case GAME_STATUSES.IN_PROGRESS:
            sectionTwoElement.append(
                gameElements.get('scores'),
                gameElements.get('playing field')
            );
            container.append(sectionTwoElement);
            appElement.append(gameElements.get('settings'), container);

            break;
        case GAME_STATUSES.FINISH:
            appElement.append(gameElements.get('finish'));
            break;
    }
}

renderUI();

addEventListener(renderUI);
