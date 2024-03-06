export const GAME_STATUSES = {
    SETTINGS: 'settings',
    IN_PROGRESS: 'in-progress',
    FINISH: 'finish',
};

export const data = {
    scores: {
        catchesCount: 0,
        missesCount: 0,
    },
    coords: {
        x: 0,
        y: 0,
    },
    settings: {
        gridSize: {
            columnsCount: 3,
            rowsCount: 3,
        },
        endGameConditions: {
            maximumMissesCount: 3,
            pointsToWin: 3,
        },
    },

    date: null,

    offer: {
        clickAllowed: false,
        offerUrl: 'assets/images/offer.png',
    },

    canHandleClick: true,

    gameStatus: GAME_STATUSES.SETTINGS,
};

export const dataSettings = {
    gridSize: {
        '3x3': 3,
        '4x4': 4,
        '5x5': 5,
        '6x6': 6,
        '7x7': 7,
        '8x8': 8,
    },

    pointsToWin: {
        '20 pts': 20,
        '30 pts': 30,
        '40 pts': 40,
        '60 pts': 60,
        '80 pts': 80,
        '100 pts': 100,
    },
    intervalBetweenOfferJumps: {
        '2000 ms': 2000,
        '1800 ms': 1800,
        '1500 ms': 1500,
        '1000 ms': 1000,
        '800 ms': 800,
        '600 ms': 600,
    },
    maximumMisses: {
        3: 3,
        5: 5,
        7: 7,
        9: 9,
        11: 11,
        15: 15,
    },
};

//--------------------------------------------------------------

export function clickHandler() {
    if (!data.canHandleClick) {
        return;
    }
    catchOffer();
    console.log('Click event handled');
}

//------------------------------------------------------------

let subscriber = null;

export function addEventListener(observer) {
    subscriber = observer;
}

//------------------------------------------------------------

//-----------------Changing the status---------------------------

export function changeStatusToStart() {
    data.date = new Date();
    data.gameStatus = GAME_STATUSES.IN_PROGRESS;

    subscriber();

    runJumpInterval();
}

export function restartGame() {
    data.offer.offerUrl = 'assets/images/offer.png';
    data.scores.catchesCount = 0;
    data.scores.missesCount = 0;
    data.coords.x = 0;
    data.coords.y = 0;

    data.gameStatus = GAME_STATUSES.SETTINGS;

    subscriber();
    location.reload();
}

//-----------------------Create a random coordinate-------------------

function generateRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function offerCaught() {
    clearInterval(jumpIntervalId);
}

export function catchOffer() {
    data.canHandleClick = false;

    clearInterval(jumpIntervalId);

    data.offer.offerUrl = 'assets/images/offer_catch.png';
    subscriber();

    setTimeout(() => {
        data.offer.offerUrl = 'assets/images/offer.png';
        data.canHandleClick = true;
        data.scores.catchesCount++;

        if (
            data.scores.catchesCount ===
            data.settings.endGameConditions.pointsToWin
        ) {
            gameDuration();

            data.gameStatus = GAME_STATUSES.FINISH;
        } else {
            jumpOfferToRandomPosition();
            runJumpInterval();
        }

        subscriber();
    }, 500);
}

//-----------------Enter the newly created random coordinates into the data---------------

function jumpOfferToRandomPosition() {
    let newX, newY;

    do {
        newX = generateRandomInt(data.settings.gridSize.columnsCount);
        newY = generateRandomInt(data.settings.gridSize.rowsCount);
    } while (data.coords.x === newX && data.coords.y === newY);

    data.coords.x = newX;
    data.coords.y = newY;
}

//----------------Actions in case of an unspoken offer---------------------------

function missOffer() {
    data.canHandleClick = false;
    clearInterval(jumpIntervalId);

    data.offer.offerUrl = 'assets/images/offer_miss.png';
    subscriber();

    setTimeout(() => {
        data.scores.missesCount++;
        if (
            data.scores.missesCount ===
            data.settings.endGameConditions.maximumMissesCount
        ) {
            gameDuration();

            data.gameStatus = GAME_STATUSES.FINISH;
            data.canHandleClick = true;

            clearInterval(jumpIntervalId);
        } else {
            data.canHandleClick = true;
            data.offer.offerUrl = 'assets/images/offer.png';
            jumpOfferToRandomPosition();
            runJumpInterval();
        }

        subscriber();
    }, 500);
}

//------------------Start runJumpInterval

let jumpIntervalId;

function runJumpInterval() {
    jumpIntervalId = setInterval(
        missOffer,
        data.settings.intervalBetweenOfferJumps
    );
}

//-------------Game duration

function gameDuration() {
    const expirationDate = new Date();

    data.date = `
    ${Math.floor((expirationDate - data.date) / (1000 * 60))}m 
    ${Math.floor(((expirationDate - data.date) % (1000 * 60)) / 1000)}s
    `;
}

//---------------------------------------------------------

export function getCustomSettings(settings) {
    const selectValues = [];
    settings.forEach((el) => {
        const selectNodeList = el.querySelectorAll('.setting-list');

        selectNodeList.forEach((item) => {
            selectValues.push(item.value);
        });
    });

    data.settings.gridSize.columnsCount =
        dataSettings.gridSize[selectValues[0]];
    data.settings.gridSize.rowsCount = dataSettings.gridSize[selectValues[0]];

    data.settings.endGameConditions.pointsToWin =
        dataSettings.pointsToWin[selectValues[1]];
    data.settings.endGameConditions.maximumMissesCount =
        dataSettings.maximumMisses[selectValues[3]];

    data.settings.intervalBetweenOfferJumps =
        dataSettings.intervalBetweenOfferJumps[selectValues[2]];
}
