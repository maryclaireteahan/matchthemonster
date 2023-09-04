// Get the elements from the HTML file
const grid = document.querySelector(".grid");
const gridContainer = document.querySelector(".grid-container");
const instructionsButton = document.querySelector(".instructions-btn");
const indicators = document.querySelector(".indicators");
const scoreElement = document.querySelector(".score");
const timeElement = document.querySelector(".time");
const actions = document.querySelector(".actions");
const restartButton = document.querySelector(".restart-btn");

const cards = [
    {image:"apple.png", value:"apple"},
    {image:"banana.png", value:"banana"},
    {image:"cherry.png", value:"cherry"},
    {image:"grape.png", value:"grape"},
    {image:"lemon.png", value:"lemon"},
    {image:"orange.png", value:"orange"},
    {image:"pear.png", value:"pear"},
    {image:"strawberry.png", value:"strawberry"},
    {image:"watermelon.png", value:"watermelon"}
   ];
