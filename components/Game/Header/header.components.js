import { createSettings } from '../Settings/settings.components.js';

export const settings = createSettings();

export function Header() {
    const headerElement = document.createElement('header');
    headerElement.classList.add('header');

    const container = document.createElement('div');
    container.classList.add('container');

    const headerWrapper = document.createElement('div');
    headerWrapper.classList.add('header-wrapper');

    for (let i = 0; i < settings.length; i++) {
        headerWrapper.append(settings[i]);
    }

    container.append(headerWrapper);

    headerElement.append(container);

    return headerElement;
}
