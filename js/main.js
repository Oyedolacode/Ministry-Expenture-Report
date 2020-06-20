$(document).ready(function () {
  $(".menu-toggle").on("click", function () {
    console.log("nav clicked");
    $(".nav").toggleClass("showing");
    $(".nav ul").toggleClass("showing");
  });
});
