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
    $menuItem.fadeOut(200);
    $menuItem.eq(nowIdx).fadeIn(200).css({
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

// scrollTop
$(function () {
  const $top = $(".top>a");
  $top.on("click", function (evt) {
    evt.preventDefault();
    $("html,body").animate({ scrollTop: 0 }, 300);
  });
});

//hambuger menu
$(function () {
  const $hambuger = $("nav>p>a");
  const $gnb = $(".gnb");

  $hambuger.on("click", function (evt) {
    evt.preventDefault();
    $gnb.stop().css({ display: "flex" }, 300);
  });
});

//hamburgermenu
$(function () {
  const $shopOn = $(".shopMenu>p>a");
  $shopOn.on("click", function (evt) {
    evt.preventDefault();
    $(this).parent().addClass("on").siblings().removeClass("on");
  });
});
