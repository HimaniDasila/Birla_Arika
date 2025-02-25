AOS.init({
  easing: 'ease-out-in',
  duration: 600,
});

$(document).ready(function () {
  let header = $('header');
  let headerHT = $('header').innerHeight();
  let previousScroll = 0;
  var winWT = $(window).innerWidth();

  var navWT = $('header .nav-hld').innerWidth();
  $('.nav-icon').on('click', function () {
    //return;
    if ($(this).hasClass('open')) {
      resetMobileMenu();
    } else {
      $(this).addClass('open');
      $('header .nav-hld').animate({ right: 0 }, 300);
      $('.menu-overlay').css({ display: 'block' });
      $('body, html').css({ overflow: 'hidden' });
      $('.overlay').css({ display: 'block' });
      lenis.stop();
    }
  });

  $('header .menu-overlay').on('click', function () {
    resetMobileMenu();
  });

  $('header li a').on('click', function () {
    if (winWT <= 1023) {
      resetMobileMenu();
    }
  });

  function resetMobileMenu() {
    $('.nav-icon').removeClass('open');
    $('header .nav-hld').animate({ right: -navWT + 'px' }, 300);
    $('.menu-overlay').css({ display: 'none' });
    $('body, html').css({ overflowY: 'scroll' });
    $('.overlay').css({ display: 'none' });
    lenis.start();
  }

  function setHeaderAnim() {
    const currentScroll = $(this).scrollTop();
    if (currentScroll > previousScroll) {
      // Scrolling down
      header.css('top', -headerHT + 'px'); // Adjust height based on header size
    } else {
      // Scrolling up
      header.css('top', '0');
    }
    previousScroll = currentScroll;
  }

  $(window).on('scroll', function () {
    //setHeaderAnim();
  });
  $(window).resize(function () {
    headerHT = $('header').innerHeight();
    //setHeaderAnim();
  });
  $(window).on('scroll', function () {
    let scrollPosition = $(this).scrollTop(); // Get current scroll position
    let header = $('header'); // Select your header element

    if (scrollPosition > 100) {
      header.addClass('scrolled'); // Add class when scrolled more than 100px
    } else {
      header.removeClass('scrolled'); // Remove class when scrolled back up
    }
  });

  gsap.registerPlugin(ScrollTrigger);
  // Initialize Lenis
  const lenis = new Lenis();
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // Convert time from seconds to milliseconds
  });
  // Disable lag smoothing in GSAP
  gsap.ticker.lagSmoothing(0);

  /* ========================================================================== */
  /* ========================================================================== */

  $('#banner .slider-hld').owlCarousel({
    loop: false,
    nav: false,
    dots: true,
    items: 1,
    lazyLoad: true,
    autoplay: false,
    autoplaySpeed: 2000,
    autoplayTimeout: 5000,
    smartSpeed: 800,
    mouseDrag: false,
  });

  var communitySlider = $('.community-slider');
  communitySlider.owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    items: 1,
    lazyLoad: true,
    autoplay: false,
    autoplaySpeed: 2000,
    autoplayTimeout: 5000,
    smartSpeed: 800,
    mouseDrag: true,
    stagePadding: 280,
    responsive: {
      1440: {
        stagePadding: 280,
      },
      1100: {
        stagePadding: 250,
      },
      1024: {
        stagePadding: 130,
      },
      320: {
        stagePadding: 0,
      },
    },
  });

  if ($('.community-slider').length > 0) {
    function toggleAutoplay(entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          communitySlider.trigger('play.owl.autoplay');
        } else {
          communitySlider.trigger('stop.owl.autoplay');
        }
      });
    }
    var observer = new IntersectionObserver(toggleAutoplay, {
      threshold: 0.5, // Trigger when 50% of the carousel is visible
    });
    observer.observe(document.querySelector('.community-slider'));
    $('.pdf-link').on('click', function () {
      communitySlider.trigger('stop.owl.autoplay');
    });
    $('#downloadBrochure.modal')
      .find('.btn-close')
      .on('click', function () {
        communitySlider.trigger('play.owl.autoplay');
      });
  }

  $('.frame-slider-hld')
    .owlCarousel({
      loop: true,
      nav: true,
      dots: false,
      items: 1,
      lazyLoad: true,
      autoplay: false,
      autoplaySpeed: 2000,
      autoplayTimeout: 5000,
      smartSpeed: 800,
      mouseDrag: false,
    })
    .on('changed.owl.carousel', function (event) {
      // When slider1 changes, update slider2
      var currentIndex = event.item.index;
      $('.frame-thumb-hld').trigger('to.owl.carousel', [currentIndex, 800, true]);
    });
  $('.frame-thumb-hld').owlCarousel({
    loop: true,
    nav: false,
    dots: false,
    items: 1,
    lazyLoad: true,
    autoplay: false,
    autoplaySpeed: 2000,
    autoplayTimeout: 5000,
    smartSpeed: 800,
    mouseDrag: false,
    animateOut: 'fadeOut',
  });
  $('.nature-blurb-hld').owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    items: 4,
    lazyLoad: true,
    autoplay: false,
    autoplaySpeed: 2000,
    autoplayTimeout: 5000,
    smartSpeed: 800,
    mouseDrag: false,
    responsive: {
      1100: {
        nav: false,
        items: 4,
      },
      1024: {
        items: 3,
      },
      480: {
        items: 2,
      },
      320: {
        items: 1,
      },
    },
  });
  $('.vision-blurb-con').owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    items: 4,
    lazyLoad: true,
    autoplay: false,
    autoplaySpeed: 2000,
    autoplayTimeout: 5000,
    smartSpeed: 800,
    mouseDrag: false,
    responsive: {
      1024: {
        items: 4,
      },
      767: {
        items: 3,
        loop: true,
      },
      480: {
        items: 2,
        loop: true,
      },
      320: {
        items: 1,
      },
    },
  });

  $('.timeline-slider').owlCarousel({
    loop: false,
    nav: true,
    dots: false,
    items: 4,
    lazyLoad: true,
    autoplay: false,
    autoplaySpeed: 2000,
    autoplayTimeout: 5000,
    smartSpeed: 800,
    mouseDrag: false,
    responsive: {
      1024: {
        items: 4,
      },
      767: {
        items: 3,
        loop: true,
      },
      500: {
        items: 2,
        loop: true,
      },
      320: {
        items: 1,
        loop: true,
      },
    },
  });

  var tlBlurbArr = $('.timeline-slider').find('.tl-blurb');
  $(tlBlurbArr).each(function () {
    $(this).on('mouseenter', function () {
      tlBlurbArr.removeClass('curr-active');
      $(this).addClass('curr-active');
    });
  });

  AOS.init({
    easing: 'ease-out-in',
    duration: 600,
    once: true,
  });
});

$(window).on('load', function () {
  $('.be-accordion').on('shown.bs.collapse', function () {
    var tabHeight = $('.accordion-header').height() + $('.be-header').height();
    console.log($('.accordion-header').height(), $('.be-header').height(), tabHeight);
    var panel = $(this).find('.collapse.show');
    $('html, body').animate(
      {
        scrollTop: panel.offset().top - tabHeight + 1,
      },
      800
    );
  });
});
