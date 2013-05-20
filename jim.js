$(function () {
  function heightExamine () {
    var windowsHeight = $(window).height();
    $('#footer').text('Height: ' + windowsHeight);
  }
  // function imageResize() {
  //   var windowsHeight = $(window).height();
  //   $('.photo').css({ 'height' : windowsHeight * 0.7 });
  //   $('#main').after('height: ' + windowsHeight * 0.7);
  // }
  // imageResize();
  // $(window).resize(imageResize);
  heightExamine();
  $(window).resize(heightExamine);
});