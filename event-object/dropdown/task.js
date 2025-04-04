window.onload = function() {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(function(dropdown) {
      const valueElement = dropdown.querySelector('.dropdown__value');
      const listElement = dropdown.querySelector('.dropdown__list');
      const items = dropdown.querySelectorAll('.dropdown__item');
      
      if (!valueElement || !listElement || items.length === 0) {
        console.log('Не найдены элементы dropdown', dropdown);
        return;
      }
      
      valueElement.addEventListener('click', function(e) {
        e.stopPropagation(); 
        listElement.classList.toggle('dropdown__list_active');
      });

      items.forEach(function(item) {
        const link = item.querySelector('.dropdown__link');
        
        item.addEventListener('click', function(e) {
          e.preventDefault(); 
          e.stopPropagation(); 
          
          valueElement.textContent = link.textContent;
          listElement.classList.remove('dropdown__list_active');
        });
      });
    });
    document.addEventListener('click', function() {
      document.querySelectorAll('.dropdown__list').forEach(function(list) {
        list.classList.remove('dropdown__list_active');
      });
    });
  };