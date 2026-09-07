
/* =====================================================
   PINK STAR MINI GAME
===================================================== */


/* =====================================================
   ELEMENTS
===================================================== */

const welcomeScreen =
    document.getElementById("welcomeScreen");

const gameScreen =
    document.getElementById("gameScreen");

const gameOverScreen =
    document.getElementById("gameOverScreen");

const startButton =
    document.getElementById("startButton");

const restartButton =
    document.getElementById("restartButton");

const target =
    document.getElementById("target");

const gameBoard =
    document.getElementById("gameBoard");

const scoreDisplay =
    document.getElementById("score");

const timerDisplay =
    document.getElementById("timer");

const finalScoreDisplay =
    document.getElementById("finalScore");


/* =====================================================
   GAME SETTINGS
===================================================== */

const GAME_TIME = 30;


/* =====================================================
   GAME VARIABLES
===================================================== */

let score = 0;

let timeLeft = GAME_TIME;

let gameTimer = null;

let gameRunning = false;


/* =====================================================
   START BUTTON
===================================================== */

startButton.addEventListener(
    "click",
    startGame
);


/* =====================================================
   START GAME
===================================================== */

function startGame() {

    /* Reset */

    score = 0;

    timeLeft = GAME_TIME;

    gameRunning = true;


    /* Update display */

    scoreDisplay.textContent = score;

    timerDisplay.textContent = timeLeft;


    /* Hide other screens */

    welcomeScreen.style.display = "none";

    gameOverScreen.style.display = "none";


    /* Show game */

    gameScreen.style.display = "flex";

    gameScreen.classList.remove("fade-in");

    void gameScreen.offsetWidth;

    gameScreen.classList.add("fade-in");


    /* Put target */

    moveTarget();


    /* Clear old timer */

    clearInterval(gameTimer);


    /* Start timer */

    gameTimer = setInterval(
        updateTimer,
        1000
    );
}


/* =====================================================
   TIMER
===================================================== */

function updateTimer() {

    if (!gameRunning) {
        return;
    }


    timeLeft--;


    timerDisplay.textContent =
        timeLeft;


    /* Time warning */

    if (timeLeft <= 5) {

        timerDisplay.style.color =
            "#e83e82";

    } else {

        timerDisplay.style.color =
            "#ec4f91";
    }


    /* End game */

    if (timeLeft <= 0) {

        endGame();
    }
}


/* =====================================================
   TARGET CLICK
===================================================== */

target.addEventListener(
    "click",
    function (event) {

        event.stopPropagation();


        if (!gameRunning) {
            return;
        }


        /* Add score */

        score++;


        scoreDisplay.textContent =
            score;


        /* Move target */

        moveTarget();


        /* Little click animation */

        target.style.transform =
            "scale(0.8)";


        setTimeout(() => {

            target.style.transform =
                "";

        }, 100);

    }
);


/* =====================================================
   MOVE TARGET
===================================================== */

function moveTarget() {

    if (!gameRunning) {
        return;
    }


    const boardWidth =
        gameBoard.clientWidth;

    const boardHeight =
        gameBoard.clientHeight;


    const targetWidth =
        target.offsetWidth;

    const targetHeight =
        target.offsetHeight;


    /* Safe area */

    const padding = 25;


    const maxX =
        boardWidth -
        targetWidth -
        padding;


    const maxY =
        boardHeight -
        targetHeight -
        padding;


    const minX =
        padding;


    const minY =
        80;


    /* Random position */

    const randomX =
        Math.floor(
            Math.random() *
            Math.max(
                1,
                maxX - minX
            )
        ) + minX;


    const randomY =
        Math.floor(
            Math.random() *
            Math.max(
                1,
                maxY - minY
            )
        ) + minY;


    target.style.left =
        randomX + "px";


    target.style.top =
        randomY + "px";
}


/* =====================================================
   END GAME
===================================================== */

function endGame() {

    gameRunning = false;


    clearInterval(gameTimer);


    /* Final score */

    finalScoreDisplay.textContent =
        score;


    /* Hide game */

    gameScreen.style.display =
        "none";


    /* Show game over */

    gameOverScreen.style.display =
        "flex";


    gameOverScreen.classList.remove(
        "fade-in"
    );


    void gameOverScreen.offsetWidth;


    gameOverScreen.classList.add(
        "fade-in"
    );
}


/* =====================================================
   PLAY AGAIN
===================================================== */

restartButton.addEventListener(
    "click",
    function () {

        startGame();

    }
);


/* =====================================================
   RESPONSIVE
===================================================== */

window.addEventListener(
    "resize",
    function () {

        if (gameRunning) {

            moveTarget();

        }

    }
);


/* =====================================================
   PREVENT ACCIDENTAL DOUBLE TAP ZOOM
===================================================== */

target.addEventListener(
    "touchstart",
    function () {

        if (gameRunning) {

            moveTarget();

        }

    },
    {
        passive: true
    }
);

