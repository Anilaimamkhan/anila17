let bars = document.querySelector(".header .icon i.fa-bars");


let ul = document.querySelector("nav ul");
let times = document.querySelector("ul .fa-times");

bars.onclick = () =>{
bars.classList.toggle("fa-times") ;

   ul.classList.toggle("active");
}
times.onclick = () => {
    ul.classList.remove("active");

}

window.scroll = () => {
  ul.classList.remove("active");
  ul.classList.remove("active");
  bars.classList.remove("fa-times") ;

}



var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



 
var swiper = new Swiper(".slider", {
  spaceBetween: 30,
  slidesPerView: 4,
  autoplay:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
// });

  breakpoints: {
    "200": {
      slidesPerView: 1,
    },
    "540": {
      slidesPerView: 2,
    },
    "768": {
      slidesPerView: 3,
    },
    "1200": {
      slidesPerView: 4,
    },
  },

// });

});
  // header scroll start
let header = document.querySelector(".header");
let top_scroll = document.querySelector(".fa-arrow-up");
const fun = () => {
    header.scrollIntoView({behavior:"smooth"});
}

top_scroll.addEventListener("click", fun);




let accordion = document.querySelectorAll(".accordion-2 .accordion");

accordion.forEach(acco => {
    acco.onclick = () => {
        accordion.forEach(subaccor => {
            subaccor.classList.remove("active");
        });

        acco.classList.add("active")
    }
});