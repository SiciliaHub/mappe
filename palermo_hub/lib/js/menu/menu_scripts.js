jQuery(document).ready(function($) {
  $(function() {
    $('#nav ul li').filter(function(i) { return $('ul', this).length >= 1; }).each(function(i) {
      $(this).children('a').parent('li').addClass('li-has-Children');
      $('.li-has-Children').children('ul').addClass('sub-menu');
      $(this).children('a').addClass(
        'hasChildren'
        ).removeAttr('href')
        .click(function(e) {
        if ($(window).width() < 980) {
          $('#search-box').removeClass('visible');
          var $ul = $(this).next('ul');
          if ($ul.is(':visible')) {
            $ul.slideUp();
            if ($(window).width() < 960) {
              $('.sub-menu').slideUp();
            }
          }
          else {
            $ul.slideDown();
            $(this).siblings().slideDown();
            $(this).parent().siblings().each(function(index,element) {
              $(element).find("ul:visible").slideUp();
            });
          };
        }
      })
    });
  });

  $('#nav ul li').hover(function() {
    $('#search-box').removeClass('visible');
  });

  $('#toggle-nav').click(function(){
    if ($(window).width() < 960) {
      $('html').toggleClass('overflow');
      $('#main').toggleClass('blur');
      $('#overlay').toggleClass('visible');
    }
    if ($('#navigation').is(".visible")) {
      $('#navigation').removeClass('visible');
    }
    else {
      $('#search-box').removeClass('visible');
      $('#navigation').addClass('visible');
    }
  });

  $('#toggle-search').click(function() {
    $('html').removeClass('overflow');
    $('#main').removeClass('blur');
    $('#overlay').removeClass('visible');
    if ($('#search-box').is(".visible"))  {
      $('#search-box').removeClass('visible');
    }
    else {
      $('#navigation ul').find('ul').slideUp(300);
      if ($(window).width() < 960) {
        $('#navigation').removeClass('visible');
      }
      $('#search-box').addClass('visible');
      setTimeout(function(){
        $('.search-field').focus();
      },50);
    }
  });

});
