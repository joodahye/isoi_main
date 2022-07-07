 $(document).ready(function (){
	 $("#pro span").mouseenter(function(){
		 $("#p2").stop().animate({height: "450px"});
	 } );
	 $("#pro span").mouseleave(function(){
		 $("#p2").stop().animate({height: "0"});
	 } );
 });