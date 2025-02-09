ScrollReveal().reveal('.P1', {
    delay: 100,
    duration: 2500,
    origin: 'top',
    distance: '50px'

});
ScrollReveal().reveal('.P1');

ScrollReveal().reveal('.P2', {
    delay: 100,
    duration: 2500,
    origin: 'top',
    distance: '50px'

});
ScrollReveal().reveal('.P2');

ScrollReveal().reveal('.P3', {
    delay: 100,
    duration: 2500,
    origin: 'top',
    distance: '50px'

});
ScrollReveal().reveal('.P3');

ScrollReveal().reveal('.P4', {
    delay: 100,
    duration: 2500,
    origin: 'top',
    distance: '50px'

});
ScrollReveal().reveal('.P4');


ScrollReveal().reveal('.P5', {
    delay: 100,
    duration: 2500,
    origin: 'top',
    distance: '50px'

});
ScrollReveal().reveal('.P5');


ScrollReveal().reveal('.P6', {
    delay: 100,
    duration: 2500,
    origin: 'top',
    distance: '50px'

});
ScrollReveal().reveal('.P6');

ScrollReveal().reveal('.P7', {
    delay: 100,
    duration: 2500,
    origin: 'top',
    distance: '50px'

});
ScrollReveal().reveal('.P7');

ScrollReveal().reveal('.P8', {
    delay: 100,
    duration: 2500,
    origin: 'top',
    distance: '50px'

});
ScrollReveal().reveal('.P8');

ScrollReveal().reveal('.P9', {
    delay: 100,
    duration: 2500,
    origin: 'top',
    distance: '50px'

});
ScrollReveal().reveal('.P9');

/////// pour image///////

ScrollReveal().reveal('.img2', {
    delay: 100,
    duration: 2500,
    origin: 'bottom',
    distance: '50px'

});
ScrollReveal().reveal('.img2');

ScrollReveal().reveal('.img3', {
    delay: 100,
    duration: 2500,
    origin: 'bottom',
    distance: '50px'

});
ScrollReveal().reveal('.img3');

ScrollReveal().reveal('.img4', {
    delay: 100,
    duration: 2500,
    origin: 'bottom',
    distance: '50px'

});
ScrollReveal().reveal('.img4');

ScrollReveal().reveal('.img5', {
    delay: 100,
    duration: 2500,
    origin: 'bottom',
    distance: '50px'

});
ScrollReveal().reveal('.img5');

ScrollReveal().reveal('.img6', {
    delay: 100,
    duration: 2500,
    origin: 'bottom',
    distance: '50px'

});
ScrollReveal().reveal('.img6');

ScrollReveal().reveal('.img7', {
    delay: 100,
    duration: 2500,
    origin: 'bottom',
    distance: '50px'

});
ScrollReveal().reveal('.img7');

ScrollReveal().reveal('.img8', {
    delay: 100,
    duration: 2500,
    origin: 'bottom',
    distance: '50px'

});
ScrollReveal().reveal('.img8');

ScrollReveal().reveal('.img9', {
    delay: 100,
    duration: 2500,
    origin: 'bottom',
    distance: '50px'

});
ScrollReveal().reveal('.img9');

ScrollReveal().reveal('.img10', {
    delay: 100,
    duration: 2500,
    origin: 'bottom',
    distance: '50px'

});
ScrollReveal().reveal('.img10');


let span=document.querySelector( ".up")
        window.onscroll=function(){
          // console.log(this.scrollY);
          if (this.scrollY >=1000){
            span.classList.add("show")
          }else {
            span.classList.remove("show")

          }
        }
       span.onclick = function(){
        window.scrollTo({
          top:0,
          behavior:"smooth",
        })
       }





