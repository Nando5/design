console.log('custom js is running!');

$("#hide").click(function(){
    $('*[data-work="print"]').hide();
});

$("#show").click(function(){
    $('*[data-work="print"]').show();
});

$("#xxx").click(function(){
	console.log('xxx is working');
	$.getScript("html5lightbox.js");
});