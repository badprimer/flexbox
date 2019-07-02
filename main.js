// Smooth Scrolling - JQuery
$("#home a").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
});

// Back to top
$(window).scroll(function() {
  if ($(this).scrollTop()) {
    $("#toTop").fadeIn();
  } else {
    $("#toTop").fadeOut();
  }
});

$("#toTop").click(function() {
  //1 second of animation time
  //html works for FFX but not Chrome
  //body works for Chrome but not FFX
  //This strange selector seems to work universally
  $("html, body").animate({ scrollTop: 0 }, 1000);
});
