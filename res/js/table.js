$('.cardiovascular').hover(function() {
    $('.cardiovascular').css("cssText", "background-color: rgba(22,8,132,0.5) !important");
}, function() {
    $('.cardiovascular').css("cssText", "background-color: rgba(22,8,132,0.3) !important");
});

$('.actividadFuerza').hover(function() {
    $('.actividadFuerza').css("cssText", "background-color: rgba(132,8,8,0.5) !important");
}, function() {
    $('.actividadFuerza').css("cssText", "background-color: rgba(132,8,8,0.3) !important");
});

$('.actividadMixta').hover(function() {
    $('.actividadMixta').css("cssText", "background-color: rgba(8,132,8,0.5) !important");
}, function() {
    $('.actividadMixta').css("cssText", "background-color: rgba(8,132,8,0.3) !important");
});

//var displayCardio = true;
//var displayFuerza = true;
//var displayMixta = true;
//$( ".cardiovascular" ).click(function() {
//    if (displayFuerza){
//        $('.actividadFuerza').unbind('hover');
//        $('.actividadFuerza').css("cssText", "background-color: rgba(51, 51, 51, 0.5) !important");
//        $('.actividadFuerza').children().hide();
//        displayFuerza = false;
//    }else{
//        $('.actividadFuerza').css("cssText", "background-color: rgba(132,8,8,0.3) !important");
//        $('.actividadFuerza').children().show();
//        displayFuerza = true;
//    }
//    if (displayMixta){
//        $('.actividadMixta').unbind('hover');
//        $('.actividadMixta').css("cssText", "background-color: rgba(51, 51, 51, 0.5) !important");
//        $('.actividadMixta').children().hide();
//        displayMixta = false;
//    }else{
//        $('.actividadMixta').css("cssText", "background-color: rgba(8,132,8,0.3) !important");
//        $('.actividadMixta').children().show();
//        displayMixta = true;
//    }
//
//});