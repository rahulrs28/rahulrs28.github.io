


$(window).on("load",function(){ 

    $(".loader").fadeOut(2000);
})


$(document).ready(function(){
    $('#slides').superslides({
        animation:'fade',
        play: 3000
    });
    var typed=new Typed(".typed",{
        strings: ["Front-End Engineer.","Competetive Programmer.","JS Enthusiast."],
        typeSpeed:70,
        loop:true,
        startDelay:1000,
        showCursor:false
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        items:4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            958:{
                items:4
            }

        }
    })
    
    var skillTopOffset = $(".skillsection").offset().top;
    $(window).scroll(function(){
        if( window.pageYOffset> skillTopOffset- $(window).height()+200){
            $('.chart').easyPieChart({
                easing: 'easeInOut',
                barColor: '#fff',
                trackColor: false,
                scaleColor: false,
                lineWidth: 4,
                size:152,
                onStep: function(from,to,percent){
                    $(this.el).find('.percent').text(Math.round(percent));
                }
            });
        }
    })
  
});