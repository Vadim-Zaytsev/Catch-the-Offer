import { data } from '../../../data/data.js';
import { Finality } from './class-finish/class-finish.components.js';

export function Finish() {
    const container = document.createElement('div');
    container.classList.add('container');
    const sectionElement = document.createElement('section');
    sectionElement.classList.add('section-three');

    if (
        data.scores.catchesCount === data.settings.endGameConditions.pointsToWin
    ) {
        for (const value of Object.values(
            new Finality('assets/images/win.png', 'You Win!', 'Congratulations')
        )) {
            sectionElement.append(value);
            container.append(sectionElement);
        }
    } else {
        for (const value of Object.values(
            new Finality(
                'assets/images/lose.png',
                'You Lose!',
                `You'll be lucky next time`
            )
        )) {
            sectionElement.append(value);
            container.append(sectionElement);
        }
    }

    return container;
}
