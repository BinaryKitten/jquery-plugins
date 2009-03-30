/* jQuery.animations - v0.2 - K Reeve aka BinaryKitten
*
*		Various Animations - I don't claim that i originally coded all of these
*		I've just added them to this collection for my own usage
*
*
* ------------ Version History -----------------------------------
* v0.2
* 	placed the function inside an enclosure
*
* v0.1
* 	The 1st version - Flash, animDelay, FadeOutSlideUp
*/

(function($){
  jQuery.fn.extend({
	flash:			  	function(speed,fnc) {
						  var $this = $(this);
						  return $this.fadeOut(speed,function(){
							if (typeof fnc != null) {
							  $this.fadeIn(speed,fnc);
							} else {
							  $this.fadeIn(speed);
							}
						  });
						},
						
	animDelay:			function(amount) {
						  var $this = $(this);
						  return $this.animate({'opacity':$this.css('opacity')},amount);
						},
						
	FadeOutSlideUp: 	function(speed, easing, callback) {
						  return this.animate({opacity: 0, height: 0}, speed, easing, callback);
						}
	
  });  
})(jQuery);
