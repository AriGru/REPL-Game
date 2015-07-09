var main = function() {

	$('.dropdown img').click(function(){ 
		// console.log("clicking works.")
		$('.dropdown-menu').toggle();
  });
}
 
$(document).ready(main);