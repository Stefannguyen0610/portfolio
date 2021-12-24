

$(document).ready(function playSlider() {
    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: false,
        autoplaySpeed: 1800,
        prevArrow:'.prev-arrow',
        nextArrow:'.next-arrow',
        lazyLoaded:true,
        responsive: [
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 3,
            }
          },
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      });
      
});

// menu

const toggleMenu = () => {
  const menu = document.querySelector('.menu')
  menu.classList.add('active-menu')
}

const closeMenu = () => {
  const menu = document.querySelector('.menu')
  menu.classList.remove('active-menu')
}

let tl=gsap.timeline({defaults: {ease: "SlowMo.easeOut"}});

tl.fromTo(".elipse", {opacity:0}, {opacity:1, duration: 0.8, ease: "power2.out"} ,)
tl.to("#create" , {y:'0%', duration: 0.9, stagger:0.2, ease: "expo.out"});

gsap.to("#sun", {
  scrollTrigger: {
    trigger:".sun",
    start: "top center",
    end: "bottom top",
  },
  y:'0%',
  duration: 0.9,
  ease: "expo.out",
})

gsap.to("#startin", {
  scrollTrigger: {
    trigger:"#anim",
    start: "top center",
    end: "bottom top",
  },
  y:'0%',
  duration: 0.9,
  delay: 0,
  ease: "expo.out",
  stagger: .2,
})

gsap.to("#work", {
  scrollTrigger: {
    trigger:".work",
    start: "top center",
    end: "bottom top",
  },
  y:'0%',
  duration: 0.9,
  delay: 0,
  ease: "expo.out",
  stagger: .2,
})








