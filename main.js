(function(){
  $(".draggable").draggable({revert: "invalid"});
  $('.pod-box').droppable({
    drop: function( event, ui ) {
      // clear all pod boxes
      $('.pod-box').text('');
      // tell what pod you just drop it on
      $(this).text( 'you dropped a new person into pod ' + (+$(this).attr('id')[3]) );
    }
  });
})();