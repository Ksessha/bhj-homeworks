const cookie = document.getElementById('cookie');
const clickCounter = document.getElementById('clicker__counter');

let clickCount = 0;
let isBig = false;

function resizeCookie() {
    if (isBig) {
        cookie.width = 200;
    } else {
        cookie.width = 220;
    }
    isBig = !isBig;
}

cookie.addEventListener('click', function() {
    clickCount++;
    clickCounter.textContent = clickCount;

    resizeCookie();
});