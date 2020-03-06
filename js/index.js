$(function(){

  // ハンバーガーメニュー
  $(".btn-sidenavi").on("click", function(){
    var rightVal = 0;
    if($(this).hasClass("open")) {
      rightVal = -300;
      $(this).removeClass("open");
    }
    else {
      $(this).addClass("open");
    }
    $(".menu-sidenavi").stop().animate({
      right: rightVal
    }, 300);
  });

});