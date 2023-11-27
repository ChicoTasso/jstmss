// $(document).ready(function (){
//     $('#btnShow').mouseenter(function (){
//        $('p').slideDown();
//    });

//     $('#btnHide').mouseenter(function (){
//         $('p').slideUp();
//    });
// });



$(document).ready(function () {
    $('#btnHide').click(function () {
        $('p.01').slideUp();
        $('p.02').slideUp('fast');
        $('p.03').slideUp('slow');
        $('p.04').slideUp(50);
        $('p.05').slideUp(2000);
    });
});
$(document).ready(function () {
    $('#btnShow').click(function () {
        $('p.01').slideDown();
        $('p.02').slideDown('fast');
        $('p.03').slideDown('slow');
        $('p.04').slideDown(50);
        $('p.05').slideDown(2000);
    });
});