/* =====================================================
   SCRAPBOOK DIARY — BOY VERSION
   10 PAGES + FINAL BOOK CLOSING ANIMATION
===================================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const opening = document.getElementById("opening");
    const diary = document.getElementById("diary");

    const closedBook = document.getElementById("closedBook");
    const openBook = document.getElementById("openBook");

    const leftPage = document.getElementById("leftPage");
    const rightPage = document.getElementById("rightPage");

    const music = document.getElementById("backgroundMusic");
    const musicIcon = document.getElementById("musicIcon");
    const musicText = document.getElementById("musicText");

    const clickHint = document.getElementById("clickHint");


    /* =====================================================
       VARIABLES
    ===================================================== */

    let currentPage = 0;
    let isOpening = false;
    let isClosing = false;


    /* =====================================================
       FINAL CLOSE ANIMATION STYLE
       CSS tambahan otomatis dari JS
    ===================================================== */

    const finalCloseStyle = document.createElement("style");

    finalCloseStyle.textContent = `

        /* ==========================================
           FINAL CLOSE BUTTON
        ========================================== */

        .final-close-button {
            position: absolute;
            left: 50%;
            bottom: 28px;
            transform: translateX(-50%);

            padding: 12px 22px;

            border: 1px solid rgba(180,220,235,.55);
            border-radius: 3px;

            background:
                linear-gradient(
                    135deg,
                    #05080a,
                    #16242b,
                    #070b0e
                );

            color: #dcebf2;

            font-family:
                Arial,
                Helvetica,
                sans-serif;

            font-size: 10px;
            font-weight: 700;
            letter-spacing: 2px;

            cursor: pointer;

            box-shadow:
                0 0 0 2px rgba(0,0,0,.5),
                0 8px 20px rgba(0,0,0,.45),
                inset 0 0 12px rgba(255,255,255,.04);

            z-index: 100;

            transition:
                transform .25s ease,
                background .25s ease,
                box-shadow .25s ease,
                color .25s ease;
        }


        .final-close-button:hover {
            transform:
                translateX(-50%)
                translateY(-3px);

            background:
                linear-gradient(
                    135deg,
                    #10191e,
                    #20343d,
                    #0b1115
                );

            color: #ffffff;

            box-shadow:
                0 0 15px rgba(160,220,240,.25),
                0 10px 25px rgba(0,0,0,.6);
        }


        .final-close-button:active {
            transform:
                translateX(-50%)
                translateY(0);
        }


        .final-close-button:disabled {
            opacity: .5;
            cursor: not-allowed;
        }


        /* ==========================================
           OPEN BOOK CLOSING
        ========================================== */

        .open-book.book-closing {
            animation:
                finalBookClosing
                1.8s
                cubic-bezier(.77,0,.18,1)
                forwards !important;

            pointer-events: none !important;
        }


        @keyframes finalBookClosing {

            0% {
                opacity: 1;
                transform:
                    scale(1)
                    rotateX(0deg)
                    rotateY(0deg);
            }

            25% {
                opacity: 1;
                transform:
                    scale(.96)
                    rotateX(3deg)
                    rotateY(0deg);
            }

            55% {
                opacity: .95;
                transform:
                    scale(.82)
                    rotateX(8deg)
                    rotateY(0deg);
            }

            80% {
                opacity: .55;
                transform:
                    scale(.58)
                    rotateX(14deg)
                    rotateY(0deg);
            }

            100% {
                opacity: 0;
                transform:
                    scale(.25)
                    rotateX(18deg)
                    rotateY(0deg);
            }

        }


        /* ==========================================
           CLOSED BOOK RETURN
        ========================================== */

        .closed-book.book-return {
            animation:
                finalCoverReturn
                1.1s
                cubic-bezier(.22,.61,.36,1)
                forwards;
        }


        @keyframes finalCoverReturn {

            0% {
                opacity: 0;
                transform:
                    scale(.72)
                    rotateX(15deg)
                    translateY(25px);
            }

            55% {
                opacity: 1;
                transform:
                    scale(1.04)
                    rotateX(0deg)
                    translateY(-3px);
            }

            100% {
                opacity: 1;
                transform:
                    scale(1)
                    rotateX(0deg)
                    translateY(0);
            }

        }


        /* ==========================================
           COVER READY TO OPEN
        ========================================== */

        .closed-book.book-ready {
            cursor: pointer;
        }


        .closed-book.book-ready:hover {
            transform:
                translateY(-5px)
                rotateZ(-1deg);

            transition:
                transform .3s ease;
        }


        /* ==========================================
           SMALL CLOSE LABEL
        ========================================== */

        .final-close-label {
            position: absolute;
            left: 50%;
            bottom: 82px;

            transform: translateX(-50%);

            color: rgba(200,220,230,.6);

            font-family:
                Arial,
                Helvetica,
                sans-serif;

            font-size: 8px;
            letter-spacing: 3px;

            white-space: nowrap;

            pointer-events: none;
        }


        /* ==========================================
           MOBILE
        ========================================== */

        @media (max-width: 650px) {

            .final-close-button {
                bottom: 18px;
                padding: 10px 16px;
                font-size: 8px;
                letter-spacing: 1.5px;
            }

            .final-close-label {
                bottom: 65px;
                font-size: 7px;
                letter-spacing: 2px;
            }

        }

    `;

    document.head.appendChild(finalCloseStyle);


    /* =====================================================
       PAGES
    ===================================================== */

    const pages = [

        /* =================================================
           PAGE 01
        ================================================= */

        {
            left: `
                <div class="paper-decoration flower">✦</div>
                <div class="paper-decoration star">★</div>

                <div class="page-number">01</div>

                <p class="date">
                    THAT'S ME
                </p>

                <h1>
                    A LITTLE INTRODUCTION
                </h1>

                <div class="creative-box">
                    <span>✦</span>

                    <strong>
                        A GUY WITH GOOD ENERGY
                    </strong>

                    <span>✦</span>
                </div>

                <p class="diary-text">
                    Ini gua orangnya lumayan random.
                    Kadang serius, kadang santai,
                    kadang juga ngeselin.
                    Tapi kalau udah ketemu orang
                    yang enak buat diajak ngobrol.
                </p>

                <p class="diary-text">
                    Gausah naksir ya.
                </p>

                <div class="quote">
                    "good people,

                    good memories."
                </div>

                <div class="mini-polaroid">
                    <span>01</span>
                    <small>MEMORY LOG</small>
                </div>

                <div class="sticker sticker-left">
                    ★
                </div>
            `,

            right: `
                <div class="tape tape-pink"></div>

                <div class="photo-card">
                    <div class="photo">
                        <img
                            src="images/image1.jpeg"
                            alt="Memory 1"
                        >
                    </div>

                    <p class="caption">
                        ONE OF THE GOOD ONES
                    </p>
                </div>

                <div class="side-note">
                    KEEP THE MEMORY
                </div>

                <div class="sticker sticker-star">
                    ★
                </div>

                <div class="sticker sticker-right">
                    ⚡
                </div>
            `
        },


        /* =================================================
           PAGE 02
        ================================================= */

        {
            left: `
                <div class="paper-decoration flower">✦</div>
                <div class="paper-decoration star">★</div>

                <div class="page-number">02</div>

                <p class="date">
                    A LITTLE NOTE
                </p>

                <h1>
                    Little Things
                </h1>

                <div class="creative-box blue">
                    <span>★</span>

                    <strong>
                        THINGS THAT I LIKE
                    </strong>

                    <span>★</span>
                </div>

                <div class="list-item">
                    <span>01</span>
                    Aysatchu
                </div>

                <div class="list-item">
                    <span>02</span>
                    Nongkrong
                </div>

                <div class="list-item">
                    <span>03</span>
                    Ngobrol sampai lupa waktu
                </div>

                <div class="list-item">
                    <span>04</span>
                    Foto random
                </div>

                <div class="quote pink">
                    AYSATCHU.
                    Katanya paling enak diminum
                    sambil santai.
                </div>

                <div class="sticker sticker-left">
                    ⚡
                </div>
            `,

            right: `
                <div class="tape tape-blue"></div>

                <div class="photo-card rotate-left">
                    <div class="photo">
                        <img
                            src="images/image2.jpeg"
                            alt="Memory 2"
                        >
                    </div>

                    <p class="caption">
                        RANDOM MOMENT
                    </p>
                </div>

                <div class="floating-note">
                    GOOD
                    <br>
                    VIBES
                </div>

                <div class="sticker sticker-star">
                    ✦
                </div>
            `
        },


        /* =================================================
           PAGE 03
        ================================================= */

        {
            left: `
                <div class="paper-decoration flower">✦</div>
                <div class="paper-decoration star">★</div>

                <div class="page-number">03</div>

                <p class="date">
                    SOMEWHERE IN MY CAMERA ROLL
                </p>

                <h1>
                    Photo Memories
                </h1>

                <div class="camera-doodle">
                    📸
                </div>

                <p class="diary-text">
                    Ini salah satu foto yang cukup susah
                    buat dilupakan. First fotobooth juga,
                    jadi otomatis masuk daftar memori penting.
                </p>

                <p class="diary-text">
                    Hasil fotonya mungkin nggak sempurna,
                    tapi justru itu yang bikin kelihatan
                    natural dan seru.
                </p>

                <div class="memory-ticket">
                    <span>MEMORY TICKET</span>

                    <strong>#003</strong>

                    <small>
                        KEEP THIS ONE
                    </small>
                </div>

                <div class="quote">
                    taken once,

                    remembered forever.
                </div>

                <div class="sticker sticker-left">
                    📸
                </div>
            `,

            right: `
                <div class="tape tape-pink"></div>

                <div class="photo-card rotate-right">
                    <div class="photo">
                        <img
                            src="images/image3.jpeg"
                            alt="Memory 3"
                        >
                    </div>

                    <p class="caption">
                        ONE FOR THE CAMERA ROLL
                    </p>
                </div>

                <div class="stamp">
                    MEMORY
                    <br>
                    SAVED
                </div>

                <div class="sticker sticker-right">
                    📸
                </div>
            `
        },


        /* =================================================
           PAGE 04
        ================================================= */

        {
            left: `
                <div class="paper-decoration flower">★</div>
                <div class="paper-decoration star">✦</div>

                <div class="page-number">04</div>

                <p class="date">
                    FRIENDS
                </p>

                <h1>
                    FRIENDS
                </h1>

                <div class="big-heart">
                    ★
                </div>

                <div class="creative-message">

                    <strong>
                        Kalau ini temen temen gue.
                    </strong>

                    <p>
                        Anak-anak teknik yang sabar,
                        perhatian, dan lumayan jago
                        ngejelasin sesuatu tanpa bikin
                        orang tambah bingung.
                    </p>

                    <p>
                        Orang-orangnya juga cukup asik dan
                        santai. Kalau sudah ngobrol,
                        biasanya ada aja bahan ceritanya.
                    </p>

                </div>

                <div class="tiny-gallery">
                    <span>★</span>
                    <span>✦</span>
                    <span>★</span>
                    <span>⚡</span>
                </div>

                <div class="quote pink">
                    SOME PEOPLE ARE JUST
                    EASY TO REMEMBER.
                </div>
            `,

            right: `
                <div class="tape tape-blue"></div>

                <div class="photo-card">
                    <div class="photo">
                        <img
                            src="images/image4.jpeg"
                            alt="Memory 4"
                        >
                    </div>

                    <p class="caption">
                        JUST A RANDOM GOOD MOMENT
                    </p>
                </div>

                <div class="sticker sticker-star">
                    ★
                </div>

                <div class="sticker sticker-right">
                    ⚡
                </div>
            `
        },


        /* =================================================
           PAGE 05
        ================================================= */

        {
            left: `
                <div class="paper-decoration flower">✦</div>

                <div class="page-number">05</div>

                <p class="date">
                    GOOD DAYS
                </p>

                <h1>
                    Good Energy
                </h1>

                <div class="sun-doodle">
                    ☀
                </div>

                <div class="creative-box yellow">

                    TODAY'S MOOD

                    <strong>
                        GOOD DAY
                    </strong>

                </div>

                <p class="diary-text">
                    kapanpun, di mana pun, sama siapa pun,
                    kalau suasananya enak, rasanya
                    hari jadi lebih menyenangkan.
                </p>

                <p class="diary-text">
                    Kadang nggak perlu acara besar
                    buat bikin hari jadi menyenangkan.
                    Cukup kumpul sama orang yang
                    bikin nyaman, ngobrol, dan
                    ketawa bareng.
                </p>

                <div class="hand-note">
                    KEEP IT SIMPLE.
                    <br>
                    KEEP IT REAL.
                    <br>
                    ENJOY THE DAY.
                </div>

                <div class="sticker sticker-left">
                    🌷
                </div>
            `,

            right: `
                <div class="tape tape-pink"></div>

                <div class="photo-card rotate-right">
                    <div class="photo">
                        <img
                            src="images/image5.jpeg"
                            alt="Memory 5"
                        >
                    </div>

                    <p class="caption">
                        ONE OF THOSE GOOD DAYS
                    </p>
                </div>

                <div class="sticker sticker-star">
                    ✦
                </div>
            `
        },


        /* =================================================
           PAGE 06
        ================================================= */

        {
            left: `
                <div class="paper-decoration flower">★</div>

                <div class="page-number">06</div>

                <p class="date">
                    RANDOM SNAPSHOT
                </p>

                <h1>
                    No Context.
                </h1>

                <div class="no-context">

                    THIS PHOTO

                    <br>

                    HAS NO CONTEXT

                    <br>

                    BUT IT'S COOL.

                </div>

                <div class="doodle">
                    ★ ✦ ★ ✦ ★
                </div>

                <div class="quote">
                    NO EXPLANATION.

                    JUST A GOOD MOMENT.
                </div>

                <div class="sticker sticker-left">
                    ⚡
                </div>
            `,

            right: `
                <div class="tape tape-blue"></div>

                <div class="photo-card rotate-left">
                    <div class="photo">
                        <img
                            src="images/image6.jpeg"
                            alt="Memory 6"
                        >
                    </div>

                    <p class="caption">
                        NO CONTEXT. JUST VIBES.
                    </p>
                </div>

                <div class="floating-note">
                    VIBES
                    <br>
                    ONLY
                </div>
            `
        },


        /* =================================================
           PAGE 07
        ================================================= */

        {
            left: `
                <div class="paper-decoration star">★</div>

                <div class="page-number">07</div>

                <p class="date">
                    FAVORITE MOMENT
                </p>

                <h1>
                    This One.
                </h1>

                <div class="favorite-label">
                    ★ FAVORITE ★
                </div>

                <p class="diary-text">
                    Kalau harus pilih satu foto
                    yang paling berkesan,
                    mungkin foto ini salah satunya.
                </p>

                <p class="diary-text">
                    Nggak harus punya cerita besar.
                    Kadang satu foto sederhana
                    sudah cukup buat mengingat
                    satu periode yang menyenangkan.
                </p>

                <div class="memory-box">

                    <span>KEEP</span>

                    <strong>
                        FOREVER
                    </strong>

                    <small>
                        ★ ★ ★
                    </small>

                </div>

                <div class="sticker sticker-left">
                    ★
                </div>
            `,

            right: `
                <div class="tape tape-pink"></div>

                <div class="photo-card rotate-right">
                    <div class="photo">
                        <img
                            src="images/image7.jpeg"
                            alt="Memory 7"
                        >
                    </div>

                    <p class="caption">
                        THIS ONE STAYS
                    </p>
                </div>

                <div class="sticker sticker-star">
                    ★
                </div>
            `
        },


        /* =================================================
           PAGE 08
        ================================================= */

        {
            left: `
                <div class="paper-decoration flower">✦</div>

                <div class="page-number">08</div>

                <p class="date">
                    AROUND HERE
                </p>

                <h1>
                    Somewhere.
                </h1>

                <div class="location-card">

                    <span>📍</span>

                    <strong>
                        SOMEWHERE MEMORABLE
                    </strong>

                    <small>
                        A PLACE WITH A STORY
                    </small>

                </div>

                <div class="map-doodle">
                    ───★────✦────★───
                </div>

                <p class="diary-text">
                    Ada tempat yang sebenarnya biasa saja,
                    tapi bisa jadi spesial karena orang
                    dan cerita yang ada di dalamnya.
                </p>

                <p class="diary-text">
                    Mungkin suatu hari nanti kalau
                    lihat foto ini lagi, bakal langsung
                    ingat suasananya.
                </p>

                <div class="sticker sticker-left">
                    🗺️
                </div>
            `,

            right: `
                <div class="tape tape-blue"></div>

                <div class="photo-card rotate-left">
                    <div class="photo">
                        <img
                            src="images/image8.jpeg"
                            alt="Memory 8"
                        >
                    </div>

                    <p class="caption">
                        SOMEWHERE WORTH REMEMBERING
                    </p>
                </div>

                <div class="sticker sticker-right">
                    ⚡
                </div>
            `
        },


        /* =================================================
           PAGE 09
        ================================================= */

        {
            left: `
                <div class="paper-decoration star">★</div>

                <div class="page-number">09</div>

                <p class="date">
                    ONE MORE MEMORY
                </p>

                <h1>
                    Dear Future Me,
                </h1>

                <div class="letter-box">

                    <p>
                        Kalau suatu hari nanti
                        lihat halaman ini lagi,
                        semoga masih ingat
                        masa ketika semuanya
                        terasa sederhana.
                    </p>

                    <p>
                        Nggak perlu semuanya sempurna.
                        Yang penting pernah dijalani
                        dan pernah bikin senang.
                    </p>

                </div>

                <div class="hand-note">
                    DON'T FORGET
                    <br>
                    THIS MOMENT.
                </div>

                <div class="sticker sticker-left">
                    ✉
                </div>
            `,

            right: `
                <div class="tape tape-pink"></div>

                <div class="photo-card">

                    <div class="photo">

                        <img
                            src="images/image9.jpeg"
                            alt="Memory 9"
                        >

                    </div>

                    <p class="caption">
                        A MESSAGE FROM THE PAST
                    </p>

                </div>

                <div class="sticker sticker-star">
                    ✉
                </div>
            `
        },


        /* =================================================
           PAGE 10 — FINAL PAGE
        ================================================= */

        {
            left: `
                <div class="paper-decoration flower">★</div>

                <div class="page-number">10</div>

                <p class="date">
                    ONE LAST PHOTO
                </p>

                <h1>
                    That's Me.
                </h1>

                <div class="final-card">

                    <div class="final-symbol">
                        🐰
                    </div>

                    <strong>
                        MY LITTLE ARCHIVE
                    </strong>

                    <small>
                        MEMORIES • MOMENTS • STORIES
                    </small>

                </div>

                <p class="diary-text">
                    Semua foto di sini punya cerita
                    masing-masing. Ada yang lucu,
                    ada yang random, ada juga yang
                    mungkin nggak penting buat orang lain.
                </p>

                <p class="diary-text">
                    Tapi buatku, semuanya tetap layak
                    disimpan karena pernah menjadi
                    bagian dari satu masa.
                </p>

                <div class="quote pink">
                    THANKS FOR VISITING
                    MY LITTLE ARCHIVE.
                </div>

                <div class="sticker sticker-left">
                    ★
                </div>
            `,

            right: `
                <div class="tape tape-blue"></div>

                <div class="photo-card rotate-right">

                    <div class="photo">

                        <img
                            src="images/image10.jpeg"
                            alt="Memory 10"
                        >

                    </div>

                    <p class="caption">
                        JUST ME BEING ME
                    </p>

                </div>

                <div class="final-stars">
                    ★ ✦ ★ ✦ ★
                </div>

                <div class="sticker sticker-right">
                    ⚡
                </div>
            `
        }

    ];


    /* =====================================================
       SHOW PAGE
    ===================================================== */

    function showPage(number) {

        if (isClosing) {
            return;
        }

        if (number < 0) {
            number = 0;
        }

        if (number >= pages.length) {
            number = pages.length - 1;
        }

        currentPage = number;


        /* ---------------------------------------------
           INSERT PAGE CONTENT
        --------------------------------------------- */

        leftPage.innerHTML =
            pages[currentPage].left;

        rightPage.innerHTML =
            pages[currentPage].right;


        /* ---------------------------------------------
           PAGE ANIMATION
        --------------------------------------------- */

        leftPage.classList.remove(
            "page-animation"
        );

        rightPage.classList.remove(
            "page-animation"
        );

        void leftPage.offsetWidth;

        leftPage.classList.add(
            "page-animation"
        );

        rightPage.classList.add(
            "page-animation"
        );


        /* ---------------------------------------------
           FINAL PAGE
        --------------------------------------------- */

        if (currentPage === pages.length - 1) {

            clickHint.textContent =
                "★ END OF THE ARCHIVE ★";

            addFinalCloseButton();

        } else {

            clickHint.textContent =
                "✦ CLICK THE PAGE TO TURN ✦";

        }

    }


    /* =====================================================
       ADD FINAL CLOSE BUTTON
    ===================================================== */

    function addFinalCloseButton() {

        /* Hapus tombol lama kalau ada */

        const oldButton =
            document.getElementById(
                "finalCloseButton"
            );

        if (oldButton) {
            oldButton.remove();
        }


        /* ---------------------------------------------
           LABEL
        --------------------------------------------- */

        const label =
            document.createElement("div");

        label.className =
            "final-close-label";

        label.textContent =
            "END OF MEMORY LOG";


        /* ---------------------------------------------
           BUTTON
        --------------------------------------------- */

        const button =
            document.createElement("button");

        button.id =
            "finalCloseButton";

        button.className =
            "final-close-button";

        button.type =
            "button";

        button.innerHTML =
            "✦ CLOSE MEMORY LOG ✦";


        /* ---------------------------------------------
           CLICK BUTTON
        --------------------------------------------- */

        button.addEventListener(
            "click",
            function (event) {

                event.preventDefault();

                event.stopPropagation();

                closeBook();

            }
        );


        /* ---------------------------------------------
           MASUKKAN KE HALAMAN KANAN
        --------------------------------------------- */

        rightPage.appendChild(label);

        rightPage.appendChild(button);

    }


    /* =====================================================
       CLOSE BOOK
    ===================================================== */

    function closeBook() {

        if (isClosing) {
            return;
        }

        isClosing = true;


        /* ---------------------------------------------
           DISABLE INTERACTION
        --------------------------------------------- */

        openBook.style.pointerEvents =
            "none";


        /* ---------------------------------------------
           BUTTON
        --------------------------------------------- */

        const button =
            document.getElementById(
                "finalCloseButton"
            );

        if (button) {
            button.disabled = true;
            button.innerHTML =
                "CLOSING...";
        }


        /* ---------------------------------------------
           REMOVE OPEN ANIMATION
        --------------------------------------------- */

        openBook.classList.remove(
            "book-open-animation"
        );


        /* Force browser repaint */

        void openBook.offsetWidth;


        /* ---------------------------------------------
           START CLOSE ANIMATION
        --------------------------------------------- */

        openBook.classList.add(
            "book-closing"
        );


        /* ---------------------------------------------
           AFTER OPEN BOOK CLOSES
        --------------------------------------------- */

        setTimeout(function () {

            /* Hide open book */

            openBook.style.opacity =
                "0";

            openBook.style.pointerEvents =
                "none";

            openBook.classList.remove(
                "book-closing"
            );


            /* -----------------------------------------
               SHOW CLOSED BOOK
            ----------------------------------------- */

            closedBook.style.display =
                "block";

            closedBook.style.opacity =
                "0";


            closedBook.classList.remove(
                "book-return"
            );

            closedBook.classList.remove(
                "book-ready"
            );


            /* Force repaint */

            void closedBook.offsetWidth;


            /* -----------------------------------------
               COVER RETURN ANIMATION
            ----------------------------------------- */

            closedBook.classList.add(
                "book-return"
            );


            /* -----------------------------------------
               READY AFTER ANIMATION
            ----------------------------------------- */

            setTimeout(function () {

                closedBook.style.opacity =
                    "1";

                closedBook.classList.add(
                    "book-ready"
                );

                isClosing = false;

            }, 1100);


        }, 1800);

    }


    /* =====================================================
       REOPEN BOOK FROM COVER
    ===================================================== */

    closedBook.addEventListener(
        "click",
        function () {

            if (isOpening || isClosing) {
                return;
            }

            /*
             * Kalau buku sedang tampil sebagai
             * cover setelah ditutup, buka lagi.
             */

            if (
                closedBook.classList.contains(
                    "book-ready"
                )
            ) {

                reopenBook();

            }

        }
    );


    /* =====================================================
       REOPEN BOOK
    ===================================================== */

    function reopenBook() {

        isOpening = true;


        /* ---------------------------------------------
           REMOVE READY STATE
        --------------------------------------------- */

        closedBook.classList.remove(
            "book-ready"
        );


        closedBook.classList.remove(
            "book-return"
        );


        /* ---------------------------------------------
           OPEN BOOK PREPARE
        --------------------------------------------- */

        openBook.style.display =
            "flex";

        openBook.style.opacity =
            "0";

        openBook.style.pointerEvents =
            "none";

        openBook.classList.remove(
            "book-open-animation"
        );


        void openBook.offsetWidth;


        /* ---------------------------------------------
           COVER CLOSE ANIMATION
        --------------------------------------------- */

        closedBook.classList.add(
            "book-close-animation"
        );


        /* ---------------------------------------------
           SHOW OPEN BOOK
        --------------------------------------------- */

        setTimeout(function () {

            closedBook.style.display =
                "none";

            closedBook.classList.remove(
                "book-close-animation"
            );


            currentPage = 0;

            showPage(0);


            openBook.style.opacity =
                "1";

            openBook.style.pointerEvents =
                "auto";


            openBook.classList.add(
                "book-open-animation"
            );


            setTimeout(function () {

                isOpening = false;

            }, 2200);

        }, 1600);

    }


    /* =====================================================
       OPEN DIARY
    ===================================================== */

    window.openDiary = function () {

        if (isOpening || isClosing) {
            return;
        }

        isOpening = true;


        /* ---------------------------------------------
           HIDE OPENING SCREEN
        --------------------------------------------- */

        opening.classList.add(
            "opening-hide"
        );


        setTimeout(function () {

            opening.style.display =
                "none";

            diary.style.display =
                "block";


            /* -----------------------------------------
               MUSIC
            ----------------------------------------- */

            music.play()

                .then(function () {

                    musicIcon.textContent =
                        "Ⅱ";

                    musicText.textContent =
                        "MUSIC ON";

                })

                .catch(function () {

                    musicIcon.textContent =
                        "♫";

                    musicText.textContent =
                        "MUSIC OFF";

                });


            /* -----------------------------------------
               INITIAL COVER
            ----------------------------------------- */

            closedBook.style.display =
                "block";

            closedBook.style.opacity =
                "1";


            closedBook.classList.remove(
                "book-close-animation"
            );

            closedBook.classList.remove(
                "book-return"
            );

            closedBook.classList.remove(
                "book-ready"
            );


            /* -----------------------------------------
               PREPARE OPEN BOOK
            ----------------------------------------- */

            openBook.style.opacity =
                "0";

            openBook.style.pointerEvents =
                "none";

            openBook.classList.remove(
                "book-open-animation"
            );

            openBook.classList.remove(
                "book-closing"
            );


            /* -----------------------------------------
               COVER ANIMATION
            ----------------------------------------- */

            setTimeout(function () {

                closedBook.classList.add(
                    "book-close-animation"
                );

            }, 1000);


            /* -----------------------------------------
               OPEN BOOK
            ----------------------------------------- */

            setTimeout(function () {

                closedBook.style.display =
                    "none";

                closedBook.classList.remove(
                    "book-close-animation"
                );


                openBook.style.display =
                    "flex";

                openBook.style.opacity =
                    "1";

                openBook.style.pointerEvents =
                    "auto";


                openBook.classList.add(
                    "book-open-animation"
                );


                showPage(0);


                setTimeout(function () {

                    isOpening = false;

                }, 2200);

            }, 2800);

        }, 700);

    };


    /* =====================================================
       MUSIC
    ===================================================== */

    window.toggleMusic = function () {

        if (!music) {
            return;
        }


        if (music.paused) {

            music.play()

                .then(function () {

                    musicIcon.textContent =
                        "Ⅱ";

                    musicText.textContent =
                        "MUSIC ON";

                })

                .catch(function () {

                    musicIcon.textContent =
                        "♫";

                    musicText.textContent =
                        "MUSIC OFF";

                });

        } else {

            music.pause();

            musicIcon.textContent =
                "♫";

            musicText.textContent =
                "MUSIC OFF";

        }

    };


    /* =====================================================
       NEXT PAGE
    ===================================================== */

    window.nextPage = function () {

        if (isClosing || isOpening) {
            return;
        }


        if (
            currentPage <
            pages.length - 1
        ) {

            showPage(
                currentPage + 1
            );

        }

    };


    /* =====================================================
       PREVIOUS PAGE
    ===================================================== */

    window.previousPage = function () {

        if (isClosing || isOpening) {
            return;
        }


        if (currentPage > 0) {

            showPage(
                currentPage - 1
            );

        }

    };


    /* =====================================================
       CLICK PAGE
    ===================================================== */

    openBook.addEventListener(
        "click",
        function (event) {

            if (isClosing) {
                return;
            }


            /* Jangan turn page kalau klik video */

            if (
                event.target.closest("video")
            ) {
                return;
            }


            /* Jangan turn page kalau klik button */

            if (
                event.target.closest(
                    ".final-close-button"
                )
            ) {
                return;
            }


            /* Jangan turn page kalau klik
               elemen interaktif */

            if (
                event.target.closest(
                    "button, a, input, textarea"
                )
            ) {
                return;
            }


            const rect =
                openBook.getBoundingClientRect();


            const clickX =
                event.clientX - rect.left;


            if (
                clickX <
                rect.width / 2
            ) {

                previousPage();

            } else {

                nextPage();

            }

        }
    );


    /* =====================================================
       KEYBOARD
    ===================================================== */

    document.addEventListener(
        "keydown",
        function (event) {

            if (isClosing) {
                return;
            }


            /* Arrow Right */

            if (
                event.key ===
                "ArrowRight"
            ) {

                nextPage();

            }


            /* Arrow Left */

            if (
                event.key ===
                "ArrowLeft"
            ) {

                previousPage();

            }


            /* ENTER / SPACE
               di halaman terakhir
            */

            if (
                (
                    event.key ===
                    "Enter" ||

                    event.key ===
                    " "
                ) &&

                currentPage ===
                pages.length - 1
            ) {

                /*
                 * Jangan otomatis close kalau
                 * user sedang fokus di elemen lain.
                 */

                const active =
                    document.activeElement;

                const isFormElement =
                    active &&
                    (
                        active.tagName ===
                        "INPUT" ||

                        active.tagName ===
                        "TEXTAREA" ||

                        active.tagName ===
                        "BUTTON"
                    );

                if (!isFormElement) {

                    closeBook();

                }

            }

        }
    );


    /* =====================================================
       SWIPE
    ===================================================== */

    let touchStartX = 0;
    let touchStartY = 0;


    openBook.addEventListener(
        "touchstart",
        function (event) {

            if (isClosing) {
                return;
            }


            touchStartX =
                event.changedTouches[0]
                    .screenX;

            touchStartY =
                event.changedTouches[0]
                    .screenY;

        },
        {
            passive: true
        }
    );


    openBook.addEventListener(
        "touchend",
        function (event) {

            if (isClosing) {
                return;
            }


            const touchEndX =
                event.changedTouches[0]
                    .screenX;

            const touchEndY =
                event.changedTouches[0]
                    .screenY;


            const differenceX =
                touchStartX -
                touchEndX;


            const differenceY =
                touchStartY -
                touchEndY;


            /*
             * Pastikan gerakan lebih dominan
             * horizontal daripada vertical.
             */

            if (
                Math.abs(differenceX) > 50 &&
                Math.abs(differenceX) >
                Math.abs(differenceY)
            ) {

                if (
                    differenceX > 0
                ) {

                    nextPage();

                } else {

                    previousPage();

                }

            }

        },
        {
            passive: true
        }
    );


    /* =====================================================
       PREVENT DOUBLE CLICK DURING ANIMATION
    ===================================================== */

    openBook.addEventListener(
        "dblclick",
        function (event) {

            event.preventDefault();

        }
    );


    /* =====================================================
       INITIAL PAGE
    ===================================================== */

    showPage(0);


    /* =====================================================
       INITIAL BOOK STATE
    ===================================================== */

    if (closedBook) {

        closedBook.classList.remove(
            "book-ready"
        );

    }


    if (openBook) {

        openBook.style.pointerEvents =
            "none";

    }

});