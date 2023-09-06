const gridCOntainer = document.querySelector(".grid-container");
const monsters = [];

// images in array

monsters.push(['../images/demon.png','Demon']);
monsters.push(['../images/zombie.png','Zombie']);
monsters.push(['../images/witch.png','witch']);
monsters.push(['../images/ghost.png','ghost']);
monsters.push(['../images/werewolf.png','werewolf']);
monsters.push(['../images/vampire.png','vampire']);
monsters.push(['../images/ogre.png','ogre']);
monsters.push(['../images/dragon.png','dragon']);

const monstersPicklist = [...monsters, ...monsters];
const tileCount = monstersPicklist.length;

let revealedTileCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;


