$(document).ready(function(){
    resolucao();
}); 
$(function(){
  $(window).scroll(function(){   
	if ($(this).scrollTop() > $('main').position().top ) {$('body').addClass('_flut');} else {$('body').removeClass('_flut');}
	  
  	if($('.topo').hasClass('formFlutuante')){
	  	if ($(this).scrollTop() > $('.topo.formFlutuante').offset().top + $('.topo.formFlutuante').outerHeight(true) - 80) {$('body').addClass('_flutForm');} else {$('body').removeClass('_flutForm');} 
	 }	  
  })
});

$(window).resize(function(){ resolucao(); });
function resolucao(){
	if($(this).width() <= 1000){ $('html').addClass('_320'); }else{ $('html').removeClass('_320'); }
	if($(this).width() > 1000){ $('html').addClass('_1000');  }else{ $('html').removeClass('_1000'); }    
}