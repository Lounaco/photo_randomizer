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
    });
};

if (section) {
    cardGenerator();
}
