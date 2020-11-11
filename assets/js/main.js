$(document).ready(function () {
  $(".burger-menu").on("click", function () {
    $(".nav-menu").toggle();
    $(".burger-menu").toggle();
    $(".burger-menu.close").toggle();
  });

  $(".projects-grid .box").slice(0, 3).hide();

  $(".btn-load").on("click", function () {
    $(".projects-grid .box").show();
  });

  $(".smooth-scroll").on("click", function () {
    var scrollid = $(this).attr("data-scroll");
    $("html, body").animate(
      {
        scrollTop: $("#" + scrollid).offset().top,
      },
      1000
    );
  });
});
