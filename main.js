(function(){
	$(".draggable").draggable({revert: "invalid"});
	$('.pod-box').droppable({
		drop: function( event, ui ) {
			window.lastBox = $(this);
			console.log('this is the div you dropped in', $(this));
			$('.pod-box').text('');
			$(this).text('you dropped a new person into pod ' + +$(this).attr('id')[3]);
		}
	});
})();