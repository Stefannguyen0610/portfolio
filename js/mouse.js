

const cursor = $(".cursor"),
      body = $("body"),
      slider = $(".slider"),
      nav = $(".nav"),
      fail = $(".fail"),
      invert = $(".invert"),
      nav_open_menu = $(".navopen"),
      wwidth = $(window).width(),
      wheight = $(window).height(),
             
cursorMove = function() {
  var e, n;
  return (
    body.addClass("cursor-on"),
    cursor.css({
      transform: "matrix(1, 0, 0, 1, " + wwidth / 2 + ", " + wheight / 2 + ")"
    }),
    (e = wheight / 2),
    (n = 0.65 * wwidth / 2),
    n > e ? e : n,
    $(window).on("mousemove", function(e) {
      var n, t;
      if (
        ((window.x = e.clientX),
        (window.y = e.clientY),
        cursor.css({
          transform: "matrix(1, 0, 0, 1, " + x + ", " + y + ")"
        }),
        !nav.hasClass("overlay-visible"))
      )
        return (
          (n = Math.floor((x - 60) / 5)),
          (t = Math.floor((y - 60) / 5)),
          n < 20 && t < 20
            ? nav_open_menu.addClass("magnetize").css({
                transform: "scale(1.3) translate3d(" + n + "px, " + t + "px, 0)"
              })
            : nav_open_menu.removeClass("magnetize").attr("style", "")
        );
    })
  );
};
cursorBind = function() {
    var e, n, t;
    if (
      ((n = cursor.find("span")).removeClass("link external new"),
      (e = $(".focus")),
      (t = $(".slack")),
      $(window).on({
        mouseenter: function() {
          return n.removeClass("off");
        },
        mouseleave: function() {
          return n.addClass("off");
        }
      }),
      $("a, button, .cursor-link, .sort-listing th").on({
        mouseenter: function() {
          var e;
          return (
            (e = $(this).hasClass("external") ? "link external" : "link"),
            n.addClass(e)
          );
        },
        mouseleave: function() {
          return n.removeClass("link external");
        }
      }),
      $("h1").on({
        mouseenter: function() {
          var e;
          return (
            (e = $(this).hasClass("external") ? "invert external" : "invert"),
            n.addClass(e)
          );
        },
        mouseleave: function() {
          return n.removeClass("invert external");
        }
      }),
      e.length &&
        e.find("a").on({
          mouseenter: function() {
            return n.addClass("new");
          },
          mouseleave: function() {
            return n.removeClass("new");
          }
        }),
      slider.length &&
        slider.on({
          mouseenter: function() {
            var e;
            return (
              (e = $(this).hasClass("full") ? "click" : "drag"), n.addClass(e)
            );
          },
          mouseleave: function() {
            return n.removeClass("drag click");
          }
        }),
      t.length &&
        t.on({
          mouseenter: function() {
            return n.addClass("light");
          },
          mouseleave: function() {
            return n.removeClass("light");
          }
        }),
      fail.length)
    )
      return fail.on({
        mouseover: function() {
          return n.addClass("relol");
        },
        mouseleave: function() {
          return n.removeClass("relol");
        }
      });
  };

cursorMove();
cursorBind();