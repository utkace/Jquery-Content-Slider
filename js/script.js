$(document).ready(function(){ //Jquery Starts
	//Set Options
	var speed = 500; //Transition Speed;
	var autoswitch = true; //auto slider option;
	var autoswitch_speed = 4000; //auto slider speed
	
	//add initial active class
	
	$('.slide').first().addClass('active'); //class slide = slide active
	
	//Hide all slides
	$('.slide').hide();
	
	//show first slide
	$('.active').show();
	
	//next functionality
	$('#next').on('click', nextSlide);
	
	//previous functionality
	$('#prev').on('click', prevSlide);
	
	//auto slider
	if(autoswitch == true){
		setInterval(nextSlide,autoswitch_speed);
	}

	//Switch to the next slide
	function nextSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':last-child')){
			$('.slide').first().addClass('active');
		} else {
			$('.oldActive').next().addClass('active');
		}
		
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}
	
	//Switch to the prev slide
	function prevSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':first-child')){
			$('.slide').last().addClass('active');
		} else {
			$('.oldActive').prev().addClass('active');
		}
		
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(speed);
		$('.active').fadeIn(speed);
	}
});