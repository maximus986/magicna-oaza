$(document).ready(function() {
  //Target DOM elements
  const header = $('.main-header');
  const hamburger = $('.hamburger');
  const submenuTogglerL1 = $('.submenu-toggler-level-1');
  const submenuTogglerL2 = $('.submenu-toggler-level-2');
  const submenuL1 = $('.submenu-level-1');
  const submenuL2 = $('.submenu-level-2');
  const searchIcon = $('.search-icon');
  const searchForm = $('.search-form');
  const smallCartIcon = $('.small-cart-icon');
  const overlayHeader = $('.overlay-header');
  const overlayBody = $('.overlay-body');
  const smallCart = $('.small-cart-content');
  const smallCartProducts = $('.small-cart-products');
  const owlCarousel = $('.owl-carousel');
  const leadSlider = $('.lead-slider');
  const brandsSlider = $('.brands-slider');
  const topSellersSlider = $('.top-sellers-slider');
  const newestProductsSlider = $('.newest-products-slider');
  const allAgesProductsSlider = $('.all-ages-products-slider');
  const recommendationsSlider = $('.recommendations-slider');
  const categorySlider = $('.category-slider');
  const selectGender = $('.select-gender');
  const selectCategory = $('.select-category');
  const phoneImg = $('.phone-img');
  const phoneNumbers = $('.numbers');
  const selectBrand = $('.select-brand');
  const selectAge = $('.select-age');
  const selectSort = $('.select-sort');
  const priceSlider = $('.price-slider');
  const lowValueInput = $('.low-value-input');
  const highValueInput = $('.high-value-input');
  const searchProducts = $('.search-products');
  const searchProductsToggler = $('.search-products-toggler');

  const mainContent = $('.main-content');

  //Set main-content margin-top depending on header's height
  $(window).resize(setMainMarginTop);
  setMainMarginTop();

  function setMainMarginTop() {
    const headerHeight = header.height();
    mainContent.css('marginTop', headerHeight);
    searchProducts.css('top', headerHeight);
  }

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
    overlayHeader.show();
    searchForm.hide();
    e.preventDefault();
  });

  overlayHeader.click(function() {
    $(this).hide();
    smallCart.removeClass('active');
  });

  //Show search products
  searchProductsToggler.click(function(e) {
    $(this)
      .parent()
      .toggleClass('active');
    $(this).toggleClass('fa-angle-right fa-angle-left');
    overlayBody.toggleClass('active');
    searchForm.hide();
    e.preventDefault();
  });

  //Custom scrollbar
  smallCartProducts.mCustomScrollbar({
    theme: 'minimal-dark'
  });

  //Reduce header padding on scroll
  // $(window).scroll(function() {
  //   animateHeader(); //Animate header on window scroll
  // });

  //animateHeader(); //Animate header on window load

  //Header animation function
  // function animateHeader() {
  //   const scroll = $(window).scrollTop();
  //   if (scroll > 50) {
  //     header.addClass('py-2');
  //     // searchProducts.css('top', '100px');
  //   } else {
  //     header.removeClass('py-2');
  //     //searchProducts.css('top', '115px');
  //   }
  // }

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

    //Category slider
    categorySlider.owlCarousel({
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
          items: 4
        }
      }
    });
  }

  //Phone numbers
  if (phoneImg.length > 0) {
    phoneImg.click(function() {
      $(this).toggleClass('mr-3');
      phoneNumbers.toggleClass('active');
    });
  }

  //Select elements
  //Gender
  if (selectGender.length > 0) {
    selectGender.select2({
      minimumResultsForSearch: -1,
      width: '100%'
    });
  }
  //Category
  if (selectCategory.length > 0) {
    selectCategory.select2({
      minimumResultsForSearch: -1,
      width: '100%'
    });
  }
  //Brand
  if (selectBrand.length > 0) {
    selectBrand.select2({
      minimumResultsForSearch: -1,
      width: '100%'
    });
  }
  //Age
  if (selectAge.length > 0) {
    selectAge.select2({
      minimumResultsForSearch: -1,
      width: '100%'
    });
  }
  //Sort
  if (selectSort.length > 0) {
    selectSort.select2({
      minimumResultsForSearch: -1,
      width: '100%'
    });
  }

  // Replace built-in arrow with fa icon
  $('b[role="presentation"]').hide();
  $('.select2-selection__arrow').append('<i class="fa fa-angle-down"></i>');

  //Price input slider
  if (priceSlider.length > 0) {
    priceSlider.jRange({
      from: 0,
      to: 3000,
      width: '88%',
      showLabels: false,
      isRange: true,
      theme: 'theme-blue',
      onstatechange: function(value) {
        getRangeValue(value);
      }
    });

    $(priceSlider).jRange('setValue', '0,3000');

    function getRangeValue(value) {
      const valArr = JSON.parse('[' + value + ']');
      const lowVal = valArr[0];
      const highVal = valArr[1];
      $('.low-val').text(`${lowVal}`);
      $('.high-val').text(`${highVal},00 DIN`);
      lowValueInput.val(lowVal);
      highValueInput.val(highVal);
    }
  }

  //Main form validation
  $(function() {
    $('.main-form').validate({
      highlight: function(element) {
        $(element)
          .closest('.form-group')
          .addClass('has-danger');
        $(element).addClass('form-control-danger');
      },
      unhighlight: function(element) {
        $(element)
          .closest('.form-group')
          .removeClass('has-danger')
          .addClass('has-success');
        $(element)
          .removeClass('form-control-danger')
          .addClass('form-control-success');
      },
      rules: {
        name: {
          required: true,
          rangelength: [2, 20]
        },
        lastname: {
          required: true,
          rangelength: [2, 20]
        },
        email: {
          required: true,
          email: true
        },
        password: {
          required: true,
          minlength: 6
        },
        repassword: {
          required: true,
          minlength: 6,
          equalTo: '#password'
        },
        terms: {
          required: true
        }
      },
      messages: {
        name: {
          required: 'Polje Ime je obavezno',
          rangelength: 'Ime mora biti izmedju 2 i 20 karaktera'
        },
        lastname: {
          required: 'Polje Ime je obavezno',
          rangelength: 'Prezime mora biti izmedju 2 i 20 karaktera'
        },
        email: {
          required: 'Polje Email je obavezno',
          email: 'Molimo unesite validan Email'
        },
        password: {
          required: 'Polje Lozinka je obavezno',
          minlength: 'Polje mora minimalno imati 6 karaktera'
        },
        repassword: {
          required: 'Polje Lozinka je obavezno',
          minlength: 'Polje Ponovi lozinku mora minimalno imati 6 karaktera',
          equalTo: 'Lozinke se ne poklapaju'
        },
        terms: {
          required: 'Polje je obavezno'
        }
      },
      errorElement: 'p',
      errorPlacement: function(error, element) {
        error.appendTo(
          $(element)
            .closest('.form-group')
            .find('.error-msg')
        );
      }
    });
  });
  //Newsletter form validation
  $(function() {
    $('.newsletter-form').validate({
      highlight: function(element) {
        $(element)
          .closest('.form-group')
          .addClass('has-danger');
        $(element).addClass('form-control-danger');
      },
      unhighlight: function(element) {
        $(element)
          .closest('.form-group')
          .removeClass('has-danger')
          .addClass('has-success');
        $(element)
          .removeClass('form-control-danger')
          .addClass('form-control-success');
      },
      rules: {
        newsletter: {
          required: true,
          email: true
        }
      },
      messages: {
        newsletter: {
          required: 'Polje Email je obavezno',
          email: 'Molimo unesite validan Email'
        }
      },
      errorElement: 'p',
      errorPlacement: function(error, element) {
        error.appendTo(
          $(element)
            .closest('.form-group')
            .find('.error-msg')
        );
      }
    });
  });

  //Animation

  function animation() {
    const windowHight = $(window).height();
    const scroll = $(window).scrollTop();
    $('.animation').each(function() {
      const position = $(this).offset().top;
      const animation = $(this).attr('data-animation');
      const delay = $(this).attr('data-delay');
      if (position < scroll + windowHight - 60) {
        $(this).addClass(animation);
        if ($(window).width() > 990) {
          $(this).css('animation-delay', delay);
        }
      }
    });
  } //end of animation function

  animation();

  $(window).scroll(function() {
    animation();
  });
}); //end document.ready
