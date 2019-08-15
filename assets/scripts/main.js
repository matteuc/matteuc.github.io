  $(document).ready(function () {
      $('.pushpin').pushpin();
      $('.scrollspy').scrollSpy({
        scrollOfffset: 200
      });
    //   Line 4290, 4141, & 4149 control tabs hiding content
      $('.tabs').tabs();
    //   Line 6314 controls adding active class during scrolling
    // Line 4094 Tab click

      $('.pin-top').each(function () {
          var $this = $(this);
          var $target = $('#' + $(this).attr('data-target'));
          $this.pushpin({
              top: $target.offset().top,
              bottom: $target.offset().top + $target.outerHeight() - $this.height()
          });
      });
  });