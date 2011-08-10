setTimeout(function() {
  $('pre').wrap('<div style="width: 100%; text-align: center;"/>');
  $('pre').css('display', 'inline-block').css('margin', '20px auto').css('text-align', 'left');
  $('img.database-link').click(function(event) {
    event.preventDefault();
    var target = $(this).attr("data-linkto");
    for (var i = 0; i < slides.length; i++) {
      if ($(slides[i]).children().first().hasClass(target)) {
        gotoSlide(i);
      }
    }
  });
}, 2000);



