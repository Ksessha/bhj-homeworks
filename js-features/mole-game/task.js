const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');

let dead = 0;
let lost = 0;

function getHole(index){
    return document.getElementById(`hole${index}`);
}

function checkGameStatus(){
    if(dead>=10){
        alert('Победа! Вы убили 10 кротов!');
        resetGame();
    }
    else if(lost>=5){
        alert('Поражение! Слишком много промахов!');
        resetGame();
    }
}

function resetGame(){
    dead = 0;
    lost = 0;
    deadCounter.textContent = dead;
    lostCounter.textContent = lost;
}
for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);
    
    hole.addEventListener('click', function() {
        if (hole.classList.contains('hole_has-mole')) {

            dead++;
            deadCounter.textContent = dead;
            hole.classList.remove('hole_has-mole');
        } else {
            lost++;
            lostCounter.textContent = lost;
        }

        checkGameStatus();
    });
}

function activateRandomHole() {
    for (let i = 1; i <= 9; i++) {
        getHole(i).classList.remove('hole_has-mole');
    }

    const randomIndex = Math.floor(Math.random() * 9) + 1;
    getHole(randomIndex).classList.add('hole_has-mole');
}

setInterval(activateRandomHole, 800);