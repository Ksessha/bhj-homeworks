class Tabs {
    constructor(container) {
      this.container = container;
      this.tabs = container.querySelectorAll('.tab');
      this.contents = container.querySelectorAll('.tab__content');
      this.registerEvents();
    }
  
    registerEvents() {
      this.tabs.forEach((tab, index) => {
        tab.addEventListener('click', (event) => {
          event.preventDefault();
          this.switchTab(index);
        });
      });
    }
  
    switchTab(activeIndex) {
      this.tabs.forEach(tab => tab.classList.remove('tab_active'));
      this.contents.forEach(content => content.classList.remove('tab__content_active'));
      this.tabs[activeIndex].classList.add('tab_active');
      this.contents[activeIndex].classList.add('tab__content_active');
    }
  }
  
  document.querySelectorAll('.tab__navigation').forEach(nav => {
    new Tabs(nav.closest('.tab__container') || document.body);
  });