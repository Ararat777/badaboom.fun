// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require blueimp-gallery-all
//= require_tree .

$(document).ready(function(){
  $(".phone-slider.owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        navText: " ",
        loop: true,
        margin: 0,
        autoplay: true,
        autoplayHoverPause: true,
        fluidSpeed: 900,
        autoplaySpeed: 900,
        navSpeed: 200,
        dotsSpeed: 100,
        dragEndSpeed: 900
    });
  $(".face-slider.owl-carousel").owlCarousel({
        items: 3,
        nav: true,
        navText: " ",
        loop: true,
        margin: 80,
        autoplay: true,
        autoplayHoverPause: true,
        fluidSpeed: 900,
        autoplaySpeed: 900,
        navSpeed: 200,
        dotsSpeed: 100,
        dragEndSpeed: 900,
        center: true
    });
  var owl = $(".face-slider.owl-carousel");
  var authorTitle = owl.find(".center img").data("title");
  var authorDesc = owl.find(".center img").data("description");
  var authorName = owl.find(".center img").data("name");
  $(".author-text").children(".title").html(authorTitle);
  $(".author-text").children(".description").html('"' + authorDesc + '"');
  $(".author-text").children(".name").html(authorName);
  owl.on('changed.owl.carousel', function(event) {
    var authorTitle = owl.find(".center img").data("title");
    var authorDesc = owl.find(".center img").data("description");
    var authorName = owl.find(".center img").data("name");
    $('.author-text').fadeOut(200);
    setTimeout(function(){
      $(".author-text").children(".title").html(authorTitle);
      $(".author-text").children(".description").html('"' + authorDesc + '"');
      $(".author-text").children(".name").html(authorName);
    },200);
    
    $('.author-text').fadeIn();
  });
  

})