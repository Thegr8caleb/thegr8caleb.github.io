
$("img.lazy").lazyload({ 
    effect : "fadeIn"
});

$("a.new-window, .footer-list a").click(function(){
 
 	$(this).target = "_blank";
 	window.open($(this).prop('href'));
    
    return false;
 
 
 });
 
 
 $("#notes a").click(function(){
 
 	$(this).target = "_blank";
 	window.open($(this).prop('href'));
    
    return false;
 
 
 });

$("a.email-lnk").each(function () {

        var $link = $(this);
        var email = $link.attr("href").split("||");

        $link.attr("href", "mailto:" + email[1] + email[0]);

    });




$("#home-top").headroom();

 
/*
var lastScrollTop = 0;
var distance = 200;
var nav = $(".nav-top");
var navHeight = $(".nav-top").outerHeight();

$(window).scroll(function () {
    var a = $(this).scrollTop();
    Math.abs(lastScrollTop - a) <= distance || (lastScrollTop > a ? ($("header.nav-top").addClass("nav-fixed"), setTimeout(function () {
        $("header.nav-top").removeClass("nav-fixed"), $(window).scrollTop() - 1000 <= 0 ? $("header.nav-top").addClass("nav-fixed") : $("header.nav-top").removeClass("nav-fixed")
    }, 9e3)) : $("header.nav-top").removeClass("nav-fixed"), lastScrollTop = a);

 var scroll = $(window).scrollTop();
if (scroll >= 5) {
    $("header").removeClass("nav-root");
}

else if (scroll <= 6) {
    $("header").addClass("nav-root");
}


});


*/

	/*
	$(window).scroll(function() {
			$('#hi-me').each(function(){
			var imagePos = $(this).offset().top;
			
			var topOfWindow = $(window).scrollTop();
				if (imagePos < topOfWindow+400) {
					$(this).addClass("bounceIn");
				}
			});
			
		});	
	*/