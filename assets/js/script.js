const gridContainer = document.querySelector(".grid-container");
const monsters = [];

// images in array

monsters.push(['../images/demon.png', 'Demon']);
monsters.push(['../images/zombie.png', 'Zombie']);
monsters.push(['../images/witch.png', 'witch']);
monsters.push(['../images/ghost.png', 'ghost']);
monsters.push(['../images/werewolf.png', 'werewolf']);
monsters.push(['../images/vampire.png', 'vampire']);
monsters.push(['../images/ogre.png', 'ogre']);
monsters.push(['../images/dragon.png', 'dragon']);

const monstersPicklist = [...monsters, ...monsters];
const tileCount = monstersPicklist.length;

console.log(monstersPicklist);

let revealedTileCount = 0;
let activeTile = null;
let awaitingEndOfMove = false;

// create tiles
function buildTile(monster) {
    const element = document.createElement("div");

    element.classList.add("tile");
    element.setAttribute("data-monster", monster);

    element.addEventListener("click", () => {
        if (awaitingEndOfMove) {
            return;
        }

        element.style.backgroundColor = monster;
    });

    return element;
}

// add the tiles to grid
for (let i = 0; i < tileCount; i++) {
    const randomIndex = Math.floor(Math.random() * monstersPicklist.length);
    const monster = monstersPicklist[randomIndex];
    const tile = buildTile(monster);

    monstersPicklist.splice(randomIndex, 1);
    gridContainer.appendChild(tile);
}


