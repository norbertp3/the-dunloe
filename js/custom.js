$(document).ready(function() {
  $('.promo-code-link').on('click', function (e) {
    e.preventDefault();
    $(this).next('.form-group').slideToggle();
  });

  $('#guest-widget').on('click', function () {
    $('.guest-widget-buttons-container').show();
  });

  if ($(window).width() >= 992) {
    $(".home__contant-info").each(function(){
        var largest = 0;
        $(this).find(".home__contant-info__card--p").each(function(){
        var findHeight = $(this).height();
        if(findHeight > largest){
            largest = findHeight;
        }
        });
        $(this).find(".home__contant-info__card--p").css({"height":largest+"px"});
    });
  }

  if ($(window).width() <= 1169) {
    // $(".generic__img-title-text-row-full-width__img--reverse").detach().insertBefore(".generic__img-title-text-row-full-width__content__text--reverse");
    $(this).closest('.generic__img-title-text-row-full-width--reverse').find('.generic__img-title-text-row-full-width__img--reverse').detach().insertBefore($(this).closest('.generic__img-title-text-row-full-width__content__text--reverse'));
    $("#overlapDetach").detach().insertBefore($("#overlapAttach"));
    $(".nav-modal__item").on('click', function () {
      $(this).find('.nav-modal__item__dropdown').slideToggle();
      $(this).toggleClass('nav-modal__item__open');
      $(this).find('.nav-modal__item__chevron').toggleClass('nav-modal__item__chevron__open');
    });
  }
  
});
