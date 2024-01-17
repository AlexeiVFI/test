// Detect IE
var browserIE = false;
if(whichBrs() == 'Internet Explorer') browserIE = true;

// Detect Mobile
var browserMobile = false;
if($('body').hasClass('layout-mobile')) browserMobile = true;

// Elements
var $wrapper = $('#wrapper'),
	$header = $('header'),
	$section = $('section'),
	$footer = $('footer'),
	$valign = $('.valign'),
	$fullHeight = $('.full-height'),
	$imgFit = $('.img-fit'),
	$toLoad = $('.to-load');

var animRunning = false,
	currentScroll = -1,
	mouseTO;
$('.cropping-top, .cropping-bottom').hide();
$(window).load(function(){
	/* ////////////////////////////////////////
	//
	// Init
	//
	/////////////////////////////////////// */

	positionContent();


	
	$('body').addClass('site-loaded');


		positionContent();
	
}).resize(function(){
	positionContent();
}).scroll(function(){
	scrollContent();
});

$(document).ready(function() {
	setTimeout(function(){

		$('.stripe').addClass('hello ease-1');
		setTimeout(function(){
			$('.stripe').removeClass('ease-1').addClass('ease-2');
			$('.stripe').height('100%');
			
			setTimeout(function(){
				$('#loading-mask #logo').css('display', 'none');
				$('.cropping-top, .cropping-bottom').addClass('ease-1');
				$('.cropping-top, .cropping-bottom').height('50%');
				$('#loading-mask, .stripe, .bottom, .top').css('background', 'transparent');

				$('.cropping-top, .cropping-bottom').show(0);					
				$('.cropping-top, .cropping-bottom').addClass('ease-1');
				$('.cropping-top, .cropping-bottom').height('0%');
				$('#bg').css('transform', 'scale(1)');
					setTimeout(function(){
					$('h1').addClass('ease-1');
					$('h1').css('transform', 'translateY(0)');
					$('#copyright').width('90px');
				
				}, 1000);
				
			}, 1000);			
		}, 2000);
	}, 1000);
});



/* ////////////////////////////////////////////////////////////////////////////
//
// Position Content
//
/////////////////////////////////////////////////////////////////////////// */

function positionContent(){
	// Full Height
	$fullHeight.height($(window).height());
	
	$('.cropping-right, .cropping-left').width(($(window).width() / 2) - ($(window).height() * 0.25));
	$('.middle').width(($(window)).height() * 0.5);
	$('.middle').height($(window).height() / 2);


}

function scrollContent(){
	var totalScroll = $(document).height() - $(window).height();

	

	if(browserMobile){
		newScroll = $(window).scrollTop();
	} else {
		if(whichBrs() == 'Safari' || whichBrs() == 'Chrome'){
			newScroll = $('body').scrollTop();
		} else {
			newScroll = $('html,body').scrollTop();
		}
	}

	// To Load
	$toLoad.each(function(){
		if($wrapper.hasClass('site-loaded')){
			if(!$(this).hasClass('disabled')){
				var object = $(this);
				if(newScroll + $(window).height() * 0.9 > $(this).offset().top) {
					object.removeClass('no-anim');
					object.addClass('loaded');
				} else if(newScroll + $(window).height() < $(this).offset().top) {
					object.addClass('no-anim');
					object.removeClass('loaded');
				}
			}
		}
	});

	currentScroll = newScroll;
}

/* ////////////////////////////////////////////////////////////////////////////
//
// Get Browser
//
/////////////////////////////////////////////////////////////////////////// */

function whichBrs() {
	var agt=navigator.userAgent.toLowerCase();
	if (agt.indexOf("opera") != -1) return 'Opera';
	if (agt.indexOf("staroffice") != -1) return 'Star Office';
	if (agt.indexOf("webtv") != -1) return 'WebTV';
	if (agt.indexOf("beonex") != -1) return 'Beonex';
	if (agt.indexOf("chimera") != -1) return 'Chimera';
	if (agt.indexOf("netpositive") != -1) return 'NetPositive';
	if (agt.indexOf("phoenix") != -1) return 'Phoenix';
	if (agt.indexOf("firefox") != -1) return 'Firefox';
	if (agt.indexOf("chrome") != -1) return 'Chrome';
	if (agt.indexOf("safari") != -1) return 'Safari';
	if (agt.indexOf("skipstone") != -1) return 'SkipStone';
	if (agt.indexOf("msie") != -1) return 'Internet Explorer';
	if (agt.indexOf("netscape") != -1) return 'Netscape';
	if (agt.indexOf("mozilla/5.0") != -1) return 'Mozilla';
	if (agt.indexOf('\/') != -1) {
		if (agt.substr(0,agt.indexOf('\/')) != 'mozilla') {
			return navigator.userAgent.substr(0,agt.indexOf('\/'));
		} else return 'Netscape';
	} else if (agt.indexOf(' ') != -1)
		return navigator.userAgent.substr(0,agt.indexOf(' '));
	else return navigator.userAgent;
}
