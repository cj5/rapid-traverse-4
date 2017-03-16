$(document).ready(function(){
    $('#navicon').click(function(){
        $(this).toggleClass('open'); //(navicon transition)
        $('.menu').toggleClass('open'); //(adds nav menu)
    });

    //toggles navicon when a is clicked from .menu only
    $('a.a-mobile').click(function(){
        $('#navicon').toggleClass('open');
        $('.menu').removeClass('open');
    });

    //creates a smooth scroll when any a link is clicked
    $('a').click(function(){
        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 500);
        return false;
    });
    
    function updateContainer() {
        var theHeight = $(window).height();
        var titleWrapperHeight = $('.title-wrapper').height();
        var scroll = $(window).scrollTop();
        
        //makes landing page full viewport height
        $('.title-wrapper').css('padding-top', theHeight/2-titleWrapperHeight/2);
        $('.title-wrapper').css('padding-bottom', theHeight/2-titleWrapperHeight/2);
        
        //makes navicon disappear when dragging viewport to larger width
        if ($(window).innerWidth() >= 753) {
            if (scroll <= theHeight) {
                $('#navicon').css('opacity', 0);
            }

            //fades navicon in/out depending on scroll position
            $(function() {
                $(window).scroll(function() {
                    var scroll = $(window).scrollTop();
                    if (scroll >= theHeight/2+titleWrapperHeight/2) {   
                        $('#navicon').css('opacity', 1);//fades in navicon
                    } else {
                        $('#navicon').css('opacity', 0);//fades out navicon
                    } 
                });
            });
        } else {
            $('#navicon').css('opacity', 1);
            $(function() {
                $(window).scroll(function() {
                    var scroll = $(window).scrollTop();
                    if (scroll) {   
                        $('#navicon').css('opacity', 1);
                    } else {
                        $('#navicon').css('opacity', 1);
                    } 
                });
            });
        }     
    }

    updateContainer();

    $(window).resize(function() {
        updateContainer();
    });
});