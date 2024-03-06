import { buttonStartElement } from './Button/button-start/button-start.components.js';
import { Finish } from './Finish/finish.component.js';
import { Grid } from './Grid/grid.components.js';
import { Header } from './Header/header.components.js';
import { Scores } from './Scores/scores.components.js';

export function Game() {
    const containerButton = document.createElement('div');
    containerButton.classList.add('button-wrapper');

    const containerGrid = document.createElement('div');

    const settingsElement = Header();
    
    const buttonElement = buttonStartElement.button;
    
    const scoresElement = Scores('Catch:', 'Miss:');

    const gridElement = Grid();
    containerGrid.append(gridElement);

    const finishElement = Finish();

    const gameMap = new Map([
        ['settings', settingsElement],
        ['button', buttonElement],
        ['scores', scoresElement],
        ['playing field', containerGrid],
        ['finish', finishElement],
    ]);

    return gameMap;
}
