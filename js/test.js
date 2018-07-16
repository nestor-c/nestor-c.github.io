$(document).ready(function(){
$("#Heading")
.css('display', 'none')
.css("opacity", "0")
.slideDown(2000)
.animate(
  {opacity: 1},
  { queue: false, duration: 3000 }
);

});
