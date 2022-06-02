//------------------------
// PRELOADER MASK FADE IN
//------------------------

const introMask = document.querySelector('.intro-mask');

function addMaskFadeOut() {
    setTimeout(function () {
        introMask.classList.add('custom-fade-out');
      }, 1000);
}

function removeIntroMask() {
    setTimeout(function () {
        introMask.style.display = 'none';
      }, 2000);
}

addMaskFadeOut(); 
window.addEventListener('load', removeIntroMask());
