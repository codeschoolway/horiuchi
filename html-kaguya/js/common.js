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
