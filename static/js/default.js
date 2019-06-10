$(document).ready(function () {
	$('.carousel').owlCarousel({
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
		responsive: {
			0 : {items: 1},
		    768 : {items: 3}
		}
	});
	$(".page-scroll a[href^='#']").on('click', function(e) {
		e.preventDefault();

		var hash = this.hash;

		$('html, body').animate({
		   	scrollTop: $(hash).offset().top - 100
		 	}, 300, function() {
		   		window.location.hash = hash;
		});
	});
});
$(window).load(function() {
	$('#loader').fadeOut();
	$('body').scrollspy({ target: '.header nav', offset: 130 });
});
$(window).scroll(function(){
	if($(document).scrollTop() > 60)
		$('.header').addClass('mini');
	else
		$('.header').removeClass('mini')  
});

$(window).load(function() {
	if ($(".month").hasClass("active")){  $(".m").show();  $(".y").hide(); }
    if ($(".year").hasClass("active")){  $(".y").show();  $(".m").hide(); }
});

$('.btn-toggle').click(function() {
    $(this).find('.btn').toggleClass('active');  
    
    if ($(this).find('.btn-danger').size()>0) {
    	$(this).find('.btn').toggleClass('btn-danger');
    }  

    if ($(".month").hasClass("active")){  $(".m").show();  $(".y").hide(); }
    if ($(".year").hasClass("active")){  $(".y").show();  $(".m").hide(); }

    $(this).find('.btn').toggleClass('btn-default');
       
});

