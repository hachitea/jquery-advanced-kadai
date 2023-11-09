$(function () {
  //id属性がfadeOutの要素がクリックされたら
  $('#fadeOut').on('click', function () {
    //不透明度を0にする（フェードアウト）
    $('.box').css('opacity', 0);
  });

  //id属性がfadeInの要素がクリックされたら
  $('#fadeIn').on('click', function () {
    //不透明度を1にする（フェードイン）
    $('.box').css('opacity', 1);
  });

  // //id属性がfadeToggleの要素がクリックされたら
  // $('#fadeToggle').on('click', function () {
  //   //フェードイン or フェードアウトする
  //   $('.box').fadeToggle();
  // });

  $('#slideUp').on('click', function () {
    //高さを0にする（スライドアップ）
    $('.box').css('height', 0);
  });

  $('#slideDown').on('click', function () {
    //高さを200にする（スライドダウン）
    $('.box').css('height', 200);
  });

  // $('#slideToggle').on('click', function () {
  //   $('.box').slideToggle();
  // });
});