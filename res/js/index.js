//$(".wrap").hover(function(){
//    $(this).children(".tituloActividad").addClass("tituloActividadActivo");
//},function(){
//    $(this).children(".tituloActividad").removeClass("tituloActividadActivo");
//});

$(window).scroll(function(){
    if ($(window).scrollTop() >= $("#imagen_principal").height()) {
        $('#header').addClass('fixed');
        $("#relleno").show();
    }
    else {
        $('#header').removeClass('fixed');
        $("#relleno").hide();
    }
});
function escrolear(lugar) {
    var target = $(lugar);
    $('html, body').animate({
        scrollTop: (target.offset().top - $("#header").height())
    }, 750, "swing");
    return false;
}