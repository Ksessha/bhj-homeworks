const timerElement = document.getElementById('timer');

let timeLeft = parseInt(timerElement.textContent);

let timerInterval;

function updateTimer() {
    timeLeft--;
    timerElement.textContent = timeLeft;
    
    if (timeLeft <= 0) {
        clearInterval(timerInterval);
        alert('Вы победили в конкурсе!');
    }
}

timerInterval = setInterval(updateTimer, 1000);