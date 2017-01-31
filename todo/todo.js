$(function() {

  //Remove the countries from the list when clicked
  $(".states").on("click", function(event) {
    event.preventDefault()
    var elementThatWasClicked = $(this)
    console.log(elementThatWasClicked)
    elementThatWasClicked.parent().remove()
  })

})
