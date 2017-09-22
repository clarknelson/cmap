var $ = require('jquery');
var _ = require('lodash/function');

$(document).ready(function(){


  // SIDE NAV WIDGET
  var sideNavOpen = false;

  var $sideNav = $('#side-nav');
  var $wrapper = $('#wrapper');

  function listenForSideNav($hamburger){
    $hamburger.on('click', ()=>{
      $hamburger.toggleClass('is-active');
      var sideNavWidth = $sideNav.outerWidth();

      $wrapper.toggleClass('side-nav-active');
      $sideNav.toggleClass('side-nav-active');

      if(sideNavOpen){
        $wrapper.css('left', '0');
        sideNavOpen = false;
      } else {
        $wrapper.css('left', `${sideNavWidth}px`);
        sideNavOpen = true;
      }
    });
  }

  listenForSideNav($('#main-header .hamburger'));
  listenForSideNav($('#scroll-nav .hamburger'));



  // TEXT SIZE WIDGET
  var $textSizeOptions = $('#side-nav .change-text-size .option');
  $textSizeOptions.click(function(){
    $textSizeOptions.removeClass('active');
    $(this).addClass('active')
  });



  // SCROLL NAV
  var headerHeight = $('#main-header .nav-row-one').innerHeight();
  console.log(headerHeight);
  var $scrollNav = $('#scroll-nav');

  function checkForScrollNav(){
    if(window.scrollY > headerHeight){
      $scrollNav.addClass('active');
    } else {
      $scrollNav.removeClass('active');
    }
  }
  checkForScrollNav();
  $(window).scroll(_.throttle(checkForScrollNav, 50));

});
