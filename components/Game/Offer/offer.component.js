import { clickHandler, data } from '../../../data/data.js';

export function Offer() {
    const audio = new Audio('../../../assets/sound/catch.mp3');

    const offerElement = document.createElement('img');

    offerElement.src = data.offer.offerUrl;

    offerElement.addEventListener('click', () => {
        audio.play();

        clickHandler();
    });

    return offerElement;
}
