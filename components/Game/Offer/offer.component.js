import { clickHandler, data } from '../../../data/data.js';

export function Offer() {
    const offerElement = document.createElement('img');

    offerElement.src = data.offer.offerUrl;

    offerElement.addEventListener('click', () => {
        clickHandler();
    });

    return offerElement;
}
