// ====================
//ローディング
// ====================
document.body.classList.add("loading");

window.addEventListener("load", function () {
  setTimeout(function () {
    const loader = document.querySelector(".loading__wrapper");
    if (loader) {
      loader.classList.add("fade-out");

      loader.addEventListener(
        "transitionend",
        function () {
          loader.style.display = "none";
          document.body.classList.remove("loading"); // ←ここでスクロール解除！
        },
        { once: true }
      );
    }
  }, 2800);

  gsap.registerPlugin(ScrollTrigger);

  const isMobile = window.matchMedia('(max-width: 767px)').matches;
  const scrollDistance = isMobile ? 500 : 1000;

  gsap.utils.toArray('.scroll__circle, .scroll__circle2, .scroll__circle3, .scroll__circle4').forEach(el => {
    gsap.fromTo(el,
      {scale: 1, opacity: 0},
      {
        scale: 120,
        opacity: 1,
        duration: 2,
        ease: 'linear',
        scrollTrigger: {
          trigger: el,
          start: 'top 50%', // 画面内に入ってすぐ
          end: `50% -=${scrollDistance}`,
          scrub: true
        }
      }
    );
  });
});


$(function () {
  // ハンバーガーメニュー
  // $(".hamburger").click(function () {
  //   $(".sp__nav").fadeToggle(500);
  //   $(".hamburger").toggleClass("open");
  // });

  $(".hamburger").click(function () {
    if ($(this).hasClass("z-shape")) {
      $(".sp__nav").fadeOut(500);
      $(this).removeClass("z-shape");
      $("body").css({ height: "", overflow: "" });
    } else {
      $(".sp__nav").fadeIn(500);
      $(this).addClass("z-shape");
      $("body").css({ height: "100%", overflow: "hidden" });
    }
  });

  $(".sp__nav").click(function () {
    $(".sp__nav").fadeOut(500);
    $(".hamburger").removeClass("z-shape");
    $("body").css({ height: "", overflow: "" });
  });

  //スライダー
  $(".slider__area").slick({
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    arrows: false,
    adaptiveHeight: true,
    centerMode: true,
    centerPadding: "15%",
    dots: true
  });
});

// $(function () {
//   // ハンバーガーメニューボタンがクリックされたときのイベントハンドラを設定
//   $(".hamburger").click(function () {
//     // 現在のbodyタグのoverflowスタイルを確認
//     if ($("body").css("overflow") === "hidden") {
//       // もしoverflowがhiddenなら、bodyのスタイルを元に戻す
//       $("body").css({ height: "", overflow: "" });
//     } else {
//       // そうでなければ、bodyにheight: 100%とoverflow: hiddenを設定し、スクロールを無効にする
//       $("body").css({ height: "100%", overflow: "hidden" });
//     }
//   });
// });
