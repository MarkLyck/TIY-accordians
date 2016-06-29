var $accords = $('.accord:not(.sign-out)');

$accords.on('click', function(){
  $(this).toggleClass('selected');
  var $ul = $(this).find('ul');
});
