//Sticky header
jQuery(window).scroll(function() {
    var sticky = jQuery('header')
    scroll = jQuery(window).scrollTop()

    if (scroll >= 10) sticky.addClass('fixed')
    else sticky.removeClass('fixed')
})

//Mobile burger menu
jQuery(function($) {
    $('.menu-btn').click(function() {
        $('.responsive-menu').toggleClass('expand')
    })
})