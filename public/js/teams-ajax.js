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

  $('.edit-form').submit(function(e){
  e.preventDefault();
  // ajax call that automatically uses method POST
    $.ajax({
      method: 'PUT',
      url: $(this).attr('action'),
      // pass data in form of an object
      data: {
        name: $('#new-name').val(),
        members: $('#members').val()
      }
      //if return successfully
    }).done(function(data){
      console.log('got to the promise!');
      window.location.href = '/teams';
    });// End AJAX
  });// End submit handler
}); // End document ready
