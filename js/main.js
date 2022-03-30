//------------------------
// MAIN JAVASCRIPT FILE
//---------------------
// CONTENTS:
// - locomotive scroll
// - navbar behavior
// - portfolio section scroll
//------------------------

//------------------------
// LOCOMOTIVE SCROLL
//------------------------
import LocomotiveScroll from '/node_modules/locomotive-scroll/src/locomotive-scroll.js';

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

//------------------------
// NAVBAR
//------------------------

const navbar = document.querySelector('.navbar');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
const navHeader = document.querySelector('.nav-header');
const modalOverlay = document.querySelector('.modal-overlay');
const bodyScroll = document.querySelector('body');
var intViewportWidth = window.innerWidth;

var menuVisibility = false;

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
        navToggle.style.top = '2rem';
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
    bodyScroll.style.position = 'fixed';
    // console.log(menuVisibility);
}

function hideMenu(){
    navLinks.style.display = 'none';
    navHeader.style.visibility = 'visible';
    modalOverlay.classList.add('hide-container');
    menuVisibility = false;
    bodyScroll.style.position = 'relative';
    // console.log(menuVisibility);
}

//toggle modal overlay
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
    if (intViewportWidth == 768 || intViewportWidth <= 768) {
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

window.addEventListener('scroll', navbarBackgroundHandler); //apply blur effect to navbar on scroll beyond default position

modalOverlay.addEventListener('click', toggleMenu); //hide mobile menu on click outside the menu container


//------------------------
// PORTFOLIO NAVIGATION SCROLL
//------------------------

const navigationLeft = document.querySelector('.navigation-left');
const navigationRight = document.querySelector('.navigation-right');
const navigationArrows = document.querySelector('.navigation-arrows');
const portfolioProjectCards = document.querySelector('.portfolio-project-cards');
var currentMarginOffset = parseInt(window.getComputedStyle(portfolioProjectCards).getPropertyValue('margin-left'));


var portfolioCard = document.querySelector('.portfolioCard');
var newMarginOffset = 0;

function getCardWidth() {
    return portfolioCard.width + 20;
}

// function scrollLeft() {
//     var intViewportWidth = window.innerWidth;
//     navigationRight.style.opacity = "1";
//     navigationLeft.style.opacity = "1";

//     if (intViewportWidth >= 1000) { //scroll behavior for viewport width over 1000px
//         if (currentMarginOffset < 0) {
//             currentMarginOffset += scrollOffset;
//             portfolioProjects.style.marginLeft = currentMarginOffset + "rem";
//         } else {
//             navigationLeft.style.opacity = ".3";
//         }
//     } else if (intViewportWidth < 1000) { //scroll behavior for viewport width under 1000px
//         if (currentMarginOffset < 0) {
//             currentMarginOffset += (scrollOffset + 50);
//             portfolioProjects.style.marginLeft = currentMarginOffset + "rem";
//         } else {
//             navigationLeft.style.opacity = ".3";
//         }
//     }
// }


function scrollLeft() {
    navigationRight.style.opacity = "1";
    navigationLeft.style.opacity = "1";

    currentMarginOffset += getCardWidth();
    portfolioProjectCards.style.marginLeft = currentMarginOffset + "px";
}

function scrollRight() {
    // var intViewportWidth = window.innerWidth;
    navigationRight.style.opacity = "1";
    navigationLeft.style.opacity = "1";

    currentMarginOffset -= getCardWidth();
    portfolioProjectCards.style.marginLeft = currentMarginOffset + "px";

    
    // if (intViewportWidth >= 1000) { //scroll behavior for viewport width over 1000px
            
    //     } else if (currentMarginOffset <= -30) {
    //         navigationRight.style.opacity = ".3";
    //     }
}

// function scrollRight() {
//     var intViewportWidth = window.innerWidth;

//     navigationRight.style.opacity = "1";
//     navigationLeft.style.opacity = "1";

//     if (intViewportWidth >= 1000) { //scroll behavior for viewport width over 1000px
//         if (currentMarginOffset >= -30) {
//             currentMarginOffset -= scrollOffset;
//             portfolioProjects.style.marginLeft = currentMarginOffset + "rem";
//         } else if (currentMarginOffset <= -30) {
//             navigationRight.style.opacity = ".3";
//         }
//     } else if (intViewportWidth < 1000) { //scroll behavior for viewport width under 1000px
//         if (currentMarginOffset >= -30) {
//             currentMarginOffset -= (scrollOffset + 50);
//             portfolioProjects.style.marginLeft = currentMarginOffset + "rem";
//         } else if (currentMarginOffset <= -30) {
//             navigationRight.style.opacity = ".3";
//         }
//     }
// }

navigationLeft.addEventListener('click', scrollLeft);
navigationRight.addEventListener('click', scrollRight);