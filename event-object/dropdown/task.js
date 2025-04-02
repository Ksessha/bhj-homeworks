const btn = document.querySelector('.dropdown__btn');
const content = document.querySelector('.dropdown__content');
const options = document.querySelectorAll('.dropdown__option');


btn.addEventListener('click', () => {
    content.classList.toggle('show');
});

options.forEach(option => {
    option.addEventListener('click', () => {
        btn.textContent = option.textContent;
        content.classList.remove('show');
    });
});


document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
      content.classList.remove('show');
    }
});