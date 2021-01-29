$(document).ready(function(){
    $('.slider-1--js').slick({
        dots: true,
        arrows: false,
    });
    // use
    $('.slider-2--js').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        infinite: false,
        nextArrow: '.slider2__btn__right',
        prevArrow: '.slider2__btn__left',
    });
    // use
    $('.slider-3--js').slick({
        dots: false,
        arrows: true,
        slidesToShow: 3,
        infinite: false,
        responsive: [
          {
            breakpoint: 721,
            settings: {
              slidesToShow: 1.5,
            }
          }
        ]
    });
    // use
    $('.slider-4--js').slick({
      dots: true,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: false,
      responsive: [
        {
          breakpoint: 721,
          settings: {
            dots: false,
            slidesToShow: 1.5,
            slidesToScroll: 1,
            arrows: false,
          }
        }
      ]
    });
    $('.slider-5--js').slick({
      dots: false,
      arrows: true,
      slidesToShow: 1,
      infinite: true,
    });
    $('.slider-6--js').slick({
      dots: false,
      arrows: true,
      slidesToShow: 1,
      infinite: false,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            arrows: false,
            dots: true,
          }
        }
      ]
    });
    $('.slider-7--js').slick({
      dots: false,
      arrows: true,
      slidesToShow: 2,
      infinite: false,
      nextArrow: '.sl-7--right',
      prevArrow: '.sl-7--left',
      responsive: [
          {
            breakpoint: 460,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
    });
    $('.slider-8--js').slick({
      dots: false,
      arrows: true,
      slidesToShow: 2,
      infinite: false,
      nextArrow: '.sl-8--right',
      prevArrow: '.sl-8--left',
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 1,
              dots: true,
              arrows: false,
            }
          }
        ]
    });
});