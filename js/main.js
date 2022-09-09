AOS.init();


// Identificar la altura de la ventana
// Se crea una condicion que identifica s la ventana se a hecho scroll 

$(document).ready(function(){ 
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('.scroll').fadeIn(); 
        } else { 
            $('.scroll').fadeOut(); 
        } 
    });
	
	
	//Se reutiliza algo de codigo para poder dar efectos a algunos elementos
	
	
	// Con esta funcion animamos el body y el html para escuche un click al elemento la ventana haga scroll hacia a riba automaticamente
	
    $('.scroll, .menu__items').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 1000); 
        return false; 
    });
	
	// Con esta funcion animamos el body y el html para escuche un click al elemento la ventana haga scroll hacia a abajo automaticamentes
	
    $('.menu__items-down').click(function(){ 
        $("html, body").animate({ scrolltop: 0 }, 1500); 
        return true; 
    });
	
	
	// Esta sección es para mostrar el menu y volerlo hacer aparecer
	
	var menuBtn_open = $('#menu_open'),
		menuBtn_close = $('#menu_close'),
		menu = $('.menu');
	
    $('.menu__items-link').click(function(){ 
      	menu.removeClass('show');
    });		
	

	
	menuBtn_open.click(function(){
		 
		if (menu.hasClass('show')){
			menu.removeClass('show');
			
		}else{
			menu.addClass('show');	
		}
	});
	
	menuBtn_close.click(function(){
		 
		if (menu.hasClass('show')){
			menu.removeClass('show');
			
		}else{
			menu.addClass('show');
		}
		
	});	
	
});