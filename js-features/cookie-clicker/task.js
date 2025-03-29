const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

let isCookieBig = false;

cookie.onlick = function(){
    counter.textContent = parseInt(counter.textContent) + 1;

    if(isCookieBig){
        cookie.width = 200;
    }
    else{
        cookie.width = 220;
    }

    isCookieBig = !isCookieBig;
}