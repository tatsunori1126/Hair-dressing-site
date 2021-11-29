$(function () {
    $('.js-btn').on('click', function () {        // js-btnクラスをクリックすると、
        $('.btn-line').toggleClass('open'); // メニューとバーガーの線にopenクラスをつけ外しする
        $('.p-header__nav').toggleClass("panelactive");
    })
    $(".p-header__nav-list a").click(function () {//ナビゲーションのリンクがクリックされたら
        $(".btn-line").removeClass('open');//ボタンの activeクラスを除去し
        $(".p-header__nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
    });
});