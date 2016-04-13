$(function(){

   $('a[href=#banner]').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
          var targetOffset = $target.offset().top;
          $('html,body').animate({
            scrollTop: targetOffset}, {duration:1000,easing:'easeInOutExpo'
          });
          return false;
        }
      }
    });
  
  $('a[href=#services], a[href=#portfolio], a[href=#contato]').click(function() {

    if ($(window).width() > 768) {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
          var targetOffset = $target.offset().top;
          $('html,body').animate({
            scrollTop: targetOffset - 50}, {duration:1000,easing:'easeInOutExpo'
          });
          return false;
        }
      }
    }
    if ($(window).width() <= 768) {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var $target = $(this.hash);
        $target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
        if ($target.length) {
          var targetOffset = $target.offset().top;
          $('html,body').animate({
            scrollTop: targetOffset + 20}, {duration:1000,easing:'easeInOutExpo'
          });
          return false;
        }
      }
    }

  });
  
});