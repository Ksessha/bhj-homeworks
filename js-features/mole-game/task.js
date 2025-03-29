const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');
const holes = document.querySelectorAll('.hole');

let dead = 0;
let lost = 0;
let gameInterval = null;
let currentActiveHole = null;

function resetGame() {
    dead = 0;
    lost = 0;
    deadCounter.textContent = dead;
    lostCounter.textContent = lost;
    
    if (currentActiveHole) {
        currentActiveHole.classList.remove('hole_has-mole');
        currentActiveHole = null;
    }
}

function activateRandomHole() {
    if (currentActiveHole) {
        currentActiveHole.classList.remove('hole_has-mole');
    }
    let newHole;
    do {
        const randomIndex = Math.floor(Math.random() * holes.length);
        newHole = holes[randomIndex];
    } while (newHole === currentActiveHole && holes.length > 1);
    

    newHole.classList.add('hole_has-mole');
    currentActiveHole = newHole;
}

function handleHoleClick(e) {
    const hole = e.target;
    
    if (hole.classList.contains('hole_has-mole')) {
        dead++;
        deadCounter.textContent = dead;
        hole.classList.remove('hole_has-mole');
        currentActiveHole = null;
    } else {

        lost++;
        lostCounter.textContent = lost;
    }
    
    if (dead >= 10) {
        clearInterval(gameInterval);
        alert('Победа! Вы убили 10 кротов!');
        resetGame();
        startGame();
    } else if (lost >= 5) {
        clearInterval(gameInterval);
        alert('Поражение! 5 промахов!');
        resetGame();
    }
}

function initGame() {
    holes.forEach(hole => {
        hole.addEventListener('click', handleHoleClick);
    });
}


function startGame() {
    resetGame();
    gameInterval = setInterval(activateRandomHole, 1000);
}

initGame();
startGame();