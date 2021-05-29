$(document).ready(function(){
    $('[data-toggle="popover"]').popover({
        placement : 'bottom',
        trigger : 'hover'
    });
});


// Select all tabs
$('.nav-tabs a').click(function(){
    $(this).tab('show');
  })
  
  // Select tab by name
  $('.nav-tabs a[href="#home"]').tab('show')
  
  // Select first tab
  $('.nav-tabs a:first').tab('show')
  
  // Select last tab
  $('.nav-tabs a:last').tab('show')
  
  // Select fourth tab (zero-based)
  $('.nav-tabs li:eq(3) a').tab('show')


var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})
