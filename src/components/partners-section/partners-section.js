var $page = $("html, body");
$('.sectionMenu--scroll a[href*="#"]').click(function () {
  $page.animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top,
    },
    0
  );
  return false;
});
