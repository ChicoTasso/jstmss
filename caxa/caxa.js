$(document).ready(function () {
    $('.box').click(function () {
        $('.box').animate({width:'300px'});
        $('.box').animate({height:'300px'});
        $('.box').animate({marginLeft:'250px'});
        $('.box').animate({borderWidth:'20px'});
        $('.box').animate({opacity:0.5});
    });
})