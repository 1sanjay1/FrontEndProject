jQuery(document).ready(function(){

	jQuery('#myBtn').css('display','none');
	var navOffset = jQuery("nav").offset().top + 40;

	var scrollPos = jQuery(window).scrollTop();
	if(scrollPos >= navOffset){
			jQuery('#myBtn').css('display','block');
	}
	jQuery(window).scroll(function(){
		var scrollPos = jQuery(window).scrollTop();

		if(scrollPos >= navOffset){
			jQuery('#myBtn').css('display','block');
		}else{
			jQuery('#myBtn').css('display','none');
		}

	});

});

jQuery(document).ready(function(){

	//go to the top of the page
	$("#myBtn").click(function(){	
		$("html, body").animate({ scrollTop: -$(document).height() }, 2000);	
	});

	/* go the the another element in the same page */

	// For About us page
	$("#about").click(function(){	
		var navOffset = jQuery("#section1").offset().top;
		$("html, body").animate({ scrollTop: navOffset }, 2000);	
	});

	// From Contact link to the contact page.
	$("#contact").click(function(){	
		var navOffset = jQuery("#section2").offset().top;
		$("html, body").animate({ scrollTop: navOffset }, 2000);	
	});

	//News page
	$("#news").click(function(){
		var navOffset = jQuery("footer").offset().top;	
		$("html, body").animate({ scrollTop: navOffset }, 3000);	
	});
});


jQuery(function($){
    $('#search-trigger').click(function(){
        $('#search-input').toggleClass('search-input-open');
    });

    $(document).click(function(e){
        if(!$(e.target).closest('.ngen-search-form').length){
            $('#search-input').removeClass('search-input-open');
        }
    })
});