setTimeout(function() {
  $('pre').wrap('<div style="width: 100%; text-align: center;"/>');
  $('pre').css('display', 'inline-block').css('margin', '20px auto').css('text-align', 'left');
  $('img.database-link').click(function(event) {
    event.preventDefault();
    var target = $(this).attr("data-linkto");
    gotoSlideWithTarget(target);

  });
  document.onkeyup = maybeReturnToDatabaseMenu;
}, 2000);

function gotoSlideWithTarget(target) {
  for (var i = 0; i < slides.length; i++) {
    if ($(slides[i]).children().first().hasClass(target)) {
      gotoSlide(i);
    }
  }
}

function maybeReturnToDatabaseMenu(event) {
  if (event.keyCode == 72) {
    gotoSlideWithTarget("five-options");
  } else if (event.keyCode == 69) {
    gotoSlideWithTarget("the-end")
  } else if (event.keyCode == 66) {
    gotoSlideWithTarget("five-options")
  } else {
    keyUp(event);
  }
}
