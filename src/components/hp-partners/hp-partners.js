$(".hp-partners__inner").slick({
  slidesToScroll: 1,
  slidesToShow: 4,
  arrows: false,
  autoplay: true,
  infinite: true,
  responsive: [
    {
      breakpoint: 840,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 540,
      settings: {
        slidesToShow: 2,
      },
    },
  ],
});
