function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=t.parcelRequiredc16;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequiredc16=o);var s=o("VN4ea"),l=o("8wD1l");const d=document.querySelector(".navbar"),a=document.querySelector(".nav-toggle"),r=document.querySelector(".nav-links"),c=document.querySelector(".nav-header"),u=document.querySelector(".modal-overlay"),f=document.querySelector("body");window.innerWidth;var v=!1;function y(){v?v&&(r.style.display="none",c.style.visibility="visible",u.classList.add("hide-container"),v=!1,f.style.position="relative"):(r.style.display="flex",c.style.visibility="hidden",u.classList.remove("hide-container"),v=!0,f.style.position="fixed")}function m(){u.classList.remove("show-container"),u.classList.add("hide-container")}a.addEventListener("click",y),window.addEventListener("load",(function(){})),window.onresize=function(){var e=window.innerWidth;768==e||e>768?(m(),r.style.display="flex",c.style.visibility="visible",a.style.visibility="hidden",a.style.transition="0s",v=!1):e<768&&0==v?(m(),r.style.display="none",c.style.visibility="visible",a.style.visibility="visible",a.style.transition="0.3s"):e<768&&1==v&&(u.classList.remove("hide-container"),u.classList.add("show-container"),r.style.display="flex",a.style.visibility="visible",a.style.transition="0.3s",a.style.top="2rem")},u.addEventListener("click",y);const p=document.querySelector(".intro-mask");window.addEventListener("load",(function(){setTimeout((function(){p.classList.add("custom-fade-in")}),1e3)})),window.addEventListener("load",(function(){setTimeout((function(){p.remove()}),2e3)}));const h=new s.default({el:document.querySelector("[data-scroll-container]"),smooth:!0,lerp:.08,multiplier:1.4,reloadOnContextChange:!0,touchMultiplier:2,smoothMobile:0,smartphone:{smooth:!0,breakpoint:767},tablet:{smooth:!1,breakpoint:1024}});setTimeout((function(){h.update(),console.log("scroll status updated")}),500),h.on("scroll",(e=>{e.scroll.y>60?(d.classList.remove("navbar-initial"),d.classList.add("navbar-alt")):(d.classList.remove("navbar-alt"),d.classList.add("navbar-initial"))})),new(e(l))("#typewriter",{strings:["Reinvent","Recreate","Rediscover"],autoStart:!0,loop:!0,delay:70}),function(e,t,n,i){var o,s,l=0,d=0,a=t.getElementsByClassName("slide"),r=a.length,c=t.getElementsByClassName("slide")[0].offsetWidth,u=a[0],f=a[r-1],v=u.cloneNode(!0),y=f.cloneNode(!0),m=0,p=!0;function h(e){(e=e||window.event).preventDefault(),o=t.offsetLeft,"touchstart"==e.type?l=e.touches[0].clientX:(l=e.clientX,document.onmouseup=w,document.onmousemove=L)}function L(e){"touchmove"==(e=e||window.event).type?(d=l-e.touches[0].clientX,l=e.touches[0].clientX):(d=l-e.clientX,l=e.clientX),t.style.left=t.offsetLeft-d+"px"}function w(e){(s=t.offsetLeft)-o<-100?b(1,"drag"):s-o>100?b(-1,"drag"):t.style.left=o+"px",document.onmouseup=null,document.onmousemove=null}function b(e,n){t.classList.add("shifting"),p&&(n||(o=t.offsetLeft),1==e?(t.style.left=o-c+"px",m++):-1==e&&(t.style.left=o+c+"px",m--)),p=!1}t.appendChild(v),t.insertBefore(y,u),e.classList.add("loaded"),t.onmousedown=h,t.addEventListener("touchstart",h),t.addEventListener("touchend",w),t.addEventListener("touchmove",L),n.addEventListener("click",(function(){b(-1)})),i.addEventListener("click",(function(){b(1)})),t.addEventListener("transitionend",(function(){t.classList.remove("shifting"),-1==m&&(t.style.left=-r*c+"px",m=r-1);m==r&&(t.style.left=-1*c+"px",m=0);p=!0}))}(document.getElementById("slider"),document.getElementById("slides"),document.getElementById("prev"),document.getElementById("next")),navigationLeft.addEventListener("click",scrollLeft),navigationRight.addEventListener("click",scrollRight);
//# sourceMappingURL=thankyou.5ee3a8da.js.map
