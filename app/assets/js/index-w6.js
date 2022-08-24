const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    effect: "fade",
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    controller: {
      inverse: true,
    },
  });