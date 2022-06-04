$(function(){
  /* Slick Slider - Welcome */
  $('.slideshow').slick({
    infinite: true,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    speed: 1000,
    pauseOnHover: false
  });

  /* TypeIt - Welcome */
  $('#typing').typeIt({
    strings: ["Business strategy.", "Innovation Plan.", "Creative Idea."],
    speed: 100,
    autoStart: true,
    breakLines: false,
  });
})

/* Faq Accordion */
$(function(){
  $('.faq-desc').eq(0).show()
  $('.faq-title').click(function(){
    $(this).next().stop().slideDown()
    $(this).parent().siblings().children('.faq-desc').stop().slideUp()
    $(this).parent().addClass('active')
    $(this).parent().siblings().removeClass('active')
  })
})