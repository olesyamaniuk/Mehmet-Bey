
$(function () {
  $('.blog__list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: true,
    centerMode: true,
    cssEase: 'linear',
    prevArrow: '.blog__list-left',
    nextArrow: '.blog__list-right',
    
  });
});

$(function () {
  $('.reviews__list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 1000,
    dots: true,
    centerMode: true,
    cssEase: 'linear',
    prevArrow: '.reviews__list-left',
    nextArrow: '.reviews__list-right',
    
  });
});







