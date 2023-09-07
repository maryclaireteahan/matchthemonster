

function instructionsBtnClick(event) {

    // Create the a Div
    const instructions = document.createElement('div');

    // Put the Div inside the HTML element instructions-div
    const instructionsDiv = document.getElementById('instructions-div');
    instructionsDiv.appendChild(instructions);

    // Put a h3 element inside the new Div
    let instructionsHeading = document.createElement("h3");
    instructionsHeading.innerHTML = "Instructions:";
    instructions.appendChild(instructionsHeading);

    // Create and put an ordered list under the h3 element
    let instructionsList = document.createElement("ol");

    let listItems = ['Click 2 cards to turn them over and reveal their monsters.',
        'If the monsters match, they stay turned over.', 'If they do not match the cards are turned back.',
        'You must try remember where you have seen which monsters, so you can use them to make a match.'
    ]
    for (let i = 0; i < listItems.length; i++) {
        let listItem = document.createElement('li');
        listItem.innerHTML = listItems[i];
        instructionsList.appendChild(listItem);
    };


    instructions.appendChild(instructionsList);


    if (instructionsBtn.addEventListener('click', instructionsBtnClick)
        === true) {
        // Change its background color and width
        instructions.style.display = "none";
    } else {
        // instructions style






    

}


//add a button to close the instructions

//create the button
const closeBtn = document.createElement('button');

// Put the Div inside the HTML element instructions-div
instructions.appendChild(closeBtn);

closeBtn.addEventListener('click', closeBtnClick);
closeBtn.innerHTML = "Close";
function closeBtnClick(event) {
    if (closeBtn.addEventListener('click', closeBtnClick)
        === true) {
        // Change its background color and width
        instructions.style.display = "none";
    } else {
        return;
    }
}

instructions.appendChild(closeBtn);

}

// select HTML button element and assign an event listener
let instructionsBtn = document.getElementById('instructions-btn');

instructionsBtn.addEventListener('click', instructionsBtnClick);