$(function(){

  // ハンバーガーメニュー
  $(".btn-sidenavi").on("click", function(){
    var rightVal = 0;
    if($(this).hasClass("open")) {
      rightVal = -200;
      $(this).removeClass("open");
    }
    else {
      $(this).addClass("open");
    }
    $(".menu-sidenavi").stop().animate({
      right: rightVal
    }, 300);
  });

  // テキストアニメーション
  $("h1").textillate({
    in: {
      effect: 'fadeInLeft',
      delay: 50,
      shuffle: true
    }
  });

});