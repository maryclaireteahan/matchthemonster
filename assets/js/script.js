// INSTRUCTION BUTTON
function instructionsBtnClick(event) {

    //disable instruction button after one click
    document.getElementById("instructions-btn").disabled = true;

    // Create the a Div
    let instructions = document.createElement("div");

    // Put the Div inside the HTML element instructions-div
    let instructionsDiv = document.getElementById("instructions-div");
    instructionsDiv.appendChild(instructions);

    // Put a h3 element inside the new Div
    let instructionsHeading = document.createElement("h3");
    instructionsHeading.innerHTML = "Instructions:";
    instructions.appendChild(instructionsHeading);

    // Create and put an ordered list under the h3 element
    let instructionsList = document.createElement("ol");

    let listItems = ["Click 2 cards to turn them over and reveal their monsters.",
        "If the monsters match, they stay turned over.", "If they do not match the cards are turned back.",
        "Keep going until all the monsters are turned over.",
        "Try to remember where you have seen which monsters, so you can use them to make a match."
    ]
    for (let i = 0; i < listItems.length; i++) {
        let listItem = document.createElement("li");
        listItem.innerHTML = listItems[i];
        instructionsList.appendChild(listItem);
    };

    instructions.appendChild(instructionsList);

    //create the button
    let closeBtn = document.createElement("button");
    closeBtn.classList.add("close-btn");
    instructions.appendChild(closeBtn);
    closeBtn.innerHTML = "Close";

    //remove element when close button clicked and reenable instructions button
    function closeBtnClick(event) {
        instructionsDiv.removeChild(instructions);
        document.getElementById("instructions-btn").disabled = false;
    }
    closeBtn.addEventListener("click", closeBtnClick);
}

// select HTML button element and assign an event listener
let instructionsBtn = document.getElementById("instructions-btn");

instructionsBtn.addEventListener("click", instructionsBtnClick);

// GRID

let gridContainerDiv = document.getElementById("grid-container-div");

let gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");
gridContainerDiv.appendChild(gridContainer);

//add monsters to the grid
let monsters = [
    { src: "./assets/images/demon.png", alt: "Demon", dataName: "Demon" },
    { src: "./assets/images/frankenstein.png", alt: "Frankenstein", dataName: "Frankenstein" },
    { src: "./assets/images/goblin.png", alt: "Goblin", dataName: "Goblin" },
    { src: "./assets/images/mummy.png", alt: "Mummy", dataName: "Mummy" },
    { src: "./assets/images/vampire.png", alt: "Vampire", dataName: "Vampire" },
    { src: "./assets/images/werewolf.png", alt: "Werewolf", dataName: "Werewolf" },
    { src: "./assets/images/witch.png", alt: "Witch", dataName: "Witch" },
    { src: "./assets/images/zombie.png", alt: "Zombie", dataName: "Zombie" },
    { src: "./assets/images/demon.png", alt: "Demon", dataName: "Demon" },
    { src: "./assets/images/frankenstein.png", alt: "Frankenstein", dataName: "Frankenstein" },
    { src: "./assets/images/goblin.png", alt: "Goblin", dataName: "Goblin" },
    { src: "./assets/images/mummy.png", alt: "Mummy", dataName: "Mummy" },
    { src: "./assets/images/vampire.png", alt: "Vampire", dataName: "Vampire" },
    { src: "./assets/images/werewolf.png", alt: "Werewolf", dataName: "Werewolf" },
    { src: "./assets/images/witch.png", alt: "Witch", dataName: "Witch" },
    { src: "./assets/images/zombie.png", alt: "Zombie", dataName: "Zombie" },
]

const shuffleMonsters = monsters => {
    for (let i = monsters.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let k = monsters[i];
        monsters[i] = monsters[j];
        monsters[j] = k;
    }
}
shuffleMonsters(monsters);

for (let monster of monsters) {
    // Create an image element with the url and alt attributes for the front of the car
    let card = document.createElement("div");
    card.classList.add("card");

    let monsterImg = document.createElement("img");
    monsterImg.src = monster.src;
    monsterImg.alt = monster.alt;
    monsterImg.dataset.dataName = monster.dataName;
    monsterImg.classList.add("card-front");

    card.appendChild(monsterImg);

    // Append the image element to the gridContainer div
    gridContainer.appendChild(card);

    // Create an image element with the url and alt attributes for the back of the card

    let backImg = document.createElement("img");
    backImg.src = "./assets/images/face.png";
    backImg.alt = "scary face";
    backImg.classList.add("card-back");

    card.appendChild(backImg);
}

//Timer
let timerId;
let timer;
let timerSpan = document.getElementById('timer');
let timerStarted = false;

function startTimer() {
    if (timerStarted) return;
    timer = 0;
    timerId = setInterval(() => {
        timerSpan.innerHTML = " " + timer + "s";
        timer++;
    }, 1000)
    timerStarted = true;
}

//moves
var moves = 0;

// Flip Cards
let cards = document.getElementsByClassName("card");

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {

    moves++;

    document.querySelector("#moves").textContent = " " + moves;

    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.toggle("flip");

    if (!hasFlippedCard) {
        //first click
        hasFlippedCard = true;
        firstCard = this;
        startTimer();
        return;
    }

    //second click
    secondCard = this;

    checkForMatch();
}

function checkForMatch() {

    let firstDataName = firstCard.children[0].dataset.dataName;
    let secondDataName = secondCard.children[0].dataset.dataName;
    
    let isMatch = firstDataName === secondDataName
    
    isMatch ? disableCards() : unflipCards();
    
    if (document.querySelectorAll('.flip').length === cards.length) {
        clearInterval(timerId); // stop the timer
    
        popUp = document.getElementById("pop-up")
        youWinDiv = document.createElement("div")
        popUp.appendChild(youWin);
        youWin.classList.add("you-win-div")
        let youWin = document.createElement("h3");
        youWin.innerHTML = "You Win!";
        youWinDiv.appendChild(youWin);
        youWin.innerHTML=(`It only took ${timer} seconds \n and ${moves} moves `);
    }
    
    }

function disableCards() {
    firstCard.removeEventListener("click", flipCard)
    secondCard.removeEventListener("click", flipCard)

    resetBoard()
}
function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');

        resetBoard()
    }, 1000);
}
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

for (let card of cards) {
    card.addEventListener("click", flipCard);
}


