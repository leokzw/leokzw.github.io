$(function (){

	var li = $("li");
	var links = $("a");
	var titles = $("h1, h2, h3");
	var menuItens = $(".menu-item a");
	var service = $("#services-boxes li");
	var serviceHeader = $("#services-boxes header");
	var serviceIcon = $("#services-boxes .s-icon");
	var serviceName = $(".service-title");
	var socialItem = $(".social li");
	var projects = $("#pj-list .project");
	var projectImg = $(".project img");
	var titleOverlay = $(".title-overlay");
	var projectText = $(".pj-title, .pj-subtitle");
	var languageBtn = $("#turn-language");
	var logoImg = $(".logo-img");
	var formElmts = $("input, textarea");
	var success = $("div.alert");

	var fixedHeader = $("#main-header");
	var mainMenu = $("#main-menu");

	// Atribuindo classes
	li.addClass("f-left");
	links.addClass("first-transition");
	service.addClass("service first-transition");
	serviceHeader.addClass("first-transition");
	serviceIcon.addClass("rnd first-transition");
	serviceName.addClass("letter-spacing uppercase");
	socialItem.addClass("social-item first-transition");
	projects.addClass("f-left");
	projectImg.addClass("third-transition");
	titleOverlay.addClass("third-transition text-align-center");
	projectText.addClass("third-transition");
	//formElmts.addClass("first-transition");
	success.addClass("animated bounceIn");

	//Preloader
	var preloaderContent = $("#preloader-content");
	$(window).load(function(){
       preloaderContent.fadeOut();

       //Init
		var wow = new WOW({
		    boxClass:     'wow',      // animated element css class (default is wow)
		    animateClass: 'animated', // animation css class (default is animated)
		    offset:       0,          // distance to the element when triggering the animation (default is 0)
		    mobile:       true,       // trigger animations on mobile devices (default is true)
		    live:         true        // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
     });



	//Random image banner
	/*var backgroundClass = ['banner-one','banner-two'];
    var x = Math.floor(Math.random() * backgroundClass.length);
    var classToAdd = backgroundClass[x];
    $('#banner').addClass(classToAdd);*/

	//Menu Fixo
	var portfolioItemLi = $(".menu-item.border-item");
	var fb = $(".fb-content");
	var timeDown = 175;

	if ($(this).scrollTop() > 0) {
			fixedHeader
				.stop().animate({backgroundColor: "rgb(60,60,60)"}).css({"visibility": "visible"});
			logoImg
				.stop().animate({ height: 48 }, timeDown);
			mainMenu
				.stop().animate({ "padding-top": 0, "padding-bottom": 0 }, timeDown);
			portfolioItemLi
	       		.css("border-color","rgba(0,0,0,0.2)");
	       	menuItens
	       		.addClass("scrolled");
			languageBtn
				.stop().animate({ top: 18 }, timeDown);
			fb
				.stop().animate({ "padding-top": 19 }, timeDown);
		}
		else {
			fixedHeader
				.stop().animate({backgroundColor: "transparent"});
			logoImg
				.stop().animate({ height: 64 }, timeDown);
			mainMenu
				.stop().animate({ "padding-top": 4, "padding-bottom": 4 }, timeDown);
			portfolioItemLi
	       		.css("border-color","rgba(0,0,0,0)");
	       	menuItens
	       		.removeClass("scrolled");
			languageBtn
				.stop().animate({ top: 22 }, timeDown);
			fb
				.stop().animate({ "padding-top": 23 }, timeDown);	
		}
	$(window).scroll(function(){
		if ($(this).scrollTop() > 0) {
			fixedHeader
				.stop().animate({backgroundColor: "rgb(60,60,60)"}).css({"visibility": "visible"});
			logoImg
				.stop().animate({ height: 48 }, timeDown);
			mainMenu
				.stop().animate({ "padding-top": 0, "padding-bottom": 0 }, timeDown);
			portfolioItemLi
	       		.css("border-color","rgba(0,0,0,0.2)");
	       	menuItens
	       		.addClass("scrolled");
			languageBtn
				.stop().animate({ top: 18 }, timeDown);	
			fb
				.stop().animate({ "padding-top": 19 }, timeDown);	
		}
		else {
			fixedHeader
				.stop().animate({backgroundColor: "transparent"});
			logoImg
				.stop().animate({ height: 64 }, timeDown);
			mainMenu
				.stop().animate({ "padding-top": 4, "padding-bottom": 4 }, timeDown);
			portfolioItemLi
	       		.css("border-color","rgba(0,0,0,0)");
	       	menuItens
	       		.removeClass("scrolled");
			languageBtn
				.stop().animate({ top: 22 }, timeDown);
			fb
				.stop().animate({ "padding-top": 23 }, timeDown);	
		}
	});

	var sobreMimItem = $(".sobre-mim-item");
	var portfolioItem = $(".portfolio-item");
	var contatoItem = $(".contato-item");

	var subtitleOffset = $(".description").offset().top;
	// var servicesBoxes = $("#services-boxes");

	//Active menuItens
	if ($(this).scrollTop() <= $("#portfolio").offset().top) {
		sobreMimItem
			.addClass("item-active");
		portfolioItem
			.removeClass("item-active");
		contatoItem
			.removeClass("item-active");
	}
	if ($(this).scrollTop() >= $("#portfolio").offset().top - fixedHeader.height()) {
		portfolioItem
			.addClass("item-active");
		sobreMimItem
			.removeClass("item-active");
		contatoItem
			.removeClass("item-active");
	}
	if ($(this).scrollTop() >= $("#contato").offset().top - fixedHeader.height()) {
		contatoItem
			.addClass("item-active");
		sobreMimItem
			.removeClass("item-active");
		portfolioItem
			.removeClass("item-active");
	}
	// //Services-box animation
	// if ($(this).scrollTop() >= subtitleOffset) {
	// 	servicesBoxes
	// 		.css("visibility","visible");
	// 	service
	// 		.addClass("fadeInUp");
	// }
	//scroll conditions
	$(window).scroll(function(){
		//Active menuItens
		if ($(this).scrollTop() <= $("#portfolio").offset().top) {
			sobreMimItem
				.addClass("item-active");
			portfolioItem
				.removeClass("item-active");
			contatoItem
				.removeClass("item-active");
		}
		if ($(this).scrollTop() >= $("#portfolio").offset().top - fixedHeader.height()) {
			portfolioItem
				.addClass("item-active");
			sobreMimItem
				.removeClass("item-active");
			contatoItem
				.removeClass("item-active");
		}
		if ($(this).scrollTop() >= $("#contato").offset().top - fixedHeader.height()) {
			contatoItem
				.addClass("item-active");
			sobreMimItem
				.removeClass("item-active");
			portfolioItem
				.removeClass("item-active");
		}
		// //Services-box animation
		// if ($(this).scrollTop() >= subtitleOffset) {
		// 	servicesBoxes
		// 		.css("visibility","visible");
		// 	service
		// 		.addClass("fadeInUp");
		// }
	});

	//Scroll Suave / Smooth Scroll
	var $window = $(window);
	var scrollTime = 0.3;
    var scrollDistance = 150;

	$window.on("mousewheel DOMMouseScroll", function(event){

		event.preventDefault();	

		var delta = event.originalEvent.wheelDelta/120 || -event.originalEvent.detail/3;
		var scrollTop = $window.scrollTop();
		var finalScroll = scrollTop - parseInt(delta*scrollDistance);

		TweenMax.to($window, scrollTime, {
			scrollTo : { y: finalScroll, autoKill:true },
				ease: Power1.easeOut,
				overwrite: 5							
			});

	});

	//Responsive
	/*if ($(window).width() >= 769) {
		$(".fb-like").attr('data-share','true');
	}
	if ($(window).width() <= 768) {
		$(".fb-like").attr('data-share','false');
	}
	$(window).on('resize', function() {
		var win = $(this);
		if (win.width() >= 769) {
			$(".fb-like").attr('data-share','true');
		}
		if (win.width() <= 768) {
			$(".fb-like").attr('data-share','false');
		}
	});*/


 	/*----------------------------------------------------*/
    /* PORTFOLIO CATEGORY
    /*----------------------------------------------------*/
	$('.cbp-filter-item').click(function() {
	  var currentCategory = $(this).text();
	  $('.current-category').text(currentCategory);
	});

    /*----------------------------------------------------*/
    /* CUBEPORTFOLIO
    /*----------------------------------------------------*/
     var gridContainer = $('#grid-container'),
        filtersContainer = $('#filters-container');

    gridContainer.cubeportfolio({

        defaultFilter: '*',

        animationType: 'unfold',

        gapHorizontal: 0,

        gapVertical: 0,

        gridAdjustment: 'responsive',

        caption: 'overlayBottomPush',

        displayType: 'bottomToTop',

        displayTypeSpeed: 100,

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',
        lightboxShowCounter: true,

        // singlePage popup
        singlePageDelegate: '.cbp-singlePage',
        singlePageDeeplinking: true,
        singlePageStickyNavigation: true,
        singlePageShowCounter: true,
        singlePageCallback: function (url, element) {
            // to update singlePage content use the following method: this.updateSinglePage(yourContent)
        },

        // singlePageInline
        singlePageInlineDelegate: '.cbp-singlePageInline',
        singlePageInlinePosition: 'above',
        singlePageInlineShowCounter: true,
        singlePageInlineInFocus: true,
        singlePageInlineCallback: function(url, element) {
            // to update singlePageInline content use the following method: this.updateSinglePageInline(yourContent)
        }
    });

    // add listener for filters click
    filtersContainer.on('click', '.cbp-filter-item', function (e) {

        var me = $(this), wrap;

        // get cubeportfolio data and check if is still animating (reposition) the items.
        if ( !$.data(gridContainer[0], 'cubeportfolio').isAnimating ) {

            if ( filtersContainer.hasClass('cbp-l-filters-dropdown') ) {
                wrap = $('.cbp-l-filters-dropdownWrap');

                wrap.find('.cbp-filter-item').removeClass('cbp-filter-item-active');

                wrap.find('.cbp-l-filters-dropdownHeader').text(me.text());

                me.addClass('cbp-filter-item-active');
            } else {
                me.addClass('cbp-filter-item-active').siblings().removeClass('cbp-filter-item-active');
            }

        }

        // filter the items
        gridContainer.cubeportfolio('filter', me.data('filter'), function () {});

    });

    // activate counter for filters
    gridContainer.cubeportfolio('showCounter', filtersContainer.find('.cbp-filter-item'));


// add listener for load more click
    $('.cbp-l-loadMore-button-link').on('click', function(e) {

        e.preventDefault();

        var clicks, me = $(this), oMsg;

        if (me.hasClass('cbp-l-loadMore-button-stop')) return;

        // get the number of times the loadMore link has been clicked
        clicks = $.data(this, 'numberOfClicks');
        clicks = (clicks)? ++clicks : 1;
        $.data(this, 'numberOfClicks', clicks);

        // set loading status
        oMsg = me.text();
        me.text('carregando...');

        // perform ajax request
        $.ajax({
            url: me.attr('href'),
            type: 'GET',
            dataType: 'HTML'
        })
        .done( function (result) {
            var items, itemsNext;

            // find current container
            items = $(result).filter( function () {
                return $(this).is('div' + '.cbp-loadMore-block' + clicks);
            });

            gridContainer.cubeportfolio('appendItems', items.html(),
                 function () {
                    // put the original message back
                    me.text(oMsg);

                    // check if we have more works
                    itemsNext = $(result).filter( function () {
                        return $(this).is('div' + '.cbp-loadMore-block' + (clicks + 1));
                    });

                    if (itemsNext.length === 0) {
                        me.text('isso é tudo!');
                        me.addClass('cbp-l-loadMore-button-stop');
                    }

                 });

        })
        .fail(function() {
            // error
        });

    });

});

// menu
!function () {
  var element = document.getElementById('menu-toggle')
  function toggle(event) {
    element.href = (document.location.hash == '#main-menu') ? '#' : '#main-menu'
    return toggle
  }
  window.addEventListener('hashchange', toggle())
}() // Fim!



//BACK TO TOP
jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = {duration:600,easing:'easeInOutExpo'},
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});


jQuery('#cody-info ul li').eq(1).on('click', function(){
$('#cody-info').hide();
});