$(document).ready(function () {
    $('.pushpin').pushpin();
    // Offset is set at line 6108
    $('.scrollspy').scrollSpy();
    //   Line 4094 Tab click
    //   Line 4290, 4141, & 4149 control tabs hiding content
    //   Line 6314 controls adding active class during scrolling
    $('.tabs').tabs();
    
    $('.pin-top').each(function () {
        var $this = $(this);
        var $target = $('#' + $(this).attr('data-target'));
        $this.pushpin({
            top: $target.offset().top,
            bottom: $target.offset().top + $target.outerHeight() - $this.height()
        });
    });
});