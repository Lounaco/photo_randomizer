// start
const section = document.querySelector("section");
const playerLivesCount = document.querySelector(".playerLivesCount");
const playerLives = 6;

// link text
if (playerLivesCount) {
    playerLivesCount.textContent = playerLives;
}

// generate the data
const getData = () => [
    { imgSrc: "./images/7C2A0947.jpg", name: "dandelion" },
    { imgSrc: "./images/95E36905.jpg", name: "maple leaf" },
    { imgSrc: "./images/99A0E241.jpg", name: "figs tree" },
    { imgSrc: "./images/196FE62C8.jpg", name: "rose" },
    { imgSrc: "./images/A687FC3A.jpg", name: "flower poppy" },
    { imgSrc: "./images/F76773B3.jpg", name: "maple leaves" },
    { imgSrc: "./images/IMG_2225.jpg", name: "sunrise" },
    { imgSrc: "./images/IMG_6763.jpg", name: "trees" },
    { imgSrc: "./images/7C2A0947.jpg", name: "dandelion" },
    { imgSrc: "./images/95E36905.jpg", name: "maple leaf" },
    { imgSrc: "./images/99A0E241.jpg", name: "figs tree" },
    { imgSrc: "./images/196FE62C8.jpg", name: "rose" },
    { imgSrc: "./images/A687FC3A.jpg", name: "flower poppy" },
    { imgSrc: "./images/F76773B3.jpg", name: "maple leaves" },
    { imgSrc: "./images/IMG_2225.jpg", name: "sunrise" },
    { imgSrc: "./images/IMG_6763.jpg", name: "trees" },
];

// randomize
const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};

// cards
const cardGenerator = () => {
    const cardData = randomize();

    // html generate
    cardData.forEach((item) => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList.add("card");
        face.classList.add("face");
        back.classList.add("back");

        // info for cards
        face.src = item.imgSrc;

        // section for cards
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

         // add event listener
        card.addEventListener("click", (e) => {
            card.classList.toggle("toggleCard");
            checkCards(e);
        });
    });
};

// check cards
const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");
    
    if (flippedCards.length === 2) {
        if (flippedCards[0].childNodes[0].src === flippedCards[1].childNodes[0].src) {
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
            });
        } else {
            flippedCards.forEach(card => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("toggleCard"), 1000);
            });
            playerLives--;
            playerLivesCount.textContent = playerLives;
            if (playerLives === 0) {
                restartGame();
            }
        }
    }
};

// restart game
const restartGame = () => {
    const cardData = randomize();
    const faces = document.querySelectorAll(".face");
    const cards = document.querySelectorAll(".card");
    section.style.pointerEvents = "none";

    cardData.forEach((item, index) => {
        cards[index].classList.remove("toggleCard");
        setTimeout(() => {
            cards[index].style.pointerEvents = "all";
            faces[index].src = item.imgSrc;
            section.style.pointerEvents = "all";
        }, 1000);
    });
    playerLives = 6;
    playerLivesCount.textContent = playerLives;
};

cardGenerator();
