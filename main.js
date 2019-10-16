// $(document).ready(function() {
//   $("h3").on("click", function() {
//     $(".content").removeClass("active")
//     $(this)
//       .find("+ .content")
//       .addClass("active")
//   })
//   // if ($(".accordian div").hasClass("active")) {
//   //   $("#block-1").show()
//   // }
// })

$(document).ready(function() {
  addListenerToH3Tags()
})

function addListenerToH3Tags() {
  $("h3").on("click", function() {
    handleClickEvent(this)
  })
}

function toggleAccordion(element) {
  $(element).toggleClass("background")
  $(element)
    .find("+ .content")
    .toggleClass("active")
}

function closeOpenAccordions() {
  $("h3").removeClass("background")
  $(".content").removeClass("active")
}

function handleClickEvent(element) {
  let activeCheck = $(element)
    .find("+ .content")
    .hasClass("active")

  if (activeCheck) {
    toggleAccordion(element)
  } else {
    closeOpenAccordions()
    toggleAccordion(element)
  }
}
