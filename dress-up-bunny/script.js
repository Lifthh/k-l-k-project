document.addEventListener("DOMContentLoaded", () => {


/* =====================================================
   ELEMENTS
===================================================== */

const welcomeScreen =
    document.getElementById("welcomeScreen");

const dressUpScreen =
    document.getElementById("dressUpScreen");

const resultScreen =
    document.getElementById("resultScreen");


const startButton =
    document.getElementById("startButton");

const doneButton =
    document.getElementById("doneButton");

const randomButton =
    document.getElementById("randomButton");

const resetButton =
    document.getElementById("resetButton");

const playAgainButton =
    document.getElementById("playAgainButton");

const musicButton =
    document.getElementById("musicButton");


const optionsContainer =
    document.getElementById("optionsContainer");


/* =====================================================
   BUNNY
===================================================== */

const bunnyDress =
    document.getElementById("bunnyDress");

const bunnyShoes =
    document.getElementById("bunnyShoes");

const bunnyHat =
    document.getElementById("bunnyHat");

const bunnyBag =
    document.getElementById("bunnyBag");

const bunnyBackground =
    document.getElementById("bunnyBackground");


const lookName =
    document.getElementById("lookName");


/* =====================================================
   RESULT
===================================================== */

const resultDress =
    document.getElementById("resultDress");

const resultShoes =
    document.getElementById("resultShoes");

const resultHat =
    document.getElementById("resultHat");

const resultBag =
    document.getElementById("resultBag");

const resultBackground =
    document.getElementById("resultBackground");

const finalLookName =
    document.getElementById("finalLookName");


/* =====================================================
   MUSIC
===================================================== */

const backgroundMusic =
    document.getElementById("backgroundMusic");


/* =====================================================
   CLOSET DATA
===================================================== */

const closet = {

    dress: [

        {
            name: "No Dress",
            icon: "🤍",
            className: "dress-none"
        },

        {
            name: "Pink Princess",
            icon: "👗",
            className: "dress-pink"
        },

        {
            name: "Strawberry",
            icon: "🍓",
            className: "dress-strawberry"
        },

        {
            name: "Purple Fairy",
            icon: "💜",
            className: "dress-purple"
        },

        {
            name: "Blue Cloud",
            icon: "🩵",
            className: "dress-blue"
        },

        {
            name: "Sunny Flower",
            icon: "🌼",
            className: "dress-yellow"
        }

    ],


    shoes: [

        {
            name: "No Shoes",
            icon: "🤍",
            className: "shoes-none"
        },

        {
            name: "Pink Sneakers",
            icon: "👟",
            className: "shoes-pink"
        },

        {
            name: "Purple Shoes",
            icon: "👟",
            className: "shoes-purple"
        },

        {
            name: "Blue Shoes",
            icon: "👟",
            className: "shoes-blue"
        }

    ],


    hat: [

        {
            name: "No Hat",
            icon: "🤍",
            className: "hat-none"
        },

        {
            name: "Golden Crown",
            icon: "👑",
            className: "hat-crown"
        },

        {
            name: "Flower Hat",
            icon: "🌸",
            className: "hat-flower"
        },

        {
            name: "Purple Beret",
            icon: "🧢",
            className: "hat-beret"
        }

    ],


    bag: [

        {
            name: "No Bag",
            icon: "🤍",
            className: "bag-none"
        },

        {
            name: "Heart Bag",
            icon: "💗",
            className: "bag-heart"
        },

        {
            name: "Star Bag",
            icon: "⭐",
            className: "bag-star"
        },

        {
            name: "Bunny Bag",
            icon: "🐰",
            className: "bag-bunny"
        }

    ],


    background: [

        {
            name: "Pink Room",
            icon: "🌸",
            className: "bg-pink"
        },

        {
            name: "Purple Room",
            icon: "💜",
            className: "bg-purple"
        },

        {
            name: "Blue Room",
            icon: "🩵",
            className: "bg-blue"
        },

        {
            name: "Sunny Room",
            icon: "🌼",
            className: "bg-yellow"
        },

        {
            name: "Night Room",
            icon: "🌙",
            className: "bg-night"
        }

    ]

};


/* =====================================================
   CURRENT OUTFIT
===================================================== */

let outfit = {

    dress: "dress-none",

    shoes: "shoes-none",

    hat: "hat-none",

    bag: "bag-none",

    background: "bg-pink"

};


let currentCategory = "dress";


/* =====================================================
   SHOW SCREEN
===================================================== */

function showScreen(screen) {

    welcomeScreen.classList.remove("active");

    dressUpScreen.classList.remove("active");

    resultScreen.classList.remove("active");

    screen.classList.add("active");

}


/* =====================================================
   START GAME
===================================================== */

startButton.addEventListener("click", () => {

    showScreen(dressUpScreen);

    showCategory("dress");

    backgroundMusic.volume = 0.35;

    backgroundMusic.play().catch(() => {

        console.log(
            "Music needs user interaction."
        );

    });

});


/* =====================================================
   SHOW CATEGORY
===================================================== */

function showCategory(category) {

    currentCategory = category;

    optionsContainer.innerHTML = "";

    const items =
        closet[category];


    document
        .querySelectorAll(".category-button")
        .forEach(button => {

            button.classList.remove("active");

            if (
                button.dataset.category === category
            ) {

                button.classList.add("active");

            }

        });


    items.forEach(item => {

        const option =
            document.createElement("div");

        option.className = "option";


        if (
            outfit[category] === item.className
        ) {

            option.classList.add("selected");

        }


        option.innerHTML = `

            <div class="option-icon">
                ${item.icon}
            </div>

            <div>
                ${item.name}
            </div>

        `;


        option.addEventListener("click", () => {

            outfit[category] =
                item.className;

            updateBunny();

            showCategory(category);

        });


        optionsContainer.appendChild(option);

    });

}


/* =====================================================
   CATEGORY BUTTONS
===================================================== */

document
    .querySelectorAll(".category-button")
    .forEach(button => {

        button.addEventListener("click", () => {

            showCategory(
                button.dataset.category
            );

        });

    });


/* =====================================================
   UPDATE BUNNY
===================================================== */

function updateBunny() {

    bunnyDress.className =
        `bunny-dress ${outfit.dress}`;


    bunnyShoes.className =
        `bunny-shoes ${outfit.shoes}`;


    bunnyHat.className =
        `bunny-hat ${outfit.hat}`;


    bunnyBag.className =
        `bunny-bag ${outfit.bag}`;


    bunnyBackground.className =
        `bunny-background ${outfit.background}`;


    updateLookName();

}


/* =====================================================
   LOOK NAME
===================================================== */

function updateLookName() {

    const dressItem =
        closet.dress.find(item =>
            item.className === outfit.dress
        );


    const shoesItem =
        closet.shoes.find(item =>
            item.className === outfit.shoes
        );


    let name = "Pink Bunny";


    if (
        dressItem &&
        dressItem.name !== "No Dress"
    ) {

        name =
            dressItem.name +
            " Bunny";

    }


    if (
        shoesItem &&
        shoesItem.name !== "No Shoes"
    ) {

        name += " ✨";

    }


    lookName.textContent =
        name;

}


/* =====================================================
   RANDOM OUTFIT
===================================================== */

randomButton.addEventListener("click", () => {

    Object.keys(closet).forEach(category => {

        const items =
            closet[category];


        const randomIndex =
            Math.floor(
                Math.random() *
                items.length
            );


        outfit[category] =
            items[randomIndex].className;

    });


    updateBunny();

    showCategory(currentCategory);

});


/* =====================================================
   RESET
===================================================== */

resetButton.addEventListener("click", () => {

    outfit = {

        dress: "dress-none",

        shoes: "shoes-none",

        hat: "hat-none",

        bag: "bag-none",

        background: "bg-pink"

    };


    updateBunny();

    showCategory(currentCategory);

});


/* =====================================================
   DONE
===================================================== */

doneButton.addEventListener("click", () => {

    showResult();

});


/* =====================================================
   SHOW RESULT
===================================================== */

function showResult() {

    /* UPDATE DRESS */

    resultDress.className =
        `result-dress ${outfit.dress}`;


    /* UPDATE SHOES */

    resultShoes.className =
        `result-shoes ${outfit.shoes}`;


    /* UPDATE HAT */

    resultHat.className =
        `result-hat ${outfit.hat}`;


    /* UPDATE BAG */

    resultBag.className =
        `result-bag ${outfit.bag}`;


    /* UPDATE BACKGROUND */

    resultBackground.className =
        `result-bunny-background ${outfit.background}`;


    /* UPDATE NAME */

    finalLookName.textContent =
        lookName.textContent;


    /* SHOW RESULT */

    showScreen(resultScreen);


    /*
       Restart animation setiap kali masuk Result.
       Jadi emoji selalu mulai bergerak lagi.
    */

    const floatingEmojis =
        document.querySelectorAll(
            ".result-floating"
        );


    floatingEmojis.forEach(emoji => {

        emoji.style.animation = "none";

        void emoji.offsetWidth;

        emoji.style.animation = "";

    });

}


/* =====================================================
   PLAY AGAIN
===================================================== */

playAgainButton.addEventListener("click", () => {

    showScreen(dressUpScreen);

    showCategory("dress");

});


/* =====================================================
   MUSIC
===================================================== */

let musicPlaying = false;


musicButton.addEventListener("click", () => {

    if (musicPlaying) {

        backgroundMusic.pause();

        musicButton.textContent =
            "🔇";

        musicPlaying = false;

    } else {

        backgroundMusic
            .play()
            .catch(() => {});

        musicButton.textContent =
            "🎵";

        musicPlaying = true;

    }

});


/* =====================================================
   INITIALIZE
===================================================== */

updateBunny();

showCategory("dress");

});