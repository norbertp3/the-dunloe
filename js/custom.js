$('.promo-code-link').on('click', function (e) {
    e.preventDefault();
    $(this).next('.form-group').slideToggle();
  });

  $('#guest-widget').on('click', function () {
    $('.guest-widget-buttons-container').show();
  });