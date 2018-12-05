"use strict";
$(document).ready(function () {



    //  redeem button on profile menu
    $("#redeembutton").on('click', function () {
        var value = $('#saldovalue').html();
        var flvalue = parseFloat(value);

        var newval = flvalue + 15.00;
        $('#saldovalue').html(newval);
        $('.current-saldo').html(newval);
    });


    // redeem button on gamification tab
    $("#redeemcode").on('click', function () {
        var value = $('#saldovalue').html();
        var flvalue = parseFloat(value);
        
        var newval = flvalue + 15.00;
        $('#saldovalue').html(newval);
        $('.current-saldo').html(newval);
    });


    // buy suggested ticket 1
    $("#bilhetesug1").on('click', function () {
        var value = $('#saldovalue').html();
        var flvalue = parseFloat(value);
        
        var newval = flvalue - 1.25;
        $('#saldovalue').html(newval);
        $('.current-saldo').html(newval);
    });  

    // buy suggested ticket 2
    $("#bilhetesug2").on('click', function () {
        var value = $('#saldovalue').html();
        var flvalue = parseFloat(value);
        
        var newval = flvalue - 2.35;
        $('#saldovalue').html(newval);
        $('.current-saldo').html(newval);
    });  


//  redeem button on profile menu
    $("#prize1").on('click', function () {
        var value = $('#pointsvalue').html();
        var ivalue = parseInt(value);

        var newval = ivalue - 300;
        $('#newvalue').html(newval);
        $('.current-points').html(newval);
    });

    $("#prize2").on('click', function () {
        var value = $('#pointsvalue').html();
        var ivalue = parseInt(value);

        var newval = ivalue - 700;
        $('#newvalue').html(newval);
        $('.current-points').html(newval);
    });

    $("#prize3").on('click', function () {
        var value = $('#pointsvalue').html();
        var ivalue = parseInt(value);

        var newval = ivalue - 1300;
        $('#newvalue').html(newval);
        $('.current-points').html(newval);
    });

    $("#prize4").on('click', function () {
        var value = $('#pointsvalue').html();
        var ivalue = parseInt(value);

        var newval = ivalue - 1300;
        $('#newvalue').html(newval);
        $('.current-points').html(newval);
    });















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
	}, 1000);}




function decreaseAmount(val){
    
    var saldo = $('#saldovalue').html();
    var flsaldo = parseFloat(saldo);

    var newval = flsaldo - val;
    console.log(newval);
    $('#saldovalue').html(newval);
    $('.current-saldo').html(newval);
}



function searchPath(){
    // search and buy option

    var selectorFrom = document.getElementById('searchPath_from');
    var valueFrom = selectorFrom[selectorFrom.selectedIndex].value;

    var selectorTo = document.getElementById('searchPath_to');
    var valueTo = selectorTo[selectorTo.selectedIndex].value;

    console.log(valueTo);
    console.log(valueFrom);

    var result = $("#searchPath_result");
    // ORIGIN , DESTINATION, TICKET TYPE, PRIZE, PRIZE STR, IMAGE
    var output = [["Trindade", "Estádio do Dragão", "Z2", 1.20, "1.20€", "img/C1_mapa.png"],
                    ["Trindade", "Fórum da Maia", "Z3", 1.60, "1.60€", "img/C1_mapa.png"],
                    ["Trindade", "Santa Clara", "Z6", 2.80, "2.80€", "img/C1_mapa.png"],
                    ["São Bento", "Fórum da Maia", "Z3", 1.60, "1.60€", "img/C1_mapa.png"],
                    ["São Bento", "Santa Clara", "Z6", 2.80, "2.80€", "img/C1_mapa.png"],
                    ["São Bento", "Estádio do Dragão", "Z2", 1.20, "1.20€", "img/C1_mapa.png"],
                    ["Pólo Universitário", "Santa Clara", "Z5", 2.40, "2.40€", "img/C6_mapa.png"],
                    ["Pólo Universitário", "Fórum da Maia", "Z2", 1.20, "1.20€", "img/C6_mapa.png"],
                    ["Pólo Universitário", "Estádio do Dragão", "Z2", 1.20, "1.20€", "img/C6_mapa.png"]]

    var string1 = "Para o trajecto selecionado, deverá adquirir um título "
    var string2 = ".<br><img src=\""
    var string3 = "\"><br><br><a data-toggle=\"modal\" data-target=\"#purchasedmap\" class=\"media-body\"><button class=\"mb-4 btn btn-lg btn-success w-100\" onclick=\"decreaseAmount("
    var string4 = ")\" type=\"button\">Comprar "
    var string5 = "</button></a>"











    for (var i = 0; i < output.length; i++) {
        
        if (output[i][0] == valueFrom && output[i][1] == valueTo) {
                result.html(string1 + output[i][2] + string2 + output[i][5] + string3 + output[i][3] + string4 + output[i][4] + string5);
                break;
            }
    }

}







function consultPath(){
    // search option

    var selectorFrom = document.getElementById('consultPath_from');
    var valueFrom = selectorFrom[selectorFrom.selectedIndex].value;

    var selectorTo = document.getElementById('consultPath_to');
    var valueTo = selectorTo[selectorTo.selectedIndex].value;

    console.log(valueTo);
    console.log(valueFrom);

    var result = $("#consultPath_result");
    // ORIGIN , DESTINATION, TICKET TYPE, PRIZE, PRIZE STR, IMAGE
    var output = [["Trindade", "Estádio do Dragão", "Z2", 1.20, "1.20€", "img/C1_mapa.png"],
                    ["Trindade", "Fórum da Maia", "Z3", 1.60, "1.60€", "img/C1_mapa.png"],
                    ["Trindade", "Santa Clara", "Z6", 2.80, "2.80€", "img/C1_mapa.png"],
                    ["São Bento", "Fórum da Maia", "Z3", 1.60, "1.60€", "img/C1_mapa.png"],
                    ["São Bento", "Santa Clara", "Z6", 2.80, "2.80€", "img/C1_mapa.png"],
                    ["São Bento", "Estádio do Dragão", "Z2", 1.20, "1.20€", "img/C1_mapa.png"],
                    ["Pólo Universitário", "Santa Clara", "Z5", 2.40, "2.40€", "img/C6_mapa.png"],
                    ["Pólo Universitário", "Fórum da Maia", "Z2", 1.20, "1.20€", "img/C6_mapa.png"],
                    ["Pólo Universitário", "Estádio do Dragão", "Z2", 1.20, "1.20€", "img/C6_mapa.png"]]

    var string1 = "Para o trajecto selecionado, deverá adquirir um <b>título "
    var string2 = "</b>.<br><img src=\""
    var string3 = "\"><br><br>"



    for (var i = 0; i < output.length; i++) {
        
        if (output[i][0] == valueFrom && output[i][1] == valueTo) {
                result.html(string1 + output[i][2] + string2 + output[i][5] + string3);
                break;
            }
    }

}





