function toggleMenu() {
    const nav = document.getElementById('menu');
    const menuIcon = document.querySelector('.menu-icon');
    
    nav.classList.toggle('show');
    menuIcon.classList.toggle('hidden'); 
  }
  
  window.addEventListener('click', function(event) {
    const nav = document.getElementById('menu');
    const menuIcon = document.querySelector('.menu-icon');
    
    if (!menuIcon.contains(event.target) && !nav.contains(event.target)) {
      nav.classList.remove('show');
      menuIcon.classList.remove('hidden');
    }
  });
  