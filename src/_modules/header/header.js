'use strict';

// Constructor
var Header = function() {
    var header = $('.header');
    var body = $('body');
    var menuOpen = $('.header__hamburguer');
    var search = $('.header__search');
    var searchOpen = $('.header__search__trigger');
    var searchClose = $('.header__search__close');
    var searchInput = $('.header__search__input');

    header.addClass('-ontop');

    menuOpen.on('click', function(){
        header.toggleClass('-open');
        body.toggleClass('-hideOverflow');
    });

    searchOpen.on('click', function() {
        search.addClass('-open');
        searchInput.val('');
    });

    searchClose.on('click', function() {
        search.removeClass('-open');

    });

    $(function() {
        $(window).scroll(function() {
           var scroll = $(window).scrollTop();

           if (scroll >= 100) {
               header.removeClass('-ontop');
           } else {
               header.addClass('-ontop');
           }
        });
    });

    // Select all links with hashes
$('a[href="#"]').click(function(e){
    e.preventDefault();
});

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top + -80
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
        });
      }
    }
  });

};

module.exports = Header;
