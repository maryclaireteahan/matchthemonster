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
        "You must try remember where you have seen which monsters, so you can use them to make a match."
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

let gridContainer = document.createElement("div");
let gridContainerDiv = document.getElementById("grid-container-div");
gridContainer.classList.add("grid-container");
gridContainerDiv.appendChild(gridContainer);
