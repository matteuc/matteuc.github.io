  $(document).ready(function () {
      $('.tabs').tabs();
      $('.pushpin').pushpin();

      $('.pin-top').each(function () {
          var $this = $(this);
          var $target = $('#' + $(this).attr('data-target'));
          $this.pushpin({
              top: $target.offset().top,
              bottom: $target.offset().top + $target.outerHeight() - $this.height()
          });
      });
  });