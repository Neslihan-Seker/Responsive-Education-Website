/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
};

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose) {
    navToggle.addEventListener('click', function() {
        navMenu.classList.remove('show-menu')
    });
};
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
    const header =document.getElementById('header')

    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
    
}

window.addEventListener('scroll',scrollHeader)