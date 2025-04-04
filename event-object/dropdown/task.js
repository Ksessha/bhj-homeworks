// 1. Ждём полной загрузки страницы
window.onload = function() {
    // 2. Находим все dropdown-меню на странице
    const dropdowns = document.querySelectorAll('.dropdown');
    
    // 3. Для каждого меню на странице
    dropdowns.forEach(function(dropdown) {
      // 4. Находим элементы внутри текущего dropdown
      const valueElement = dropdown.querySelector('.dropdown__value');
      const listElement = dropdown.querySelector('.dropdown__list');
      const items = dropdown.querySelectorAll('.dropdown__item');
      
      // 5. Проверяем, что все элементы существуют
      if (!valueElement || !listElement || items.length === 0) {
        console.log('Не найдены элементы dropdown', dropdown);
        return;
      }
      
      // 6. Обработчик клика по значению (открытие/закрытие)
      valueElement.addEventListener('click', function(e) {
        e.stopPropagation(); // Предотвращаем всплытие
        listElement.classList.toggle('dropdown__list_active');
      });
      
      // 7. Обработчики кликов по пунктам меню
      items.forEach(function(item) {
        const link = item.querySelector('.dropdown__link');
        
        item.addEventListener('click', function(e) {
          e.preventDefault(); // Отменяем переход по ссылке
          e.stopPropagation(); // Предотвращаем всплытие
          
          // 8. Устанавливаем новое значение
          valueElement.textContent = link.textContent;
          
          // 9. Закрываем меню
          listElement.classList.remove('dropdown__list_active');
        });
      });
    });
    
    // 10. Закрытие всех меню при клике вне их области
    document.addEventListener('click', function() {
      document.querySelectorAll('.dropdown__list').forEach(function(list) {
        list.classList.remove('dropdown__list_active');
      });
    });
  };