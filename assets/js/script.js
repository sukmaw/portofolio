$(document).ready( function(){
	$('.sidenav').sidenav();
	$('.parallax').parallax();
	
	$('.main-loader').delay(2000).stop()
	
	// navsmooth
	
	$(".navsmooth").on('click', function(event) {
		if(this.hash !== ""){
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash = hash;
			});
		}
	});
	
} )