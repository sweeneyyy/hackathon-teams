$(document).ready(function() {

$('.delete').click(function(e){
  e.preventDefault();
  // ajax call that automatically uses method POST
  $.ajax({
    url: $(this).attr('href'),
    method: 'DELETE'
    //if return successfully
  }).done(function(data){
    window.location.href = '/teams';
  });
});

});
