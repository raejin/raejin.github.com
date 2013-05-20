$(function () {
  function imageResize() {
    var windowsHeight = $(document).height();
    $('.photo').css({'height' : windowsHeight * 0.8});
  }
  imageResize();
  $(window).resize(imageResize);
});