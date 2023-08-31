const swiperMain = new Swiper('.swiperMain', {
    // Optional parameters
    autoplay: true,
    autoplay: {
      delay: 6000,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
});


const swiperProduct = new Swiper('.swiperPopularProducts', {
  spaceBetween: 16,
  slidesPerView: 5,

  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    // when window width is >= 480px
    1024: {
      slidesPerView: 4,
      spaceBetween: 20
    },
    // when window width is >= 640px
    1280: {
      slidesPerView: 5,
      spaceBetween: 16,
    },
    1921: {
      slidesPerView: 6,
      spaceBetween: 16,
    }
  },

  navigation: {
    nextEl: '.product-button-next',
    prevEl: '.product-button-prev',
  },    
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});