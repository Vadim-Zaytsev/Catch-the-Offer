import {
    changeStatusToStart,
    getCustomSettings,
} from '../../../../data/data.js';
import { settings } from '../../Header/header.components.js';
import { Button } from '../class-button/class-button.components.js';

export const buttonStartElement = new Button('START GAME', 'btn-start', () => {
    settings.forEach((el) => {
        if (!el.classList.contains('mute')) {
            el.classList.add('disable-click');
        }
    });

    getCustomSettings(settings);

    changeStatusToStart();
});
