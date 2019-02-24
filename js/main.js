$(document).ready(function() {
  //Target DOM elements
  const hamburger = $('.hamburger');
  const submenuTogglerDown = $('.submenu-toggler-down');
  const submenuTogglerRight = $('.submenu-toggler-right');
  const submenuL1 = $('.submenu-level-1');
  const submenuL2 = $('.submenu-level-2');

  //Animate hamburger button
  hamburger.click(function() {
    $(this).toggleClass('is-active');
  });

  //Toggle nav submenu
  submenuTogglerDown.click(function(e) {
    e.preventDefault();
    $(this)
      .parent()
      .next()
      .slideToggle(300);
    $(this).toggleClass('fa-angle-down fa-angle-up');
    if (submenuL1.find('.submenu-toggler-right').hasClass('fa-angle-double-left')) {
      submenuL2.hide();
      submenuL1.find('.submenu-toggler-right').toggleClass('fa-angle-double-left fa-angle-double-right');
    }
  });
  submenuTogglerRight.click(function(e) {
    e.preventDefault();
    $(this)
      .parent()
      .next()
      .slideToggle(100);
    $(this).toggleClass('fa-angle-double-right fa-angle-double-left');
  });

  // // EASE SCROLL

  // $(document).on('click', 'a[href^="#"]', function (event) {
  //     event.preventDefault();
  //     $('html, body').animate({
  //         scrollTop: $($.attr(this, 'href')).offset().top
  //     }, 800);
  // });

  // //ANIMATION

  // function animation() {
  //     var windowHight = $(window).height();
  //     var scroll = $(window).scrollTop();
  //     $('.animation').each(function () {
  //         var position = $(this).offset().top;
  //         var animation = $(this).attr('data-animation');
  //         //var delay = $(this).attr('data-delay');
  //         if (position < scroll + windowHight - 60) {
  //             $(this).addClass(animation);
  //             //$(this).css('animation-delay', delay);
  //         }
  //     });
  // }//end of animation function

  // animation();

  // $(window).scroll(function () {
  //     animation();
  // });
}); //end document.ready
