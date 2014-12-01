

//toggle effect

$('.toggle').click(function(){
	$(this).next().fadeToggle('slow');
	$(".contact-info").toggleClass("hidden");

});