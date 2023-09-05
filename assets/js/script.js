// Get the elements from the HTML file
const grid = document.querySelector(".grid");
const cards = [
    {image:"demon.png", value:"demon"},
    {image:"zombie.png", value:"zombie"},
    {image:"vampire.png", value:"vampire"},
    {image:"witch.png", value:"witch"},
    {image:"werewolf.png", value:"werewolf"},
    {image:"ghost.png", value:"ghost"},
    {image:"ogre.png", value:"ogre"},
    {image:"dragon.png", value:"dragon"},
];
const cardsPicklist = [...cards, ...cards];
const tileCount = cardsPicklist.length;

const button = document.querySelector(".btn");
const instructionsButton = document.querySelector("#instructions-btn");
const restartButton = document.querySelector("#restart-btn");
const actions = document.querySelector(".actions");
const scoreElement = document.querySelector(".score");
const timeElement = document.querySelector(".time");