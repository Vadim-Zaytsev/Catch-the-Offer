export class Button {
    constructor(title, nameClass, onClickCallback) {
        this.button = this.createButton(title, nameClass, onClickCallback);
    }

    createButton(title, nameClass, onClickCallback) {
        const button = document.createElement('button');
        button.textContent = title;
        button.classList.add(nameClass);
        button.addEventListener('click', onClickCallback);

        return button;
    }
}
