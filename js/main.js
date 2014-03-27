window.requestAnimFrame= (function(callback){
			return window.requestAnimFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        	function(callback) {
          		window.setTimeout(callback, 1000 / 60);
        	};
      	})();
		 

			$(document).ready(function(){
				$("#go").leanModal({ top :1000, overlay : 0.4, closeButton: ".modal_close" });

				
				var $lefts = $(".header1");
				$(".page2").scroll(function(){
					var s = $(this).scrollLeft();
					$(".header_projects p").css({
						'left': s+550
					});
					$(".header_projects .hm").css({
						'left': s+1060
					});
				});
			
			var $header1 = $(".header_projects");
			var $header2 = $(".header2_projects");
				$(".header_projects,.header_portal").mouseenter(function(){
					$(".header_projects,.header_portal").animate({
						"height": "14%"
					},300);
					$(".header2_projects,.header2_portal").animate({
						"height": "15%"
					},300);
					
				});
				
				$(".header_projects,.header_portal").mouseleave(function(){
					$(".header_projects,.header_portal").animate({
						"height": "13%"
					},300);
					$(".header2_projects,.header2_portal").animate({
						"height": "14.5%"
					},300);
					
				});	

				$(".header_blog").mouseenter(function(){
					$(".header_blog").animate({
						"height": "14%"
					},300);
					$(".header2_blog").animate({
						"height": "15%"
					},300);
				});
				
				$(".header_blog").mouseleave(function(){
					$(".header_blog").animate({
						"height": "13%"
					},300);
					$(".header2_blog").animate({
						"height": "14.5%"
					},300);
				});	
			
    			$.fn.fullpage({
    				scrollOverflow: true,
    				normalScrollElements: '#lab,.flex-container,#page-wrap',
    				keyboardScrolling: true,
    				fixedElements: '#go,.item,.info,.list,#portal',
    				anchors:['home', 'portal','projects','blog','connect']
    				/*menu: 'landingpg'*/
				});
			});	

			$(document).ready(function(){
				$("#page-wrap").wrapInner("<table cellspacing='100'><tr>");
				$(".post").wrap("<td ></td>");
				$('body').mousewheel(function(event, delta) {
				this.scrollLeft -= (delta * 40);
				e.preventDefault();
				console.log("AA");
			});
   
			});	