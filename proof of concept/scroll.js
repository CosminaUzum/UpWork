
function myFunction(x) {
  if (x.matches) { // If media query matches 
  	$(".left_side,main,.right_side").on("scroll", function() {
    	$(".left_side,main,.right_side").scrollTop($("this").scrollTop());
    });
  } else {
    $(".left_side,main,.right_side").on("scroll", function() {
    	$(".left_side,.right_side").scrollTop($("main").scrollTop());
	});
  }
};

var x = window.matchMedia("(max-width: 400px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes
