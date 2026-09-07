/* =========================================================
   OPEN DIARY
========================================================= */

function openDiary() {

    const opening = document.querySelector(".opening");
    const mainContent = document.getElementById("mainContent");

    opening.style.display = "none";
    mainContent.style.display = "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* =========================================================
   MUSIC
========================================================= */

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");
const musicIcon = document.getElementById("musicIcon");
const musicText = document.getElementById("musicText");

function toggleMusic() {

    if (music.paused) {

        music.play();

        musicIcon.textContent = "Ⅱ";
        musicText.textContent = "PAUSE MY SONG";

    } else {

        music.pause();

        musicIcon.textContent = "▶";
        musicText.textContent = "PLAY MY SONG";

    }

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(

    function(entries) {

        entries.forEach(

            function(entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                }

            }

        );

    },

    {
        threshold: 0.15
    }

);


/* Menjalankan observer pada setiap elemen */

revealElements.forEach(

    function(element) {

        observer.observe(element);

    }

);