$(document).ready(function () {
  $('[data-toggle="offcanvas"]').click(function () {
    $('.row-offcanvas').toggleClass('active')
  });
});
//toggle menu display on click
$('button').on('click', function(){
    $('button').removeClass('active');
    $(this).addClass('selected');
});
/*$('dropdown-item').on('click', function(){
  $('dropdown-item').removeClass('active');
  $(this).addClass('selected');
});*/

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});
var lastScrollTop = 0;
$(window).scroll(function () {
var st = $(this).scrollTop();
if( $(window).scrollTop() > $('.wow') && !($('.wow').hasClass('animated'))){
    $('.wow').addClass('hidden-lg-up');
}
//this is when user scrolls down: hide the class after 500
if (st > lastScrollTop) {
    if ( $(window).scrollTop() > 500){
      $('.wow').removeClass('hidden-lg-up');
    }
}
//this is when user scrools up: before 500 add class
if (st < lastScrollTop) {
    //here 500 is used to make the effect last longer you can make it 50 as you wish to do in OP
    if ( $(window).scrollTop() < 500 && $('.wow') && !($('.wow').hasClass('animated'))){
        
      $('.wow').addClass('hidden-lg-up');
    }
}
if ($(window).scrollTop() == 0){
    $('.wow').removeClass('animated');
}
lastScrollTop = st;
});