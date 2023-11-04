//product-best pagination
$(function () {
  const $menuItem = $(".menu-item");
  const $indicater = $(".menu>li>a");
  const $prevBtn = $(".product-best .prev");
  const $nextBtn = $(".product-best .next");

  let nowIdx = 0;
  $indicater.on("click", function (evt) {
    evt.preventDefault();
    nowIdx = $indicater.index(this);
    $menuItem.css({ display: "none" });
    $menuItem.eq(nowIdx).stop().fadeIn(200).css({
      display: "flex",
    });
    console.log(nowIdx);
    $indicater.eq(nowIdx).parent().addClass("on").siblings().removeClass("on");
  });

  $nextBtn.on("click", function (evt) {
    evt.preventDefault();
    // oldIdx = nowIdx;
    if (nowIdx < $indicater.length - 1) {
      nowIdx++;
    } else {
      nowIdx = 0;
    }
    console.log(nowIdx);

    $indicater
      .eq(nowIdx)
      .parent()
      .css({
        display: "block",
      })
      .siblings()
      .css({
        display: "none",
      });

    $menuItem.fadeOut(200);
    $menuItem.eq(nowIdx).fadeIn(200).css({
      display: "flex",
    });
  });

  $prevBtn.on("click", function (evt) {
    evt.preventDefault();
    // oldIdx = nowIdx;
    if (nowIdx > 0) {
      nowIdx--;
    } else {
      nowIdx = $indicater.length - 1;
    }

    console.log(nowIdx);

    $indicater
      .eq(nowIdx)
      .parent()
      .css({
        display: "block",
      })
      .siblings()
      .css({
        display: "none",
      });

    $menuItem.fadeOut(200);
    $menuItem.eq(nowIdx).fadeIn(200).css({
      display: "flex",
    });
  });
});

// scroll
$(function () {
  const $renewal = $(".renewal");

  $(window).scroll(function () {
    width = $("body").innerWidth();
    scrollTop = $(document).scrollTop();
    console.log($(document).scrollTop());
    if (scrollTop > 50 || width < 650) {
      $renewal.stop().animate(
        {
          height: 0,
        },
        100
      );
    } else {
      $renewal.stop().animate(
        {
          height: "50px",
        },
        100
      );
    }
  });

  const $top = $(".top>a");
  $top.on("click", function (evt) {
    evt.preventDefault();
    $("html,body").animate({ scrollTop: 0 }, 300);
  });
});

//hambuger menu
$(function () {
  const $hambuger = $("nav>p>a");
  const $gnb = $(".hambugerMenu");
  const $light = $(".light");
  const $tabMenu = $(".gnb_hambuger>li");

  $hambuger.on("click", function (evt) {
    evt.preventDefault();
    $gnb.addClass("on");
    $light.addClass("on");
  });
  $(window).on("resize", function () {
    $gnb.removeClass("on");
    $light.removeClass("on");
  });
  $light.on("click", function () {
    $gnb.removeClass("on");
    $light.removeClass("on");
    $tabMenu.first().children("a").text("카테고리");
  });
});

//메뉴체크
$(function () {
  const $shopOn = $(".shopMenu");
  const $tabMenu = $(".gnb_hambuger>li");
  $shopOn.children().on("click", function (evt) {
    evt.preventDefault();
    if ($(this).index() === 1) {
      $tabMenu.first().children("a").text("소금집델리");
      $(this).addClass("on").siblings().removeClass("on");
    } else {
      $tabMenu.first().children("a").text("카테고리");
      $(this).addClass("on").siblings().removeClass("on");
    }
  });

  $tabMenu.on("click", function () {
    $(this).toggleClass("on").children("i").toggleClass("fa-solid fa-angle-up");
  });
});
