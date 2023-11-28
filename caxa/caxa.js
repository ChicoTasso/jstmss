$(document).ready(function () {
    $('.box').click(function () {
        $('.box').animate({
            width: '300px',
            height:'300px',
            marginLeft:'250px',
            borderWidth:'20px',
            opacity: 0.5,
        }, 'slow');
    });
});