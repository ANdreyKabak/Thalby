
$(document).ready(function() {
	$('.burger').click(function() {
		$('.burger, .navigate__list').toggleClass('active');
		$('body').toggleClass('lock');
	});
});