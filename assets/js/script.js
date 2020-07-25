$(function(){
    //parallax header
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
    var ts = new Date(2020, 9, 4, 17, 30);
	
	$('#countdown-timer').countdown({
		timestamp : ts,
		callback : function(days, hours, minutes, seconds){
		}
    });
    
    //efeito btn primary secondary
    $('.col-2 .box-2 .btn-primary, .col-2 .box-2 .btn-secondary').mouseenter(function(){
        $(this).parent().toggleClass('animation');
    });

    //scrollmagic
    var controller = new ScrollMagic.Controller();
    
    var scene1 = new ScrollMagic
        .Scene({triggerElement: "#header", duration: 800, offset: 500})
        .setTween("#countdown", {
            opacity: 1,
            y: 0
        })
        .addIndicators({name: "opacity #countdown"})
        .addTo(controller);

    var scene2 = new ScrollMagic.Scene({triggerElement: "#party", duration: 500})
        .setTween("#party", {
            opacity: 1
        })
        .addIndicators({name: "opacity #party"})
        .addTo(controller);
    
    var scene3 = new ScrollMagic.Scene({triggerElement: "#party", duration: 500, offset: 300})
        .setTween("#party .col-2 .box-1", {
            opacity: 1,
            y: 0
        })
        .addIndicators({name: "col2 box1"})
        .addTo(controller);
    
    var scene4 = new ScrollMagic.Scene({triggerElement: "#party", duration: 500, offset: 300})
        .setTween("#party .col-2 .box-2", {
            opacity: 1,
            x: 0
        })
        .addIndicators({name: "col2 box2"})
        .addTo(controller);
    
    var scene5 = new ScrollMagic.Scene({triggerElement: "#party", duration: 500, offset: 300})
        .setTween("#party .col-1 .box-1", {
            opacity: 1,
            x: 0
        })
        .addIndicators({name: "col1 box1"})
        .addTo(controller);
    
    var scene6 = new ScrollMagic.Scene({triggerElement: "#party", duration: 500, offset: 300})
        .setTween("#party .col-1 .box-2", {
            opacity: 1,
            y: 0
        })
        .addIndicators({name: "col1 box2"})
        .addTo(controller);

    var scene7 = new ScrollMagic.Scene({triggerElement: "#party", duration: 800, offset: 315})
        .setPin("#party")
        .addIndicators({name: "pin party"}) // add indicators (requires plugin)
        .addTo(controller);

});