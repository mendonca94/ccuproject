"use strict";
$(document).ready(function () {
            
    /* sidebar left  expand collapase */
    $('.menu-left').on('click', function () {
        $('body').addClass('menu-left-open');
        $('body .wrapper').append('<div class="backdrop"></div>');
        $('.backdrop').on('click', function () {
            $('body').removeClass('menu-left-open');
            $('.backdrop').fadeOut().remove();
        });
    });

    $('.sidebar-close').on('click', function () {
        $('body').removeClass('menu-left-open');
        $('.backdrop').fadeOut().remove();
    });

    /* sideabr right expand collapase */
    $('.menu-right').on('click', function () {
        $('body').addClass('menu-right-open')
        $('body .wrapper').append('<div class="backdrop-right"></div>');
        $('.backdrop-right, .menu-left-close').on('click', function () {
            $('body').removeClass('menu-right-open');
            $('.backdrop-right').fadeOut().remove();
        });
    });

    /* search control visible slide hide slide */
    $('.searchbtn').on('click', function () {
        $('.searchcontrol').addClass('active');
    });
    $('.close-search').on('click', function () {
        $('.searchcontrol').removeClass('active');
    });

    /* theme cookie usage */

    /* theme color cookie */
    if ($.type($.cookie("theme-color")) != 'undefined' && $.cookie("theme-color") != '') {
        $('body').removeClass('color-theme-yellow');
        $('body').addClass($.cookie("theme-color"));
    }
    $('.theme-color .btn').on('click', function () {
        $('body').removeClass('color-theme-yellow');
        $('body').removeClass($.cookie("theme-color"));
        $.cookie("theme-color", $(this).attr('data-theme'), {
            expires: 1
        });
        $('body').addClass($.cookie("theme-color"));

    });

    /* theme layout cookie */
    if ($.type($.cookie("theme-color-layout")) != 'undefined' && $.cookie("theme-color-layout") != '') {
        $('body').removeClass('theme-light');
        $('body').addClass($.cookie("theme-color-layout"));
    }
    $('.theme-layout .btn').on('click', function () {
        $('body').removeClass('theme-light');
        $('body').removeClass($.cookie("theme-color-layout"));
        $.cookie("theme-color-layout", $(this).attr('data-layout'), {
            expires: 1
        });
        $('body').addClass($.cookie("theme-color-layout"));

    });

    /* theme OS cookie */
    if ($.type($.cookie("theme-os")) != 'undefined' && $.cookie("theme-os") != '') {
        $('html').removeClass('md');
        $('html').addClass($.cookie("theme-os"));
    }
    $('.theme-os .btn').on('click', function () {
        $('html').removeClass('md');
        $('html').removeClass($.cookie("theme-os"));
        $.cookie("theme-os", $(this).attr('data-os'), {
            expires: 1
        });
        $('html').addClass($.cookie("theme-os"));

    });

    /* page content height for sticky footer */
    $('.content-sticky-footer').css({
        'padding-bottom': $('.footer-wrapper').height()
    });
    $('.footer-wrapper').css('margin-top', -($('.footer-wrapper').height()));


    /* page inside iframe just for demo app */
    if (self !== top) {
        $('body').addClass('max-demo-frame')
    }

});

$(window).on('load', function() {
    $('.loader').remove();
});

function timer(bID, _bID, time){
	$(bID).css({"display":"block"});
	
	//1hora = 3600000 ms
	time = time * 3600000; //time in ms
	
	var countDownDate = new Date().getTime() + time;
	
	setInterval(function() {
		var now = new Date().getTime();
		var distance = countDownDate - now;
		
		// Time calculations for days, hours, minutes and seconds
		var days = Math.floor(distance / (1000 * 60 * 60 * 24));
		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((distance % (1000 * 60)) / 1000);
		
		// Display the result in the element with id="demo"
		$(bID).html("Tempo restante: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ");
		
		// If the count down is finished, do something 
		/*if (distance < 0) {
		  clearInterval(x);
		  ...
		}*/
	}, 1000);
function searchPath(){
    var selectorFrom = document.getElementById('searchPath_from');
    var valueFrom = selectorFrom[selectorFrom.selectedIndex].value;

    var selectorTo = document.getElementById('searchPath_to');
    var valueTo = selectorTo[selectorTo.selectedIndex].value;

    var result = $("#searchPath_result");
    
    if (valueFrom=="Trindade" && valueTo=="Estádio do Dragão"){
        result.html("<label style='font-size:15px;'>Para o trajeto selecionado, deve utilizar um título Z2</label><button onclick='decreaseAmount(1.20)' type='button' style='border-radius:10px; background: red; border-color: red;' class='btn btn-success'>Comprar (1.20€)</button><image style='float:none' src='img/C1_mapa.png'>");
    } else if (valueFrom=="Trindade" && valueTo=="Fórum da Maia"){
        result.html("<label style='font-size:15px;'>Para o trajeto selecionado, deve utilizar um título Z3</label><button onclick='decreaseAmount(1.60)' type='button' style='border-radius:10px; background: red; border-color: red;' class='btn btn-success'>Comprar (1.60€)</button><image style='float:none' src='img/C1_mapa.png'>");
    } else if (valueFrom=="Trindade" && valueTo=="Santa Clara"){
        result.html("<label style='font-size:15px;'>Para o trajeto selecionado, deve utilizar um título Z6</label><button onclick='decreaseAmount(2.80)' type='button' style='border-radius:10px; background: red; border-color: red;' class='btn btn-success'>Comprar (2.80€)</button><image style='float:none' src='img/C1_mapa.png'>");
    
    } else if (valueFrom=="São Bento" && valueTo=="Fórum da Maia"){
        result.html("<label style='font-size:15px;'>Para o trajeto selecionado, deve utilizar um título Z3</label><button onclick='decreaseAmount(1.60)' type='button' style='border-radius:10px; background: red; border-color: red;' class='btn btn-success'>Comprar (1.60€)</button><image style='float:none' src='img/C1_mapa.png'>");
    } else if (valueFrom=="São Bento" && valueTo=="Santa Clara"){
        result.html("<label style='font-size:15px;'>Para o trajeto selecionado, deve utilizar um título Z6</label><button onclick='decreaseAmount(2.80)' type='button' style='border-radius:10px; background: red; border-color: red;' class='btn btn-success'>Comprar (2.80€)</button><image style='float:none' src='img/C1_mapa.png'>");
    } else if (valueFrom=="São Bento" && valueTo=="Estádio do Dragão"){
        result.html("<label style='font-size:15px;'>Para o trajeto selecionado, deve utilizar um título Z2</label><button onclick='decreaseAmount(1.20)' type='button' style='border-radius:10px; background: red; border-color: red;' class='btn btn-success'>Comprar (1.20€)</button><image style='float:none' src='img/C1_mapa.png'>");
    
    } else if (valueFrom=="Pólo Universitário" && valueTo=="Santa Clara"){
        result.html("<label style='font-size:15px;'>Para o trajeto selecionado, deve utilizar um título Z5</label><button onclick='decreaseAmount(2.40)' type='button' style='border-radius:10px; background: red; border-color: red;' class='btn btn-success'>Comprar (2.40€)</button><image style='float:none' src='img/C6_mapa.png'>");
    } else if (valueFrom=="Pólo Universitário" && valueTo=="Fórum da Maia"){
        result.html("<label style='font-size:15px;'>Para o trajeto selecionado, deve utilizar um título Z2</label><button onclick='decreaseAmount(1.20)' type='button' style='border-radius:10px; background: red; border-color: red;' class='btn btn-success'>Comprar (1.20€)</button><image style='float:none' src='img/C6_mapa.png'>");
    } else if (valueFrom=="Pólo Universitário" && valueTo=="Estádio do Dragão"){
        result.html("<label style='font-size:15px;'>Para o trajeto selecionado, deve utilizar um título Z2</label><button onclick='decreaseAmount(1.20)' type='button' style='border-radius:10px; background: red; border-color: red;' class='btn btn-success'>Comprar (1.20€)</button><image style='float:none' src='img/C6_mapa.png'>");
    }
}

function decreaseAmount(value){
    var total_amountLabel = $("#total_amount");
    var currentAmount = parseFloat(total_amountLabel.text()).toFixed(2);
    var newValue = parseFloat(currentAmount - value).toFixed(2);
    total_amountLabel.html(newValue + "€");
}
