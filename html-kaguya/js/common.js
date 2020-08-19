// ここからハンバーガーメニュー
$(function(){
  $('.btn-trigger').on('click', function() {
    $(this).toggleClass('active');
    return false;
  });
});

$(function(){
  $('.menu-btn').on('click', function(){
    $('.menu').toggleClass('is-active');
  });
}());
// ここまでハンバーガーメニュー
