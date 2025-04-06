document.addEventListener('DOMContentLoaded', function() {
    const fontSizeControls = document.querySelectorAll('.font-size');
    const bookElement = document.getElementById('book');
    
    fontSizeControls.forEach(control => {
        control.addEventListener('click', function(e) {
            e.preventDefault();
            fontSizeControls.forEach(item => {
                item.classList.remove('font-size_active');
            });
            this.classList.add('font-size_active');
            const size = this.dataset.size;
            if (size === 'small') {
                bookElement.classList.add('book_fs-small');
            } else if (size === 'big') {
                bookElement.classList.add('book_fs-big');
            }
        });
    });
});