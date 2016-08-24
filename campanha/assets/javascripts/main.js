$(function (){

	//Preloader
	var preloaderContent = $("#preloader-content");
	$(window).load(function(){
       preloaderContent.fadeOut();
       //Init
		var wow = new WOW({
		    boxClass:     'wow',      // animated element css class (default is wow)
		    animateClass: 'animated', // animation css class (default is animated)
		    offset:       0,          // distance to the element when triggering the animation (default is 0)
		    mobile:       false,       // trigger animations on mobile devices (default is true)
		    live:         true        // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();	

		//Open modal
		$('body,html').scrollTop;
		var options = { };
		$('[data-remodal-id=modal]').remodal(options).open();
     });

	var play = $(".watch-bt");
	var video = $(".iframer-container");
	var close = $(".closer");
	var youtube = $(".iframer");
	var downloadModal = $(".download-modal-bt");
	var downloadBt = $(".download-bt");
	var languageBt = $(".language-bt");
	var push = $(".push");
	var menuUl = $(".site-nav-categories");
	var galeriaBt = $(".galeria-bt");
	var mostrarTodosBt = $(".mostrar-todos-bt");
	var englishItem = $(".english-item");

	play
		.click(function() {
			//alert("Desculpe! O vídeo em agradecimento por 1 ano de campanha #AjudeLeokz ainda não foi concluído. Em breve estará disponível, aguarde!");
  			$("body").addClass('modal-open'); // adiciona classe
  			video.show(); // display block 
  			//alert("O site ainda não foi finalizado, aguarde o novo vídeo da campanha #AjudeLeokz!"); 
  			$(".iframer")[0].src += "&autoplay=1"; // Dá o autoplay
  			$(this).blur(); // Tira o foco

		});
	close
		.click(function() {
  			$("body").removeClass('modal-open'); // remove classe
  			video.hide(); // display none
  			$(".iframer")[0].src = "https://www.youtube.com/embed/nlKzB0os5Gk?rel=0"; // "Zera" o vídeo
		});
	downloadBt
		.click(function() {
			alert("O vídeo estará disponível para download em breve.");
		});
	downloadModal
		.click(function() {
			alert("O vídeo estará disponível para download em breve.");
		});
	languageBt
		.click(function() {
			alert("I'm working on it.");
		});
	push
		.click(function() {
			menuUl.slideToggle(300);
			$('.push-icon').toggleClass('icon-menu').toggleClass('icon-cross');
		});
	galeriaBt
		.click(function() {
			alert("A galeria de fotos estará disponível em breve. Por favor, aguarde!");
		});
	mostrarTodosBt
		.click(function() {
			alert("Esta página estará disponível em breve. Por favor, entre em contato para incluir a sua logo!");
		});
	englishItem
		.click(function() {
			alert("I told you, I`m working on it.");
		});
	$(".site-nav-category-adoenca, .site-nav-category-historia, .site-nav-category-imprensa, .donations-item, .actions-item")
		.click(function() {
			alert("Esta página estará dinponível em breve. Por favor, aguarde!");
		});

	// Check the initial Poistion of the Sticky Header
        var stickyHeaderTop = $('#doacao').offset().top,
        	menuTime = 30;

        if( $(window).scrollTop() > stickyHeaderTop ) {
            $('.site-nav').stop().animate({top: 0}, menuTime);
        } else {
            $('.site-nav').stop().animate({top: -55}, menuTime);
        }
 
        $(window).scroll(function(){
            if( $(window).scrollTop() > stickyHeaderTop ) {
                $('.site-nav').stop().animate({top: 0}, menuTime);
            } else {
                $('.site-nav').stop().animate({top: -55}, menuTime);
            }
        });

	//BACK TO TOP
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 400,
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
}); //FIM
