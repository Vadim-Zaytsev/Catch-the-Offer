import { restartGame } from '../../../../data/data.js';
import { settings } from '../../Header/header.components.js';
import { Button } from '../class-button/class-button.components.js';

export const buttonPlayAgainElement = new Button(
    'Play again',
    'btn-start',
    () => {
        settings.forEach((el) => el.classList.remove('disable-click'));

        restartGame();
    }
);
