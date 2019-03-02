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
  const owlCarousel = $('.owl-carousel');
  const leadSlider = $('.lead-slider');
  const brandsSlider = $('.brands-slider');
  const topSellersSlider = $('.top-sellers-slider');
  const newestProductsSlider = $('.newest-products-slider');
  const allAgesProductsSlider = $('.all-ages-products-slider');
  const recommendationsSlider = $('.recommendations-slider');
  const header = $('.main-header');
  const mainContent = $('.main-content');

  //Set main-content margin-top depending on header's height
  // $(window).resize(setMainMarginTop);
  // setMainMarginTop();

  // function setMainMarginTop() {
  //   const headerHeight = header.height();
  //   mainContent.css('marginTop', headerHeight);
  // }

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
  searchIcon.click(function(e) {
    $(this)
      .next('.search-form')
      .fadeToggle();
    e.preventDefault();
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

  //Reduce header padding on scroll
  $(window).scroll(function() {
    animateHeader(); //Animate header on window scroll
  });

  animateHeader(); //Animate header on window load

  //Header animation function
  function animateHeader() {
    const scroll = $(window).scrollTop();
    if (scroll > 50) {
      header.removeClass('py-2').css('background', 'rgba(255, 255, 255, 1)');
    } else {
      header.addClass('py-2').css('background', 'rgba(255, 255, 255, 0.7)');
    }
  }

  //Sliders
  if (owlCarousel.length > 0) {
    //Lead slider
    leadSlider.owlCarousel({
      items: 1,
      loop: true,
      autoplay: true
    });
    //Brands slider
    brandsSlider.owlCarousel({
      loop: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      responsive: {
        0: {
          items: 3,
          margin: 30
        },
        400: {
          items: 4,
          margin: 30
        },
        576: {
          items: 6,
          margin: 30
        },
        768: {
          items: 8,
          margin: 30
        },
        1200: {
          items: 10,
          margin: 50
        }
      }
    });
    //Top sellers slider
    topSellersSlider.owlCarousel({
      loop: true,
      autoplay: true,
      autoplayHoverPause: true,
      dots: false,
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 1
        },
        576: {
          items: 2,
          slideBy: 2,
          margin: 10
        },
        992: {
          items: 3,
          slideBy: 3
        },
        1200: {
          items: 4,
          margin: 42,
          slideBy: 4
        }
      }
    });
    //Newest products slider
    newestProductsSlider.owlCarousel({
      loop: true,
      autoplay: true,
      dots: false,
      autoplayHoverPause: true,
      nav: true,
      navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 1
        },
        576: {
          items: 2,
          margin: 10
        },
        992: {
          items: 3
        },
        1200: {
          items: 4,
          margin: 42
        }
      }
    });
    //All ages products slider
    allAgesProductsSlider.owlCarousel({
      loop: true,
      autoplay: true,
      autoplayHoverPause: true,
      dots: true,
      responsive: {
        0: {
          items: 1,
          margin: 10,
          stagePadding: 30
        },
        576: {
          items: 1,
          margin: 20,
          stagePadding: 80
        },
        768: {
          items: 2,
          margin: 20,
          stagePadding: 40
        },
        992: {
          items: 2,
          margin: 20,
          stagePadding: 80
        },
        1200: {
          items: 2,
          margin: 30,
          stagePadding: 100
        }
      }
    });
    //Recommendations slider
    recommendationsSlider.owlCarousel({
      loop: true,
      autoplay: true,
      dots: false,
      autoplayHoverPause: true,
      nav: true,
      navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 1
        },
        576: {
          items: 2,
          margin: 10
        },
        992: {
          items: 3
        },
        1200: {
          items: 4,
          margin: 42
        }
      }
    });
  }

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
