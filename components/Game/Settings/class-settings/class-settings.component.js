export class Settings {
    constructor(
        arrSettingsOptions,
        titleSettingUp,
        labelClass,
        selectClass,
        optionClass
    ) {
        this.label = this.createLabel(titleSettingUp, labelClass);
        this.select = this.createSelect(
            arrSettingsOptions,
            selectClass,
            optionClass
        );
    }

    createLabel(title, labelClass) {
        const label = document.createElement('label');
        label.for = 'grid';
        label.textContent = title;
        label.classList.add(labelClass);

        return label;
    }

    createSelect(arrOptions, selectClass, optionClass) {
        const select = document.createElement('select');
        select.id = 'grid';
        select.name = 'grid';
        select.classList.add(selectClass);

        for (let i = 0; i < arrOptions.length; i++) {
            const option = document.createElement('option');
            option.value = arrOptions[i];
            option.textContent = arrOptions[i];
            option.classList.add(optionClass);

            select.append(option);
        }

        return select;
    }
}
