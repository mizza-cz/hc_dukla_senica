$(".postsSlider__inner").slick({
  slidesToScroll: 1,
  slidesToShow: 2,
  nextArrow:
    ' <button class="slider__btn  slider__btnnext"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M-4.5897e-07 6.75L9.1275 6.75L4.935 10.9425L6 12L12 6L6 5.24537e-07L4.9425 1.0575L9.1275 5.25L-5.90104e-07 5.25L-4.5897e-07 6.75Z" fill="black"/></svg></button>',
  prevArrow:
    ' <button class="slider__btn  slider__btnprev"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 5.25L2.8725 5.25L7.065 1.0575L6 1.04907e-06L-1.04907e-06 6L6 12L7.0575 10.9425L2.8725 6.75L12 6.75L12 5.25Z" fill="#938B8B"/></svg></button>',
  responsive: [
    {
      breakpoint: 740,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
