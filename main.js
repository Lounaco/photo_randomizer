//start
const section = document.querySelector("section");
const playerLivesCount = document.querySelector ("span");
const playerLives = 6;

//link text
playerLivesCount.textContent = playerLives;

//generate the data
const getData = () =>  [
    { imgSrc: "./images/7C2A0947.jpg", name: "dandelion" },
    { imgSrc: "./images/95E36905.jpg", name: "maple leaf" },
    { imgSrc: "./images/99A0E241.jpg", name: "figs tree" },
    { imgSrc: "./images/196FE62C8.jpg", name: "rose" },
    { imgSrc: "./images/4267708B.jpg", name: "green leaves" },
    { imgSrc: "./images/A687FC3A.jpg", name: "flower poppy" },
    { imgSrc: "./images/F76773B3.jpg", name: "maple leaves" },
    { imgSrc: "./images/IMG_2225.JPG", name: "sunrise" },
    { imgSrc: "./images/IMG_6763.JPG", name: "trees" },
    { imgSrc: "./images/7C2A0947.jpg", name: "dandelion" },
    { imgSrc: "./images/95E36905.jpg", name: "maple leaf" },
    { imgSrc: "./images/99A0E241.jpg", name: "figs tree" },
    { imgSrc: "./images/196FE62C8.jpg", name: "rose" },
    { imgSrc: "./images/4267708B.jpg", name: "green leaves" },
    { imgSrc: "./images/A687FC3A.jpg", name: "flower poppy" },
    { imgSrc: "./images/F76773B3.jpg", name: "maple leaves" },
    { imgSrc: "./images/IMG_2225.JPG", name: "sunrise" },
    { imgSrc: "./images/IMG_6763.JPG", name: "trees" },
];

//randomize
const randomize = () => {
    const cardData = getData();
    cardData.sort( () => Math.random() -0.5);
    return cardData;

};

//cards
const cardGenerator = () => {
    const cardData = randomize();
    console.log(cardData);

};

cardGenerator();
