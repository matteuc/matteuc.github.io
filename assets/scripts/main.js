  $(document).ready(function () {
    AOS.init();
    $('.tooltipped').tooltip();

    // Disable empty links from refreshing the page
    $('a[href="#"]').click(function(e) {
      e.preventDefault();
    });

  });