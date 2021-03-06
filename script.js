let menu = document.querySelector('#menuBars');
let navbar = document.querySelector('.navbar');



menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header .navbar a");



window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec => {
      let top = window.scrollY;
      let height = sec.offsetHeight;
      let offset = sec.offsetTop - 150;
      let id = sec.getAttribute('id');

      if (top >= offset && top < offset + height) {
        navLinks.forEach(links => {
          links.classList.remove('active');
          document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
        })
      }

    })

}

document.querySelector('#searchIcon').onclick = () => {
    document.querySelector('#searchForm').classList.toggle('active');
}

document.querySelector('#close').onclick = () => {
    document.querySelector('#searchForm').classList.remove('active');
}






var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    loop:true,
  });



  var swiper = new Swiper(".reviewSlider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    loop:true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    }
  });


// for loader

function loader(){
  document.querySelector('.loaderContainer').classList.add('fade-out');
}
function fadeOut(){
  setInterval(loader, 3000);
}
window.onload = fadeOut;



