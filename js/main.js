

//toggle effect

$('.toggle').click(function(){
	$(this).next().fadeToggle('slow');
	$(".toggle-info").toggleClass("hidden");

});