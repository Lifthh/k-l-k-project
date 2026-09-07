
/* =====================================================
   DODGE THE TEDDY
   FULL JAVASCRIPT — TANPA MUSIK & SOUND
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ================================================
       OPENING SCREEN
    ================================================= */

    const openingScreen =
        document.getElementById("openingScreen");

    const enterGameBtn =
        document.getElementById("enterGameBtn");


    if (enterGameBtn) {

        enterGameBtn.addEventListener("click", () => {

            if (openingScreen) {
                openingScreen.classList.add("hide");
            }

            setTimeout(() => {
                startGame();
            }, 500);

        });

    }


    /* ================================================
       ELEMENTS
    ================================================= */

    const gameArea =
        document.getElementById("gameArea");

    const player =
        document.getElementById("player");

    const scoreText =
        document.getElementById("score");

    const levelText =
        document.getElementById("level");

    const livesText =
        document.getElementById("lives");

    const startMessage =
        document.getElementById("startMessage");

    const gameOver =
        document.getElementById("gameOver");

    const startBtn =
        document.getElementById("startBtn");

    const restartBtn =
        document.getElementById("restartBtn");

    const finalScore =
        document.getElementById("finalScore");

    const bestScore =
        document.getElementById("bestScore");

    const leftBtn =
        document.getElementById("leftBtn");

    const rightBtn =
        document.getElementById("rightBtn");


    /* ================================================
       CHECK ELEMENTS
    ================================================= */

    if (!gameArea || !player) {
        console.error(
            "Dodge the Teddy: gameArea atau player tidak ditemukan."
        );
        return;
    }


    /* ================================================
       GAME VARIABLES
    ================================================= */

    let gameRunning = false;

    let score = 0;

    let level = 1;

    let lives = 3;

    let playerX = 50;

    let fallingObjects = [];

    let lastTime = 0;

    let spawnTimer = 0;

    let animationFrame = null;

    let moveLeft = false;

    let moveRight = false;


    /* ================================================
       BEST SCORE
    ================================================= */

    let best =
        Number(
            localStorage.getItem("teddyBestScore")
        ) || 0;


    if (bestScore) {
        bestScore.textContent = best;
    }


    /* ================================================
       START GAME
    ================================================= */

    function startGame() {

        gameRunning = true;

        score = 0;

        level = 1;

        lives = 3;

        playerX = 50;

        spawnTimer = 0;

        fallingObjects = [];

        moveLeft = false;

        moveRight = false;


        /* Update UI */

        if (scoreText) {
            scoreText.textContent = score;
        }

        if (levelText) {
            levelText.textContent = level;
        }

        if (livesText) {
            livesText.textContent = "❤️❤️❤️";
        }


        /* Reset player */

        player.style.left =
            playerX + "%";


        player.classList.remove("hit");


        /* Hide messages */

        if (startMessage) {
            startMessage.classList.add("hidden");
        }

        if (gameOver) {
            gameOver.classList.add("hidden");
        }


        /* Remove old teddy */

        document
            .querySelectorAll(".falling-teddy")
            .forEach(teddy => teddy.remove());


        /* Remove old popups */

        document
            .querySelectorAll(".score-popup")
            .forEach(popup => popup.remove());

        document
            .querySelectorAll(".level-popup")
            .forEach(popup => popup.remove());


        /* Cancel previous animation */

        if (animationFrame) {
            cancelAnimationFrame(animationFrame);
        }


        lastTime =
            performance.now();


        animationFrame =
            requestAnimationFrame(gameLoop);
    }


    /* ================================================
       GAME LOOP
    ================================================= */

    function gameLoop(timestamp) {

        if (!gameRunning) {
            return;
        }


        const delta =
            timestamp - lastTime;


        lastTime = timestamp;


        /* Player */

        updatePlayer();


        /* Spawn timer */

        spawnTimer += delta;


        /*
           Teddy semakin sering muncul
           ketika level meningkat.
        */

        const spawnRate =
            Math.max(
                250,
                900 - (level * 65)
            );


        if (spawnTimer >= spawnRate) {

            spawnTeddy();

            spawnTimer = 0;
        }


        /* Update teddy */

        updateTeddies(delta);


        /* Continue game */

        animationFrame =
            requestAnimationFrame(gameLoop);
    }


    /* ================================================
       PLAYER MOVEMENT
    ================================================= */

    function updatePlayer() {

        const speed = 0.65;


        if (moveLeft) {
            playerX -= speed;
        }


        if (moveRight) {
            playerX += speed;
        }


        /*
           Keep player inside game.
        */

        playerX =
            Math.max(
                5,
                Math.min(95, playerX)
            );


        player.style.left =
            playerX + "%";
    }


    /* ================================================
       KEYBOARD
    ================================================= */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "ArrowLeft" ||
                event.key.toLowerCase() === "a"
            ) {

                moveLeft = true;

                event.preventDefault();
            }


            if (
                event.key === "ArrowRight" ||
                event.key.toLowerCase() === "d"
            ) {

                moveRight = true;

                event.preventDefault();
            }

        }
    );


    document.addEventListener(
        "keyup",
        event => {

            if (
                event.key === "ArrowLeft" ||
                event.key.toLowerCase() === "a"
            ) {

                moveLeft = false;
            }


            if (
                event.key === "ArrowRight" ||
                event.key.toLowerCase() === "d"
            ) {

                moveRight = false;
            }

        }
    );


    /* ================================================
       MOBILE BUTTONS
    ================================================= */

    function holdButton(
        button,
        direction
    ) {

        if (!button) {
            return;
        }


        const start = event => {

            event.preventDefault();


            if (direction === "left") {

                moveLeft = true;

            } else {

                moveRight = true;
            }
        };


        const stop = event => {

            event.preventDefault();


            if (direction === "left") {

                moveLeft = false;

            } else {

                moveRight = false;
            }
        };


        button.addEventListener(
            "pointerdown",
            start
        );


        button.addEventListener(
            "pointerup",
            stop
        );


        button.addEventListener(
            "pointerleave",
            stop
        );


        button.addEventListener(
            "pointercancel",
            stop
        );
    }


    holdButton(
        leftBtn,
        "left"
    );


    holdButton(
        rightBtn,
        "right"
    );


    /* ================================================
       SPAWN TEDDY
    ================================================= */

    function spawnTeddy() {

        const teddy =
            document.createElement("div");


        teddy.className =
            "falling-teddy";


        /*
           Random teddy appearance
        */

        const teddyTypes = [
            "🧸",
            "🧸",
            "🧸",
            "🐻"
        ];


        teddy.textContent =
            teddyTypes[
                Math.floor(
                    Math.random() *
                    teddyTypes.length
                )
            ];


        /*
           Random horizontal position
        */

        const areaWidth =
            gameArea.clientWidth;


        const teddyWidth = 60;


        const maxX =
            Math.max(
                0,
                areaWidth - teddyWidth
            );


        const x =
            Math.random() * maxX;


        teddy.style.left =
            x + "px";


        teddy.dataset.y =
            "-70";


        /*
           Speed increases with level.
        */

        const speed =
            0.20 +
            (level * 0.055) +
            Math.random() * 0.12;


        teddy.dataset.speed =
            speed;


        gameArea.appendChild(teddy);


        fallingObjects.push(teddy);
    }


    /* ================================================
       UPDATE TEDDIES
    ================================================= */

    function updateTeddies(delta) {

        const playerRect =
            player.getBoundingClientRect();


        for (
            let i = fallingObjects.length - 1;
            i >= 0;
            i--
        ) {

            const teddy =
                fallingObjects[i];


            let y =
                Number(
                    teddy.dataset.y
                );


            const speed =
                Number(
                    teddy.dataset.speed
                );


            y +=
                speed * delta;


            teddy.dataset.y =
                y;


            teddy.style.transform =
                `translateY(${y}px) rotate(${y / 8}deg)`;


            const teddyRect =
                teddy.getBoundingClientRect();


            /* Collision */

            if (
                checkCollision(
                    playerRect,
                    teddyRect
                )
            ) {

                hitPlayer(teddy);


                fallingObjects.splice(
                    i,
                    1
                );


                continue;
            }


            /* Teddy reached bottom */

            if (
                y >
                gameArea.clientHeight + 80
            ) {

                teddy.remove();


                fallingObjects.splice(
                    i,
                    1
                );


                addScore(1);
            }
        }
    }


    /* ================================================
       COLLISION
    ================================================= */

    function checkCollision(
        rect1,
        rect2
    ) {

        const padding = 12;


        return !(
            rect1.right - padding <
                rect2.left ||

            rect1.left + padding >
                rect2.right ||

            rect1.bottom - padding <
                rect2.top ||

            rect1.top + padding >
                rect2.bottom
        );
    }


    /* ================================================
       HIT PLAYER
    ================================================= */

    function hitPlayer(teddy) {

        teddy.remove();


        lives--;


        /*
           Hit animation
        */

        player.classList.remove("hit");


        void player.offsetWidth;


        player.classList.add("hit");


        updateLives();


        /*
           Flash game screen
        */

        gameArea.animate(
            [
                {
                    filter: "brightness(1)"
                },

                {
                    filter: "brightness(1.6)"
                },

                {
                    filter: "brightness(1)"
                }
            ],
            {
                duration: 300
            }
        );


        if (lives <= 0) {

            endGame();
        }
    }


    /* ================================================
       UPDATE LIVES
    ================================================= */

    function updateLives() {

        if (!livesText) {
            return;
        }


        let hearts = "";


        for (
            let i = 0;
            i < 3;
            i++
        ) {

            hearts +=
                i < lives
                    ? "❤️"
                    : "🖤";
        }


        livesText.textContent =
            hearts;
    }


    /* ================================================
       SCORE
    ================================================= */

    function addScore(amount) {

        if (!gameRunning) {
            return;
        }


        score += amount;


        if (scoreText) {
            scoreText.textContent =
                score;
        }


        /*
           Level every 10 points
        */

        const newLevel =
            Math.floor(
                score / 10
            ) + 1;


        if (newLevel > level) {

            level =
                newLevel;


            if (levelText) {

                levelText.textContent =
                    level;
            }


            showLevelUp();
        }


        /*
           Score popup
        */

        if (amount > 0) {

            showScorePopup();
        }
    }


    /* ================================================
       SCORE POPUP
    ================================================= */

    function showScorePopup() {

        const popup =
            document.createElement("div");


        popup.className =
            "score-popup";


        popup.textContent =
            "+1 ⭐";


        popup.style.left =
            (playerX + 3) + "%";


        popup.style.bottom =
            "90px";


        gameArea.appendChild(
            popup
        );


        setTimeout(() => {

            popup.remove();

        }, 700);
    }


    /* ================================================
       LEVEL UP
    ================================================= */

    function showLevelUp() {

        const popup =
            document.createElement("div");


        popup.className =
            "level-popup";


        popup.textContent =
            "LEVEL " + level + " ✨";


        gameArea.appendChild(
            popup
        );


        setTimeout(() => {

            popup.remove();

        }, 1000);
    }


    /* ================================================
       GAME OVER
    ================================================= */

    function endGame() {

        gameRunning = false;


        if (animationFrame) {

            cancelAnimationFrame(
                animationFrame
            );
        }


        moveLeft = false;

        moveRight = false;


        /*
           Remove all teddies
        */

        fallingObjects.forEach(
            teddy => teddy.remove()
        );


        fallingObjects = [];


        /*
           Save best score
        */

        if (score > best) {

            best = score;


            localStorage.setItem(
                "teddyBestScore",
                best
            );
        }


        if (bestScore) {

            bestScore.textContent =
                best;
        }


        if (finalScore) {

            finalScore.textContent =
                score;
        }


        if (gameOver) {

            gameOver.classList.remove(
                "hidden"
            );
        }
    }


    /* ================================================
       BUTTONS
    ================================================= */

    if (startBtn) {

        startBtn.addEventListener(
            "click",
            startGame
        );
    }


    if (restartBtn) {

        restartBtn.addEventListener(
            "click",
            startGame
        );
    }


    /* ================================================
       PREVENT MOBILE SCROLL
    ================================================= */

    gameArea.addEventListener(
        "touchmove",
        event => {

            event.preventDefault();

        },
        {
            passive: false
        }
    );


});