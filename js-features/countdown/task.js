const timerElement = document.getElementsById('timer');

let time = parseInt(timerElement.textContent);

function UpdateTime(){
    time--;
    timerElement.textContent = time;

    if(time<=0){
        clearInterval(timerInterval);
        alert('Вы победили в конкурсе!');
    }
}
const timerInterval = setInterval(updateTimer, 1000);