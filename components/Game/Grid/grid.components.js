import { data } from '../../../data/data.js';
import { Offer } from '../Offer/offer.component.js';

export function Grid() {
    const table = document.createElement('table');
    table.classList.add('playing-field');

    for (let y = 0; y < data.settings.gridSize.rowsCount; y++) {
        const rowElement = document.createElement('tr');
        for (let x = 0; x < data.settings.gridSize.columnsCount; x++) {
            const cellElement = document.createElement('td');
            cellElement.classList.add('playing-field-cell');

            if (x === data.coords.x && y === data.coords.y) {
                cellElement.append(Offer());
            }

            rowElement.append(cellElement);
        }

        table.append(rowElement);
    }

    return table;
}
