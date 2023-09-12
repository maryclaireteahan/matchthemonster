# Match the Monster!

![Responsive screenshot](/readme/documentation/supp-images/amiresponsive.png)

# The purpose with this project

Match the Monster! is a fun halloween themed memory game. The purpose of the game is the challenge the player to match all 8 pairs of monsters in as few moves, and as little time as possible. The user interface is clean and simple. There is no distracting imagery or features so the focus is kept on the game. The game itself is straightforward, with fun monster images and the ability to see how many moves you've made and how much time you've spent on the game so far.

The game has one screen, the game, and two pop-ups, the rules and a congratulatory "You Win!" message along with your score.

Target audience: All individuals that want a fun straight forward game to play.

This project is the second of five projects that needs to be completed in order to receive a diploma in Software Development from The Code Institute.

Required technologies are HTML5, CSS3 and JavaScript.

A live version of the project can be found here - https://maryclaireteahan.github.io/matchthemonster/

# Table of Content

+ [UX](#ux "UX")
  + [User Demographic](#user-demographic "User Demographic")
  + [User Stories](#user-stories "User Stories")
    + [New Players](#new-players "New Players")
    + [Old Players](#old-players "Old Players")
  + [Player Goals](#player-goals "Player")
  + [Project Requirements](#project-requirements "Project Requirements")
  + [Design](#design "Design")
    + [Design Discovery Phase](#design-discovery-phase "Design Discovery Phase")
    + [Colours](#colours "Colours")
    + [Typography](#typography "Typography")
    + [Images](#images "Images")
+ [Features](#features "Features")
  + [Existing Features](#existing-features "Existing Features")
    + [Game Screen](#game-screen "Game Screen")
    + [You Win Pop-up](#game-screen "You Win Pop-up")
    + [Rules Pop-up](#end-screen "Rules Pop-up")
  + [Features Left to Implement](#features-left-to-implement "Features Left to Implement")
+ [Technologies used](#technologies-used "Technologies used")
+ [Testing](#testing "Testing")
  + [Validator Testing](#validator-testing "Validator Testing")
  + [Unfixed Bugs](#unfixed-bugs "Unfixed Bugs")
+ [Development and Deployment](#development-and-deployment "Development and Deployment")
+ [Content](#content "Content")
+ [Media](#media "Media")
+ [Credits](#credits "Credits")

## UX

### User Demographic

This game is ment for:

 - All individuals, regarding age, that wants to play a straightforward, halloween themed game.

### User Stories

The user stories between new and old players differ just slightly since it is a simple game.

#### New players

 - I want to try the game.
 - I want to win the game
 - I want to match the 8 pairs in fewer moves and in less time than my last try.

#### Old players

 - I want to match the 8 pairs in fewer moves and in less time than my last try.
 - I want to win the game.

### Player goals

 - To find all 8 pairs in as few moves and as little time as possible.

### Project Requirements

 - To build an interactive front-end site that responds to user actions. The user should engage actively by altering data and how the site displays. The development process needs to be well documented through a version controls system such as GitHub and contain HTML5, CSS3 and JavaScript.

### Design

During the thought process regarding design a decision was taken to keep the design as minimalistic as possible. Being a memory game the concept of ”less is more” was adapted with the purpose to minimise player distraction. The game is ment to be a fast playing game and there for it does not contain any animations that could lead to frustration from a player perspective.

#### Design Discovery Phase

Balsamiq was used as a tool during the discovery phase in order to understand how the design could be in correlation to gamin experience. Several different colour palettes where tested before the final choice was made. Simplicity and friendly were two keywords used to determine the final design suggestion.

The game consists of three screens, Start, Game and End. The final version of the wireframe and design are presented below this text.

Game Screen

![Game Screen](/readme/documentation/wireframes/game.png)

End Pop-up

![End Pop-up](/readme/documentation/wireframes/youwin.png)

Rules Pop-up

![Rules Pop-up](/readme/documentation/wireframes/rules.png)

#### Colours

The colour palette was created using [Coolors](https://coolors.co/).

![Colour Palette](/readme/documentation/supp-images/colorpalette.png)

#### Typography

Font chosen for the project is [Neucha](https://fonts.googleapis.com/css2?family=Neucha&display=swap)

#### Images
The game cards are using icons created by wanicon from [flaticon](https://www.flaticon.com/).
- [Demon] - (https://www.flaticon.com/free-icons/devil)
- [Vampire] -(https://www.flaticon.com/free-icons/vampire)
- [Zombie] - (https://www.flaticon.com/free-icons/spooky)
- [Ghost] - (https://www.flaticon.com/free-icons/ghost)
- [Death] - (https://www.flaticon.com/free-icons/death)
- [Frankenstein] - (https://www.flaticon.com/free-icons/frankenstein)
- [Clown] - (https://www.flaticon.com/free-icons/spooky)
- [Mummy] - (https://www.flaticon.com/free-icons/mummy)

The the image for the back of the cards and the favicon is also created by wanicon and converted on [Favicon](https://favicon.io/)
- [Pumpkin] - (https://www.flaticon.com/free-icons/pumpkin)"

[Back to top](#matchthemonster!)

## Features 

Match the Monster! consists of one game screen and two pop-ups:

 - Game Screen
 - You Win Pop-up
 - Rules Pop-up

When Match the Monster! the game board is created and shuffled. The player ends up at the end screen at either a ”Win” or a ”Loss”.

### Existing Features

#### Game Screen

The Game Screen consists of a header and a paragraph that contains the games main title and the rules. Other elements are:

 - Text that tells player to enter name, this is optional
 - Input field for player name (optional)
 - Start button that takes the player to the main board and shuffles the deck.

![Game Screen](/readme/documentation/supp-images/site/mainscreen.png)

#### You Win Pop-up

The You Win Pop-up has two elements:

 - Timer bar - Counts from 0 to 100 and graphically displays the counting by moving a bar from left to right. The darker colour of the bar makes the timer visible in ”the corner of the eye” of the player and he/she does not have to look away from the game board.

 - Game board - At start 20 cards with symbols are shuffled and distributed across the board. The game starts the moment the game screen is visible to the player.

![You Win](/assets/images/readme-images/game-screen.png)

#### Rules Pop-up

Quick game is a linear game and all players end up at the end screen either the loose or win. Messages differ depending on win or loss. If a player does not enter a player name the standard player name of the game appears. The end screen displays:

 - Header that tells the player if they won or lost.
 - Paragraph telling the player how many pairs they were able to match.
 - Paragraph telling the player how many tries it took to find the pairs.
 - Paragraph with two different messages depending on win/lose.
 - Play again button that generates a new game board and shuffles the cards.
 - Quit button that takes the player to the start screen

![Rules](/assets/images/readme-images/end-screen.png)

### Features Left to Implement

- Future version of this game will contain database with high scores.
- Two more game modes, one harder and one easier.

[Back to top](#matchthemonster!)

## Technologies used

- [HTML](https://en.wikipedia.org/wiki/HTML)
- [CSS](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/javascript)

## Testing 

- Initial testing showed that the function I used to create the game cards did not get the correct information from my main game array. The cards was not generated properly. I struggled a lot with this and made several attempts to change the information in the array but nothing seemed to work.

  - The solution to this problem was simpler than I first expected. My Array contains the class names of 10 different FontAwesome icons and my function did not generate any inner HTML in the DIV-tags that are the cards. After a change in the function so that it adds a i-tag with a class attribute from the array solved the issue.

- Game Card not responding to clicks.

  - My event listener was not correct and placed outside the function that generates the cards.

- Console log constantly gave an error due ot missing favicon. I figured that this is either connected to the Code Institute template or to GitPod. 

  - I added the favicon from ”Love Maths” and that removed the error. Later I updated with my own favicon.

- Selected cards do not change colour upon clicks

  - I was not able to correctly identify the correct card (div) and it’s inner HTML. The solution was to get the ID of the selected DIV-tag and change the attribute color using this.getAttribute.

- Game cards did not compare correctly. All cards are considered to be a match.

  - When comparing 0 and 1 in the Array with selected cards all were a match. It took me some time to figure out why. After a console.log I noticed that the value of both cards were set to Object. I tried to convert the entries in the Array to strings and strings became identical as well HTMLObject. I resorted to W3 Schools and found an attribute called data- that could be applied with almost any value. I had to go back to the function that generates the board and added the attribute data-id with the same value as the class name of the icons. This value was then pushed in the array of selected cards and the matchmaking worked.

- Upon restart of the game from the End screen or the scenario End Screen - Quit - Start. The game board consisted of 40 cards instead of 20. For each try it added a new set of cards.

  - I wrote a function that clears all inner HTML for the DIV that is the main game board and called that function upon restart and quit.

- The game card are not re-shuffeling when you press Play Again.

  - The line of code that shuffles and creates the variable cardDeck was not placed inside the function that generates the board. When it was moved there the bug was fixed.

- The End Screen flickers when the timer reaches 100.

  - A loop was created due to badly placed console.log and the fact that the timer restarted in the background. Added a stop to the timer at won game and removed the console.log

- If a player wins a game, plays again and looses the messages is still that one of a win.
  - Made a function that restores the message and cal the function from the Quit and Play again button.

This list contains the major bugs. There has been several smaller ones connected to misspelled syntaxt and such that has been solved in under 1-2 minutes.

### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C Validator](https://validator.w3.org/nu/#textarea)

![W3C HTML Validator](/readme/documentation/supp-images/validator/valhtml.png)

- CSS
  - No errors were returned when passing through the official [(Jigsaw validator)](https://jigsaw.w3.org/css-validator/validator)

![Jigsaw validator](/readme/documentation/supp-images/validator/valcss.png)

- JavaScript
  - No errors or warnings was returned using [(JSHint)](https://jshint.com/) with "New JavaScript features (ES6)" activated in the configuration.

![JSHint](/readme/documentation/supp-images/validator/valjs.png)

- Lighthouse testing

![Lighthouse testing score on desktop](/readme/documentation/supp-images/performance/performancedesktop.png)
![Lighthouse testing score on moblile](/readme/documentation/supp-images/performance/porformancemobile.png)


### Unfixed Bugs

- When checking the responsiveness on https://ui.dev/amiresponsive I spotted that on the largest screen, 1600x992px, when the bottom right card is selected it doesn't flip. 

 [Back to top](#matchthemonster!)


### How this site was deployed

- In the GitHub repository, navigate to the Settings tab, then choose Pages from the left hand menu 
- From the source section drop-down menu, select the main Branch
- Once the main branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment
- Any changes pushed to the master branch will take effect on the live project

### How to clone the repository and push initial commit

- Go to the https://github.com/maryclaireteahan/matchthemonster repository on GitHub 
- Click the "Code" button to the right of the screen, click HTTPs and copy the link there
- Open a GitBash terminal and navigate to the directory where you want to locate the clone
- On the command line, type "git clone" then paste in the copied url and press the Enter key to begin the clone process
- git add .
- git commit -m "Initial commit"
- git push

The live link can be found here - https://maryclaireteahan.github.io/matchthemonster/

## Content 

- All text content in this game has been produced by the author.
- Icons [flaticon](https://www.flaticon.com/)

## Media

Apart from Google Fonts and flaticon no external media are used in the game.

## Credits 

### For code inspiration, design inputs, help and advice.

I have consulted numerous websites, individuals and slack channels to get support for the code. No code block is directly copied but some generates from information I gathered from other developers and sites:

 - [Mdn web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) for information about Arrays and also identifying bugs.
 - [Code Institute - Love Running](https://github.com/Code-Institute-Solutions/love-running-2.0-sourcecode) for inspiration to game footer.
 - [Code Institute - Love Maths](https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode) for inspiration to design of user interface.
 - [DevelopedByEd](https://developedbyed.com/) that taught me in his vides on how to generate a board of cards and display it as a CSS grid.
 - [W3 Schools](https://www.w3schools.com/jsref/met_element_addeventlistener.asp) for understanding Event Listeners. 
 - [W3 Schools](https://www.w3schools.com/w3css/w3css_progressbar.asp) for the developing of my progress bar on the main game screen.

### Acknowledgment

 - [Lauren-Nicole Popich](https://www.linkedin.com/in/lauren-nicole-popich-1ab87539/) My incredible fellow student. Thank you for all discussions, testing, comments, insights and support and leading me out of frustration.
 - [Martina Terlevic](https://www.linkedin.com/in/martinaterlevic/) My fantastic mentor at Code Institute, thank you for your support, feedback and humor.

 And to all the rest of my fellow student that have tested the actual game and provided me with feedback on playability.

 [Am I Responsive](http://ami.responsivedesign.is/) was used to create the image on top of this ReadMe

[Back to top](#matchthemonster!)
