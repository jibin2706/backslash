(function($) {
  // 'use strict';

  // Main Navigation
  $(".hamburger-menu").on("click", function() {
    $(this).toggleClass("open");
    $(".site-navigation").toggleClass("show");
  });

  var countdown_date = $(".countdown").data("date");

  $(".countdown").countdown(countdown_date, function(event) {
    $(".dday").html(event.strftime("%-D"));
    $(".dhour").html(event.strftime("%-H"));
    $(".dmin").html(event.strftime("%-M"));
    $(".dsec").html(event.strftime("%-S"));
  });

  // Tabs
  $(function() {
    $(".tab-content:first-child").show();

    $(".tab-nav").bind("click", function(e) {
      $this = $(this);
      $tabs = $this
        .parent()
        .parent()
        .next();
      $target = $($this.data("target"));
      $this.siblings().removeClass("active");
      $target.siblings().css("display", "none");
      $this.addClass("active");
      $target.fadeIn("slow");
    });

    $(".tab-nav:first-child").trigger("click");
  });

  // Counter
  $(".start-counter").each(function() {
    var counter = $(this);

    counter.countTo({
      formatter: function(value, options) {
        return value
          .toFixed(options.decimals)
          .replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
      }
    });
  });

  // Load more events
  var $container = $(".blog-list-page");
  var $item = $(".single-blog-content");

  $item.slice(0, 6).addClass("visible");

  $(".load-more .btn").on("click", function(e) {
    e.preventDefault();

    $(".single-blog-content:hidden")
      .slice(0, 6)
      .addClass("visible");
    $container.masonry();
  });

  // Back to Top
  if ($(".back-to-top").length) {
    var scrollTrigger = 500, // px
      backToTop = function() {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $(".back-to-top").addClass("show");
        } else {
          $(".back-to-top").removeClass("show");
        }
      };
    backToTop();
    $(window).on("scroll", function() {
      backToTop();
    });
    $(".back-to-top").on("click", function(e) {
      e.preventDefault();
      $("html,body").animate(
        {
          scrollTop: 0
        },
        800
      );
    });
  }
})(jQuery);
