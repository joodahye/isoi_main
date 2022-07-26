/*메뉴호버(product)*/
 $(document).ready(function (){
	 $("#pro span").mouseenter(function(){
		 $("#p2").stop().animate({height: "500px"});
	 } );
	 $("#p2").mouseleave(function(){
		 $("#p2").stop().animate({height: "0"});
	 } );
	 
	 
		//아이소이 이즈 애니메이션//
		//인텔리전트
		$(".a1").mouseenter(function(){
			//인텔리전트 들어오기
			$(".aa1 div:nth-child(1)").stop().animate({opacity:1,right:"27vw"},700);
			$(".aa1 div:nth-child(2)").stop().animate({opacity:1,left:"28vw"},700);
		 });	
			//인텔리전트 나가기
					$(".a1").mouseleave(function(){
			$(".aa1 div:nth-child(1)").stop().animate({opacity:0,right:"25vw"},500);
			$(".aa1 div:nth-child(2)").stop().animate({opacity:0,left:"26vw"},500);
		 });	
			
		//임포턴트
		$(".a2").mouseenter(function(){
					// 들어오기
					$(".aa2 div:nth-child(1)").stop().animate({opacity:1,left:"28vw"},700);
					$(".aa2 div:nth-child(2)").stop().animate({opacity:1,right:"30vw"},700);
				 });	
					// 나가기
							$(".a2").mouseleave(function(){
					$(".aa2 div:nth-child(1)").stop().animate({opacity:0,left:"26vw"},500);
					$(".aa2 div:nth-child(2)").stop().animate({opacity:0,right:"28vw"},500);
		});			
		//이노센트
		 $(".a3").mouseenter(function(){
					// 들어오기
					$(".aa3 div:nth-child(1)").stop().animate({opacity:1,right:"28vw"},700);
					$(".aa3 div:nth-child(2)").stop().animate({opacity:1,left:"27vw"},700);
				 });	
					// 나가기
							$(".a3").mouseleave(function(){
					$(".aa3 div:nth-child(1)").stop().animate({opacity:0,right:"26vw"},500);
					$(".aa3 div:nth-child(2)").stop().animate({opacity:0,left:"25vw"},500);
		});			
	 
	 // console.log(  $("#f4").position().top ); //2103
	 /*$(window).scroll(function(){
			if(  $(window).scrollTop()>= 2500){
					$("#f4>.b1").addClass("bb1");
					$("#f4>.b2").addClass("bb2");
					$("#f4>.b3").addClass("bb3");
			}
	 });*/




	  let pro1 =  ( $("#product div").width() * (-1)) ;

	  $("#product").css("left", pro1+"px");

	//왼쪽방향 화살표
	 $(".arrowr").click(function(){
			proLeft()
	 });

	 	//오른쪽방향 화살표
	 $(".arrowl").click(function(){
			proRight()
	 });


	 //왼쪽방향으로 이동
	 function proLeft(){
		 $("#product").stop().animate({left: pro1*2 },"slow",function(){
				$("#product").append( $("#product>div").first() );
				$("#product").css("left" , pro1+"px" )
		 });
	 }

	 	 //오른쪽방향으로 이동

	 function proRight(){
		 $("#product").stop().animate({left: 0 },"slow",function(){
				$("#product").prepend( $("#product>div").last() );
				$("#product").css("left" , pro1+"px" )
		 });
	 }




});///////전체 끝
