$(document).ready(function () {
    $('#iniciar').click(function () {
    $('.box').animate({
        width:'300px',
        height:'300px',
        marginLeft:'250px',
        borderWidth:'20px',
        opacity:1,
    },5000);
    $('#parar').click(function () {
        $('.box').stop ();
    })  
    });
    $('#reiniciar').click(function(){
        $('.box').animate({
            width: '100px',
            height: '100px',
            marginLeft:'250px',
            borderWidth:'10px',
            opacity:1

        })
    })
    $('#sumir').click(function(){
        $('.box').animate({
            opacity:0,
        })
    })
    $('#voltar').click(function(){
        $('.box').animate({
            opacity:1.0,
        })
    })
})