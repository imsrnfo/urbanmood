var owl = $(".owl-nome");
owl.owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots: true,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    },
    animateOut: 'fadeOut',
    afterMove: function (elem) {
      var current = this.currentItem;
      var src = elem.find(".owl-item").eq(current).find("img").attr('src');
      console.log('Image current is ' + src);
    }
});



owl.on('translated.owl.carousel',function(property){
   
   if ($(".owl-item.active").length !== 1){

	$(".owl-item").each(function(){
        if (!$(this).hasClass("active")) $(this).addClass("transparente");
    });
   
   $(".owl-item").addClass("transparente");
   
   $(".owl-item.active").each(function(){
        if ($(this).first()[0]!== $(".owl-item.active").first() [0]
                &&  $(this).last()[0]!== $(".owl-item.active").last() [0]){
					$(this).removeClass("transparente");
				}		
    });
   
   }else{
	   $(".owl-item").removeClass("transparente");
   }
   
});

owl.on('resized.owl.carousel',function(property){
   
   if ($(".owl-item.active").length !== 1){

	$(".owl-item").each(function(){
        if (!$(this).hasClass("active")) $(this).addClass("transparente");
    });
   
   $(".owl-item").addClass("transparente");
   
   $(".owl-item.active").each(function(){
        if ($(this).first()[0]!== $(".owl-item.active").first() [0]
                &&  $(this).last()[0]!== $(".owl-item.active").last() [0]){
					$(this).removeClass("transparente");
				}		
    });
   
   }else{
	   $(".owl-item").removeClass("transparente");
   }
   
});

owl.trigger('resized.owl.carousel', [300]);