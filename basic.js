$(document).ready(function(){
  
  $(".logo").click(function(){
    var one=$(".circle");
	one.fadeIn(1900);
	one.animate({height:'200px',width:'200px',opacity:'0.37'},1900);
	});
$(".circle").click(function(){
	var two=$(".circle")
	two.animate({height:'150px',width:'150px',opacity:'0.37'},1900,function(){var thr=$(".logo")
	thr.animate({height:'80px',width:'80px'},1900);
	thr.animate({top:'90%'},"slow");
});
	two.fadeOut(1900);	
	
});
$(".logo").click(function(){
var fo=$(".logo");
fo.animate({top:'50%'},"slow");
fo.animate({height:'150px',width:'150px'},1900);
});




});
