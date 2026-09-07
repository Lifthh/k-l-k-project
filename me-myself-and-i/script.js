/* =========================================================
   ENTER WEBSITE + MUSIC
========================================================= */

function enterWebsite() {

    const opening = document.getElementById("opening");
    const mainContent = document.getElementById("mainContent");
    const music = document.getElementById("backgroundMusic");
    const musicButton = document.getElementById("musicButton");


    /* Animasi keluar opening */

    opening.style.opacity = "0";
    opening.style.transform = "scale(1.05)";

    opening.style.transition =
        "opacity 1s ease, transform 1s ease";


    /* Setelah animasi selesai */

    setTimeout(function () {

        opening.style.display = "none";

        mainContent.style.display = "block";

        musicButton.style.display = "block";


        /* Mulai musik */

        music.volume = 0.4;

        music.play().catch(function () {

            console.log(
                "Musik tidak dapat diputar otomatis."
            );

        });


        /* Scroll ke bagian atas */

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });


    }, 1000);

}


/* =========================================================
   MUSIC ON / OFF
========================================================= */

function toggleMusic() {

    const music =
        document.getElementById("backgroundMusic");

    const button =
        document.getElementById("musicButton");


    if (music.paused) {

        music.play();

        button.innerHTML = "🎵";

    } else {

        music.pause();

        button.innerHTML = "🔇";

    }

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    const windowHeight =
        window.innerHeight;


    revealElements.forEach(function (element) {

        const elementTop =
            element.getBoundingClientRect().top;


        if (elementTop < windowHeight - 100) {

            element.classList.add("active");

        }

    });

}


window.addEventListener(
    "scroll",
    revealOnScroll
);


/* Jalankan saat pertama kali */

revealOnScroll();