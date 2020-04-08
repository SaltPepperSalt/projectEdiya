// mini project js
var menuOpen = $('.btnMenuopen');
var menuClose = $('.btnMenuClose');
var menuItem = $('.menuItem a');
var infoOpen = $('.infoButton');
var infoClose = $('.closeinfoButton');
var infoCard = $('.infoCard');


menuItem.attr('tabindex', '-1');
menuItem.attr('aria-hidden', 'true');
menuClose.attr('tabindex', '-1');
menuClose.attr('aria-hidden', 'true');
infoClose.attr('tabindex', '-1');

menuOpen.click(function (e) {
    $(this).parent().addClass('isAct');
    menuItem.attr('tabindex', '0');
    menuItem.attr('aria-hidden', 'false');
    menuClose.attr('tabindex', '0');
    menuClose.attr('aria-hidden', 'false');
    menuClose[0].addEventListener('keydown', handleKeyDownLastLink);
    menuItem[0].addEventListener('keydown', handleKeyDownFirstLink)
});
var handleKeyDownLastLink = function (e) {
    if (!e.shiftKey && e.keyCode === 9) {
        var firstMenuItem = menuItem[0];
        e.preventDefault();
        firstMenuItem.focus();
    }
};
var handleKeyDownFirstLink = function (e) {
    if (e.shiftKey && e.keyCode === 9) {
        e.preventDefault();
        menuClose.focus();
    }
};
menuClose.click(function (e) {
    e.preventDefault();

    $(this).parent().removeClass('isAct');
    menuItem.attr('tabindex', '-1');
    menuClose.attr('tabindex', '-1');
    menuItem.attr('aria-hidden', 'true');
    menuClose.attr('aria-hidden', 'true');

});

infoOpen.click( function (e) {
    e.preventDefault();
    if (e.keyCode === 13 || e.type === 'click') {
        $(this).next().css('transition', 'opacity .5s linear');
        $(this).next().addClass('infoOpen');
        $(this).next().attr('aria-hidden', 'false');
        $(this).next().children('button').attr('tabindex', '0');
    }
});
infoOpen.keydown(function(e){
    if (e.keyCode === 32) {
        e.preventDefault();
        $(this).next().css('transition', 'opacity .5s linear');
        $(this).next().addClass('infoOpen');
        $(this).next().attr('aria-hidden', 'false');
        $(this).next().children('button').attr('tabindex', '0');
    }
});

infoClose.click(function (e) {
    $(this).parent().css('transition', 'opacity .5s linear, z-index 0s .5s')
    $(this).parent().removeClass('infoOpen');
    $(this).parent().attr('aria-hidden', 'true')
    $(this).attr('tabindex', '-1');
});

$('.scrollUp').click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 400);
    return false;
});