/**const instructions = document.createElement('div');

const instructionsBtn = document.getElementById("instructions-btn");




  instructions.textContent = 'Click 2 cards to turn them over and reveal their fruit.'
  /** If the fruits match, they stay turned over.
  If they do not match the cards are turned back.
  You must try remember where you have seen which fruits, so you can use them to make a match.
  
  You must try to match all the fruit in as few clicks as possible.';**

  const instructionsDiv = document.getElementById('instructions-div');
  instructionsDiv.appendChild(instructions);

**/

function instructionsBtnClick (event) {
    const instructions = document.createElement('div');

    const instructionsDiv = document.getElementById('instructions-div');
    instructionsDiv.appendChild(instructions);

    let instructionsHeading = document.createElement("h3");
    instructionsHeading.innerHTML = "Instructions:";
    instructions.appendChild(instructionsHeading);

    letinstructionsList = document.createElement("ol");

    let listItems = ['Click 2 cards to turn them over and reveal their fruit.',
    'If the fruits match, they stay turned over.',  'If they do not match the cards are turned back.',
    'You must try remember where you have seen which fruits, so you can use them to make a match.'
    ]
    listItems.innerHTML = listItems;

    instructionsHeading.appendChild(listItems);

  }
  
  let instructionsBtn = document.getElementById('instructions-btn');

  instructionsBtn.addEventListener('click', instructionsBtnClick); 



/**
    let body = document.body;

    // Create a new heading
    let newHeading = document.createElement("h3");

    // Set its innerHTML
    newHeading.innerHTML = "Shopping List:";

    // Add it to the body
    body.appendChild(newHeading);

    // Now make the new list
    let shoppingList = document.createElement('ul');

    // Create an array of items to add
    let shoppingItems = ['Milk', 'Butter', 'Eggs'];

    // Loop through the array and create <li> elements
    for (let i = 0; i < shoppingItems.length; i++) {
        let listItem = document.createElement('li');
        listItem.innerHTML = shoppingItems[i];
        shoppingList.appendChild(listItem);
    };

    // Now append the whole new list to the body
    body.appendChild(shoppingList);**//