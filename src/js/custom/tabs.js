$(".menuTabs .menuTab").on("click", function (event) {
  var id = $(this).attr("data-id");
  $(" .menuTab__content").removeClass("tab-active").hide();
  $(" .menuTabs .menuTab").removeClass("active");
  $(this).addClass("active");
  $("#" + id)
    .addClass("tab-active")
    .fadeIn();
  return false;
});
