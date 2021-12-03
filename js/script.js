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

function GlowAnimeControl() {
    $('.p-main__top-visual-title').each(function() {

        var elemPos = $(this).offset().top - 50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass("glow");

        } else {
            $(this).removeClass("glow");
        }
    });
}
$(window).on('load', function() {
    var element = $(".p-main__top-visual-title");
    element.each(function() {
        var text = $(this).text();
        var textbox = "";
        text.split('').forEach(function (t, i) {
            if (t !== " ") {
                if (i < 10) {
                    textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
                } else {
                    var n = i / 10;
                    textbox += '<span style="animation-delay:.' + n + 's;">' + t + '</span>';
                }
            } else {
                textbox += t;
            }
        });
        $(this).html(textbox);
    });
    GlowAnimeControl();
});

$(window).scroll(function () {
    $('.blur-trigger').each(function() {
        var elemPos = $(this).offset().top-50;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('blur');
        } else {
            $(this).removeClass('blur');
        }
    });
});

var swiper = new Swiper('.swiper', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type:'fraction',
    },
    autoplay: {
        delay: 3000,
    },
});