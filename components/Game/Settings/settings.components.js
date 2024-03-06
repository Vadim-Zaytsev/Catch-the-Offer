import { Settings } from './class-settings/class-settings.component.js';

export function createSettings() {
    const arrSettings = [];

    //-----------------------Playfield size settings-------------------

    const containerSettingsGridSize = document.createElement('div');
    containerSettingsGridSize.classList.add('setting-wrapper');

    const settingsGridSize = new Settings(
        ['3x3', '4x4', '5x5', '6x6', '7x7', '8x8'],
        'Grid size',
        'setting-title',
        'setting-list',
        'setting-option'
    );

    for (const value of Object.values(settingsGridSize)) {
        containerSettingsGridSize.append(value);
    }

    arrSettings.push(containerSettingsGridSize);

    //-----------------------Setting the number of points to win-------------------

    const containerSettingsPointsWin = document.createElement('div');
    containerSettingsPointsWin.classList.add('setting-wrapper');

    const settingsPointsWin = new Settings(
        ['20 pts', '30 pts', '40 pts', '60 pts', '80 pts', '100 pts'],
        'Points to win',
        'setting-title',
        'setting-list',
        'setting-option'
    );

    for (const value of Object.values(settingsPointsWin)) {
        containerSettingsPointsWin.append(value);
    }

    arrSettings.push(containerSettingsPointsWin);

    //-----------------------How many ms after the catch the offer will appear-------------------

    const containerSettingsMsAfterCatch = document.createElement('div');
    containerSettingsMsAfterCatch.classList.add('setting-wrapper');

    const settingsMsAfterCatch = new Settings(
        ['2000 ms', '1800 ms', '1500 ms', '1000 ms', '800 ms', '600 ms'],
        'Interval between offer jumps',
        'setting-title',
        'setting-list',
        'setting-option'
    );

    for (const value of Object.values(settingsMsAfterCatch)) {
        containerSettingsMsAfterCatch.append(value);
    }

    arrSettings.push(containerSettingsMsAfterCatch);

    //-----------------------Setting the maximum number of misses-------------------

    const containerMaximumMisses = document.createElement('div');
    containerMaximumMisses.classList.add('setting-wrapper');

    const settingsMaximumMisses = new Settings(
        [3, 5, 7, 9, 11, 15],
        'Maximum misses',
        'setting-title',
        'setting-list',
        'setting-option'
    );

    for (const value of Object.values(settingsMaximumMisses)) {
        containerMaximumMisses.append(value);
    }

    arrSettings.push(containerMaximumMisses);

    //-----------------------Setting Mute mode-------------------

    const containerSettingsToggle = document.createElement('div');
    containerSettingsToggle.classList.add('setting-wrapper');

    const toggleTitle = document.createElement('span');
    toggleTitle.textContent = 'Mute mode';
    toggleTitle.classList.add('setting-title');

    const toggleContainer = document.createElement('div');
    toggleContainer.classList.add('toggle-container');

    const toggleBtn = document.createElement('div');
    toggleBtn.classList.add('toggle-btn');

    toggleContainer.append(toggleBtn);

    containerSettingsToggle.append(toggleTitle, toggleContainer);

    arrSettings.push(containerSettingsToggle);

    return arrSettings;
}
