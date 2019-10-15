$(document).ready(function() {
  $("h3").on("click", function() {
    $(".content").removeClass("active")
    $(this)
      .find("+ .content")
      .addClass("active")
  })
  // if ($(".accordian div").hasClass("active")) {
  //   $("#block-1").show()
  // }
})
