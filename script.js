// question slidein slideout
$('.question-title').click(function() {

    var $answer = $(this).next('.question-answer');

    if ($answer.hasClass('open')) {
        $answer.removeClass('open');
        $answer.slideUp(300);
        $(this).find('span').replaceWith('<span class="fas fa-angle-down"></span>');

    } else {
        $answer.addClass('open');
        $answer.slideDown(300);
        $(this).find('span').replaceWith('<span class="fas fa-angle-up"></span>');
    }

    return false;

});
// 上に戻るボタン
$(function() {
    var pagetop = $('#page_top');
    // ボタン非表示
    pagetop.hide();

    // 100px スクロールしたらボタン表示
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function() {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
});
// 上に戻るボタン　レスポンシブ
$(function() {
    var pagetop = $('#page_top-res');
    // ボタン非表示
    pagetop.hide();

    // 100px スクロールしたらボタン表示
    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            pagetop.fadeIn();
        } else {
            pagetop.fadeOut();
        }
    });
    pagetop.click(function() {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
});
// header-logo click 上に戻る
$(function() {
    var header = $('.header-left');


    header.click(function() {
        $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
    });
});
// 受講の流れ　レスポンシブ　sildein slideout
$('.flow-step-res').click(function() {

    var $answer = $(this).next('.flow-step-bottom-res');

    if ($answer.hasClass('open')) {
        $answer.removeClass('open');
        $answer.slideUp(300);
        $(this).find('span').replaceWith('<span class="fas fa-angle-down"></span>');

    } else {
        $answer.addClass('open');
        $answer.slideDown(300);
        $(this).find('span').replaceWith('<span class="fas fa-angle-up"></span>');
    }

    return false;

});