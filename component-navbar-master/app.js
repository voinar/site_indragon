const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navHeader = document.querySelector('.nav-header');
const modalOverlay = document.querySelector('.modal-overlay');

var menuVisibility = false;
var intViewportWidth = window.innerWidth;

//watch for viewport change & adjust navbar functionality accordingly, reset mobile menu on viewport change
function reportWindowSize() {
    var intViewportWidth = window.innerWidth;
    if (intViewportWidth == 768 || intViewportWidth > 768) {
        hideModalOverlay();
        navLinks.style.display = 'flex';        
        navHeader.style.visibility = 'visible';
        navToggle.style.visibility = 'hidden';
        navToggle.style.transition = '0s';
        menuVisibility = false;
    } else if (intViewportWidth < 768 && menuVisibility == false) {
        hideModalOverlay();
        navLinks.style.display = 'none';
        navHeader.style.visibility = 'visible';
        navToggle.style.visibility = 'visible';
        navToggle.style.transition = '0.3s';
    } else if (intViewportWidth < 768 && menuVisibility == true) {
        showModalOverlay();
        navLinks.style.display = 'flex';
        navToggle.style.visibility = 'visible';        
        navToggle.style.transition = '0.3s';
    }
  }

//mobile view: open-close menu on burger button click
function toggleMenu() {
    if (!menuVisibility) {
        showMenu();
    } else if (menuVisibility) {
        hideMenu();
    }
}

//show-hide mobile menu
function showMenu(){    
    navLinks.style.display = 'flex';
    navHeader.style.visibility = 'hidden';    
    modalOverlay.classList.remove('hide-container');
    menuVisibility = true;
    // console.log(menuVisibility);
}

function hideMenu(){
    navLinks.style.display = 'none';
    navHeader.style.visibility = 'visible';
    modalOverlay.classList.add('hide-container');
    menuVisibility = false;
    // console.log(menuVisibility);
}

//show-hide modal overlay
function showModalOverlay() {
    modalOverlay.classList.remove('hide-container');
    modalOverlay.classList.add('show-container');
}

function hideModalOverlay() {
    modalOverlay.classList.remove('show-container');
    modalOverlay.classList.add('hide-container');
}

//revert menu to defualt state on page load
function resetMenuOnLoad() {
    if (intViewportWidth == 768 || intViewportWidth < 768) {
        hideMenu();
    }
}

//apply blur effect to navbar on scroll beyond default position
function navbarBackgroundHandler() {
    let scroll = this.scrollY;
    if (Math.round(scroll) > 60) {
        navbar.classList.remove('navbar-solid');
        navbar.classList.add('navbar-alt');
    } else if(Math.round(scroll) <= 60) {
        navbar.classList.remove('navbar-alt');
        navbar.classList.add('navbar-solid');
    }
}

navToggle.addEventListener('click', toggleMenu); //mobile view: open-close menu on burger button click

window.addEventListener('load', resetMenuOnLoad); //revert menu to defualt state on page load

window.onresize = reportWindowSize; //watch for viewport change & adjust navbar functionality accordingly

window.addEventListener("scroll", navbarBackgroundHandler); //apply blur effect to navbar on scroll beyond default position

modalOverlay.addEventListener('click', toggleMenu); //hide mobile menu on click outside the menu container