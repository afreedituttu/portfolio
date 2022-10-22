$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }if(this.scroll>500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    $(".scroll-up-btn").click(function(){
        $('html').animate({scrollTop:0})
    })
    //typing animation
    var typed = new Typed(".typing",{
        strings:["Youtuber","Developer","Blogger","Designer","Freelancer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    })
    var typed = new Typed(".typing-2",{
        strings:["Youtuber","Developer","Blogger","Designer","Freelancer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    })
    // toggle menubar/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active")
        $('.menu-btn i').toggleClass("active")
    })
    // owl carousel
    $(".carousel").owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:false
            }
        }
    })
});