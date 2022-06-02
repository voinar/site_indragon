//------------------------
// MAIN JAVASCRIPT FILE
//---------------------
// CONTENTS:
// - navbar responsiveness & functionality
// - navbar language selection
// - hero section typewriter effect
// - locomotive scroll
// - navbar behavior
// - portfolio section slider
//------------------------

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
    navLinks.style.visibility = 'visible';
    navHeader.style.visibility = 'hidden';    
    modalOverlay.classList.remove('hide-container');
    menuVisibility = true;
    bodyScroll.style.position = 'fixed';
}

function hideMenu(){
    navLinks.style.display = 'none';
    navLinks.style.visibility = 'hidden';
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
        
    }
}

navToggle.addEventListener('click', toggleMenu); //mobile view: open-close menu on burger button click
window.addEventListener('load', resetMenuOnLoad); //revert menu to defualt state on page load
window.onresize = reportWindowSize; //watch for viewport change & adjust navbar accordingly
modalOverlay.addEventListener('click', toggleMenu); //hide mobile menu on click outside the menu container

//------------------------
// NAVBAR LANGUAGE SELECTION
//------------------------






//------------------------
// LOCOMOTIVE SCROLL
//------------------------

import LocomotiveScroll from '/node_modules/locomotive-scroll/src/locomotive-scroll.js';

window.addEventListener("load", function(){ 

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
        lerp: 0.08, // Linear Interpolation, 0 > 1 // Try 0.01
    multiplier: 1.4, // Effect Multiplier
    reloadOnContextChange: true,
    touchMultiplier: 2,
    smoothMobile: 0,
    smartphone: {
        smooth: !0,
        breakpoint: 767
    },
    tablet: {
        smooth: !1,
        breakpoint: 1024
    },
});

function updateScrollStatus() {
    setTimeout(function () {
        scroll.update();
        console.log("scroll status updated");
    }, 500);
};

updateScrollStatus();

//apply blur effect to navbar on scroll beyond default position

scroll.on('scroll', (position) => {
    if ((position.scroll.y) > 60) {
        navbar.classList.remove('navbar-initial');
        navbar.classList.add('navbar-alt');
    } else {
        navbar.classList.remove('navbar-alt');
        navbar.classList.add('navbar-initial');
        }
    });

});


//------------------------
// PORTFOLIO NAVIGATION SLIDER
//------------------------

window.addEventListener("load", function(){ //putting the slider function inside this wrapper fixes a glitch resulting from erroneous slider offset calculations

var slider = document.getElementById('slider'),
    sliderItems = document.getElementById('slides'),
    prev = document.getElementById('prev'),
    next = document.getElementById('next');

function slide(wrapper, items, prev, next) {
  var posX1 = 0,
      posX2 = 0,
      posInitial,
      posFinal,
      threshold = 100,
      slides = items.getElementsByClassName('slide'),
      slidesLength = slides.length,
      slideSize = items.getElementsByClassName('slide')[0].offsetWidth,
      firstSlide = slides[0],
      lastSlide = slides[slidesLength - 1],
      cloneFirst = firstSlide.cloneNode(true),
      cloneLast = lastSlide.cloneNode(true),
      index = 0,
      allowShift = true;
  
  // Clone first and last slide
  items.appendChild(cloneFirst);
  items.insertBefore(cloneLast, firstSlide);
  wrapper.classList.add('loaded');
  
  // Mouse events
  items.onmousedown = dragStart;
  
  // Touch events //touchstart events prevent anchor tag from working, disabling till a better fix is in
  // items.addEventListener('touchstart', dragStart);
  items.addEventListener('touchend', dragEnd);
  items.addEventListener('touchmove', dragAction);

  // Click events
  prev.addEventListener('click', function () { shiftSlide(-1) });
  next.addEventListener('click', function () { shiftSlide(1) });
  
  // Transition events
  items.addEventListener('transitionend', checkIndex);

  function dragStart (e) {
    e = e || window.event;
    e.preventDefault();
    posInitial = items.offsetLeft;
    
    if (e.type == 'touchstart') {
      posX1 = e.touches[0].clientX;
    } else {
      posX1 = e.clientX;
      document.onmouseup = dragEnd;
      document.onmousemove = dragAction;
    }
  }

  function dragAction (e) {
    e = e || window.event;
    
    if (e.type == 'touchmove') {
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
    } else {
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
    }
    items.style.left = (items.offsetLeft - posX2) + "px";
  }
  
  function dragEnd (e) {
    posFinal = items.offsetLeft;
    if (posFinal - posInitial < -threshold) {
      shiftSlide(1, 'drag');
    } else if (posFinal - posInitial > threshold) {
      shiftSlide(-1, 'drag');
    } else {
      items.style.left = (posInitial) + "px";
    }

    document.onmouseup = null;
    document.onmousemove = null;
  }
  
  function shiftSlide(dir, action) {
    items.classList.add('shifting');
    
    if (allowShift) {
      if (!action) { posInitial = items.offsetLeft; }

      if (dir == 1) {
        items.style.left = (posInitial - slideSize) + "px";
        index++;      
      } else if (dir == -1) {
        items.style.left = (posInitial + slideSize) + "px";
        index--;      
      }
    };
    
    allowShift = false;
  }
    
  function checkIndex(){
    items.classList.remove('shifting');

    if (index == -1) {
      items.style.left = -(slidesLength * slideSize) + "px";
      index = slidesLength - 1;
    }

    if (index == slidesLength) {
      items.style.left = -(1 * slideSize) + "px";
      index = 0;
    }
    
    allowShift = true;
  }
}

slide(slider, sliderItems, prev, next);

});

// var portfolio3 = document.getElementById("portfolio-3");
// portfolio3.addEventListener('touchend', function(){
//   // happens(e)
//   console.log('touched');
//   window.location = "http://localhost:1234/case-studies/car-rental/index.html";


// });