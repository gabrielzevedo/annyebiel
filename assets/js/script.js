$(function(){
    if($(window).innerWidth() >= 1000) {
        $("#header").mousemove(function(e) {
            parallaxIt(e, ".bg-wrapper", ".bg", -30);
        });
    }

    function parallaxIt(e, parent, target, movement) {
        var $this = $(parent);
        var relX = e.pageX - $this.offset().left;
        var relY = e.pageY - $this.offset().top;

        TweenMax.to(target, 1, {
            x: (relX - $this.width() / 2) / $this.width() * movement,
            y: (relY - $this.height() / 2) / $this.height() * movement
        });
    }

    //countdown
    // var ts = new Date(2020, 6, 22, 22, 31),
    var ts = new Date(2020, 9, 4, 17, 30);
	
	$('#countdown-timer').countdown({
		timestamp : ts,
		callback : function(days, hours, minutes, seconds){
		}
	});
});