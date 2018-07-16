$(document).ready(function(){
  $("#Heading")
  .css('display', 'none')
  .css('fontSize', '4em')
  .fadeIn(2000)
  .animate(
    {fontSize: "2.5em"},
    {queue:false, duration:1000, easing:"linear"}
  );
});
