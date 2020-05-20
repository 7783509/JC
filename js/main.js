$(function(){
    /*Parallax*/
  if($("#scene").length) {
    var scene = $("#scene").get(0);
    var parallaxInstance = new Parallax(scene);
  }

  /*Slider*/

  if($("#news").length) {
    var swiper = new Swiper(".swiper-container", {
      nested: true,
      slidesPerView: 1,
      observer: true,
      breakpoints: {
        321: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        }
      },
      navigation: {
        nextEl: ".swiper-button-nex",
        prevEl: ".swiper-button-pre"
      }
    });
  }
})


/* Hamburger menu*/

$(".gamburger-menu-link").on("click", function() {
  $(".hamburger-menu").toggle();
});

$(".hamburger-menu__close").on("click", function() {
  $(".hamburger-menu").hide();
});

/*Modal*/

$(".modal__close").on("click", function() {
  $(".modal").addClass("hide");
});

$(".tel__btn").on("click", function() {
  $(".modal").removeClass("hide");
});

$(".tel__text").on("click", function() {
  $(".modal").removeClass("hide");
});

$(".offer__btn").on("click", function() {
  $(".modal").removeClass("hide");
});

$(".help__btn").on("click", function() {
  $(".modal").removeClass("hide");
});

$(".phone-btn").on("click", function() {
  $(".modal").removeClass("hide");
});

/*Tabs*/

$(".cases-tabs__link").on("click", function() {
  var casesTabs = $(this)
    .parent()
    .index();

  $(".cases-tabs__link").removeClass("cases-tabs__link_active");
  $(this).addClass("cases-tabs__link_active");

  $(".cases-wrap").addClass("hide");
  $(".cases-wrap")
    .eq(casesTabs)
    .removeClass("hide");

  $(".services-cards").addClass("hide");
  $(".services-cards")
    .eq(casesTabs)
    .removeClass("hide");
  // console.log('yes')
});


