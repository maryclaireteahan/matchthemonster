const instructions = document.createElement('div');

const instructionsBtn = document.getElementById("instructions-btn");

function instructionsBtnClick (event) {
    console.log('Received the ' + event.type + " event!");
    console.log('"this" currently refers to', this.id);
    console.log('You clicked the button!\n');
  }
  
  instructions.addEventListener('click', instructionsBtnClick); 
  console.log("element clicked");

  instructions.textContent = 'bobby hadz tutorial';

  const instructionsDiv = document.getElementById('instructions-div');
  instructionsDiv.appendChild(instructions);
