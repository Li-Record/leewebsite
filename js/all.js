$(document).ready(function() {
    let showSkill = false;
    $('.elTop').click(function(e) {
        e.preventDefault();
        let target = $(this).attr('href');
        let targetPos = $(target).offset().top;
        $('html,body').animate({ scrollTop: targetPos - 49 }, 700);
    })
    $(window).scroll(function(e) {
        /* Act on the event */
        let windowScrollTop = $(window).scrollTop();
        let windowHeight = $(window).height();
        $('.elTop').each(function() {
            let target = $(this).attr('href');
            let targetPos = $(target).offset().top;
            let targetHeight = $(target).outerHeight();
            if (windowScrollTop >= (targetPos - 55) && windowScrollTop < (targetPos - 55 + targetHeight)) {
                $('.elTop').removeClass('active');
                $(this).addClass('active');
            }
        })
        $('.animate-right').each(function(e) {
            let thisPos = $(this).offset().top;
            let windowScrollTop = $(window).scrollTop();
            
            if (thisPos <= (windowScrollTop+windowHeight)){
                $(this).addClass('bounceInRight animated')
            }
        });
        $('.animate-left').each(function(e) {
            let thisPos = $(this).offset().top;
            let windowScrollTop = $(window).scrollTop();
            let windowHeight = $(window).height();
            if (thisPos <= (windowScrollTop+windowHeight)){
                $(this).addClass('bounceInLeft animated')
            }
        });
        let skillPosTop = $('#skills').offset().top;
        if(skillPosTop+(windowHeight/2) <= (windowScrollTop+windowHeight) && !showSkill){
            showSkill = true;
            $('.progress-bar').each(function() {
                let getWidth = $(this).data('progress');
                $(this).css('width',getWidth+'%');
            });
        }
    }); 


});