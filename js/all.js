$(document).ready(function() {

    $('.elTop').click(function(e) {
        e.preventDefault();
        let target = $(this).attr('href');
        let targetPos = $(target).offset().top;
        $('html,body').animate({ scrollTop: targetPos - 49 }, 700);
    })
    $(window).scroll(function(e) {
        /* Act on the event */
        let windowScrollTop = $(window).scrollTop();
        $('.elTop').each(function() {
            let target = $(this).attr('href');
            let targetPos = $(target).offset().top;
            let targetHeight = $(target).outerHeight();
            if (windowScrollTop >= (targetPos - 55) && windowScrollTop < (targetPos - 55 + targetHeight)) {
                $('.elTop').removeClass('active');
                $(this).addClass('active');
            }
        })
    });
    $('.animate').each(function(e) {
        let thisPos = $(this).offset().top;
        let windowScrollTop = $(window).scrollTop();
        let windowHeight = $(window).height();
    });

});

