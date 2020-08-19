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

// SENDボタンをクリックしたら「TRANSMISSION COMPLETED」にボタン文言を変更する
const element = document.getElementById('button-value');
//console.log(element);
if (element !== null) {
  document.getElementById('button-value').onclick = () =>{
    document.getElementById('button-value').value = "TRANSMISSION COMPLETED";
  };
}

// 画像にホーバーした時の下からのアニメーション
$('.item').on({
  'mouseenter': function(){
    $(this).find('p').stop(true, true).slideDown();
  },
  'mouseleave': function(){
    $(this).find('p').stop(true, true).slideUp();
  }
})

// ページ遷移したときのアニメーション
$('main').hide().fadeIn(1000);
