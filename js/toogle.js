$('.registration__switch').click(function () {
    if (!$('.registration__switch').hasClass('active')) {
        $('.registration__switch').addClass('active')
        $('.switch--slider').css({
            '-webkit-transform': 'translateX(20px)'
        })
    } else {
        $('.switch--slider').css({
           '-webkit-transform': 'translateX(0px)'
            
        })
        $('.registration__switch').removeClass('active')
            }
        
})