$(document).ready(function(){
    $("#burger-container").on('click', function(){
        $(this).toggleClass("open");
        $("nav").slideToggle(400, function() {
			$(this).toggleClass("nav-expanded").css('display', '');
		});
  		//$(".header_content").owlCarousel();
    });

});

