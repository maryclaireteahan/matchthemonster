# Match the Monster!

![Responsive screenshot](/readme/documentation/supp-images/amiresponsive.png)

<h1 align="center">Match the Monster!</h1>

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

 - All individuals that want to play a straightforward, halloween themed game.

### User Stories

The user stories between new and old players differ just slightly since it is a simple game.

#### New players

 - I want to try the game.
 - I want to win the game
 - I want to match the 8 pairs in as few moves and in as little time as possible.

#### Old players

 - I want to match the 8 pairs in fewer moves and in less time than my last try.
 - I want to win the game.

### Player goals

 - To find all 8 pairs in as few moves and as little time as possible.

### Project Requirements

 -  Design an interactive Front-End web application using HTML and CSS and JavaScript based on the principles of user experience design, accessibility and responsivity.
 - Test a front-end web application through the development, implementation and deployment stages.
 - Deploy a Front-End web application to a Cloud platform.
 - Maximise future maintainability through documentation, code structure and organisation.
 - Demonstrate and document the development process through a version control system such as GitHub.
 - Implement Front-End interactivity, using core JavaScript, JavaScript libraries or frameworks.
 

### Design

It was decided that the game design would be fun while also staying simple. Seeing as it is a timed memory game and all focus needs to be kept on the game it made sense for all elements outside the game to be as simple as possible and incorpoate the fun side of the design into the actual game. Initially the backgrounds had spooky images but it seemed too distracting so images were removed from all background areas and they were given a block colour instead. It made sense that the card images should be where the fun comes in. Different images were sourced from the website flaticon which is credited below. Initially the images seemed to clash as they were created by different artists and had different styles. In the end, to keep the style consistent, certain images were replaces so that they were all sourced from the same artist, wanicon, who is credited below.

#### Design Discovery Phase

The game consists of one screen, the game screen, and two pop-ups for rules and a "You Win!" message at the end of the game. The final version of the wireframe and design are presented below this text.

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

![Monsters](/readme/documentation/supp-images/site/monsters.png)

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

## Features 

Match the Monster! consists of one game screen and two pop-ups:

 - Game Screen
 - You Win Pop-up
 - Rules Pop-up

### Existing Features

#### Game Screen

The Game Screen consists of a header and body. In the body are the main title, a grid container with 16 divs that store the cards, there is a timespan and a moves span which track time spent and moves taken. There are two buttons, one which brings up the rules and one which reloads the page. 

![Game Screen](/readme/documentation/supp-images/site/mainscreen.png)

#### You Win Pop-up

The You Win Pop-up tells you how much time and moves it took for you to finish the game. It also featured a close button which removed the pop-up.

![You Win](/readme/documentation/supp-images/site/youwin.png)

#### Rules Pop-up

The rules pop-up consisted of a numbered list of rules for the game. It also featured a close button which removed the pop-up.

![Rules](/readme/documentation/supp-images/site/rules.png)

### Features Left to Implement

- Future version of this game will allow the player to input their name and have their score listed on a score board.
- When a pair of monsters have been matched a scary sound effect will play. Each monster will have their own sound for example, a sinsiter laugh will play when the evil clown cards are matched, a ghostly wail when the ghost cards are matched.

## Technologies used

- [HTML](https://en.wikipedia.org/wiki/HTML)
- [CSS](https://en.wikipedia.org/wiki/CSS)
- [JavaScript](https://en.wikipedia.org/wiki/javascript)

## Testing 

- Page sizes from 320px-1920px

- The console is free from errors

- Rules Button

  - When the user selects the Rules button a div pops up with a numbered list of rules for the game. Underneath is a button that says close.

- Close Button

  - When the user presses the Close button the Rules div is removed. The div can be called upon and removed over and over again using the Rules and Close buttons.

- Restart Button

  - When the user presses the restart button it refreshes the web page.

- Time

  - The Time feature begins timing how long the user spends at the game from the first card they click. It increments in seconds and is shown beside the grid.

- Moves

  - The Moves feature tracks how many moves the user makes from the first card they click until they finish the game. It increments in 1 move per card flip and is shown beside the grid.

- Cards

  - When the user clicks a card it turns over to reveal an image. This card remains like this until a second card clicked. This card turns over to reveal it's image. If the images match the cards stay turned over. If the images don't match the cards flip back.

- End of Game

  - When the user has matched all the cards a div will pop up with the message "You Win!" along with the number of moves and time it took to win. Under this message is another Close button. This button acts in the same way as the Close button in the Rules div. If the user clicks it it will disappear leaving the completed game grid with all cards showing. At this point the user will press the Restart button to play again.

- Moves bug 

  -The feature would only increment in 2s after each second click. While the number of moves showing was correct, it would only update after the second click. My moves increment operand needed to be removed from it's initial function and placed in another one. The feature is now working properly

- Restart Button bug

  - I wanted to include a restart button. When I would press it the cards would flip back over but they wouldn't shuffle, also the timer would start immediately rather than from my first move. I edited the button so that the page reloads when it is pressed.

Cards bug

 - In order to make a match you need to click the first card to flip it and then the second card to flip it. If they don't match they flip back after 1 second and you can move onto your next choices. However, if you manage to click a third and fourth card before the first two cards flip back, it will disable the last two cards clicked. They will remain disabled so the user will be unable to finish the game. I had trouble fixing the bug by removing and reenabling the event listener. I researched my options and saw that I could freeze the clicks by locking the board for the same amount of time as it takes the cards to flip back, 1 sec.


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
![Lighthouse testing score on moblile](/readme/documentation/supp-images/performance/performancemobile.png)


### Unfixed Bugs

- When checking the responsiveness on https://ui.dev/amiresponsive I spotted that on the largest screen, 1600x992px, when the bottom right card is selected it doesn't flip. 

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

 - [Marina Ferreira](https://www.youtube.com/watch?v=ZniVgo8U7ek&t=764s&ab_channel=freeCodeCamp.org) that taught me in her videos how to flip, unflip and match the cards.
 - [W3 Schools](https://www.w3schools.com/jsref/met_element_addeventlistener.asp) for understanding Event Listeners. 
 - [W3 Schools](https://www.w3schools.com/js/js_array_sort.asp) for understanding The Fisher Yates method.
 - [Stack Overflow](https://stackoverflow.com/questions/58627457/disable-all-clicks-on-page-for-a-couple-of-seconds-after-a-function-is-run) for understanding how to freeze the click event listener.

### Acknowledgment

 - Thank you to my mentor Lauren-Nicole who gave me great advice and feedback on how to plan and execute this project and who provided me with lots of pointers on resources to help with coding and testing. I'm grateful for her patience, understanding and ability to bring calm to a stressful situation.

 [Am I Responsive](http://ami.responsivedesign.is/) was used to create the image on top of this ReadMe