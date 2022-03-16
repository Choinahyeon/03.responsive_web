const toggleBtn = document.querySelector('.navbar .navbar_toggleBtn');
const menu = document.querySelector('.navbar .navbar_menu');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});