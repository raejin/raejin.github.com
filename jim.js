$(function () {
  function imageResize() {
    var windowsHeight = $(window).height();
    $('.photo').css({ 'height' : windowsHeight * 0.8 });
  }
  imageResize();
  $(window).resize(imageResize);
});