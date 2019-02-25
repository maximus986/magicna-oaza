$(document).ready(function() {
  //Target DOM elements
  const hamburger = $('.hamburger');
  const submenuTogglerL1 = $('.submenu-toggler-level-1');
  const submenuTogglerL2 = $('.submenu-toggler-level-2');
  const submenuL1 = $('.submenu-level-1');
  const submenuL2 = $('.submenu-level-2');
  const searchIcon = $('.search-icon');
  const searchForm = $('.search-form');
  const smallCartIcon = $('.small-cart-icon');
  const overlay = $('.overlay-body');
  const smallCart = $('.small-cart-content');
  const smallCartProducts = $('.small-cart-products');

  //Animate hamburger button
  hamburger.click(function() {
    $(this).toggleClass('is-active');
  });

  //Toggle nav submenu
  submenuTogglerL1.click(function(e) {
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
  submenuTogglerL2.click(function(e) {
    e.preventDefault();
    $(this)
      .parent()
      .next()
      .fadeToggle();
    $(this).toggleClass('fa-angle-double-right fa-angle-double-left');
  });

  // Show header search from
  searchIcon.click(function() {
    $(this)
      .next('.search-form')
      .fadeToggle();
  });

  //Show small cart
  smallCartIcon.click(function(e) {
    $(this)
      .next()
      .addClass('active');
    overlay.show();
    searchForm.hide();
    e.preventDefault();
  });

  overlay.click(function() {
    $(this).hide();
    smallCart.removeClass('active');
  });

  //Custom scrollbar
  smallCartProducts.mCustomScrollbar({
    theme: 'minimal-dark'
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
