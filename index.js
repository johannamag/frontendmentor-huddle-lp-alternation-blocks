$(document).ready(function () {
  $(window).scroll(function () {
    const scroll = $(window).scrollTop();
    if (scroll > 50) {
      $(".nav").css("background", "hsl(193, 100%, 96%)");
    } else {
      $(".nav").css("background", "transparent");
    }
  });
});
