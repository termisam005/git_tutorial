
/*btn_trans*/
$(document).ready(function(){
	$(".btn_trans").click(function(){
		$(".Dash_body").toggleClass("trans");
		$(".dash_aside").toggleClass("trans");
		$(".header_in .logo").toggleClass("trans");
		$(".left_name").toggleClass("trans");
		$(".left_menu").toggleClass("trans");
		$(".top_line").toggleClass("trans");
		$(".map_content").toggleClass("trans");
	})
});


/*Calendar*/
$(document).ready(function(){
	$(function () {
		$("#datepicker01").datepicker({ 
			autoclose: true, 
			todayHighlight: true,
			format:"yyyy-mm-dd",
		}).datepicker('update', new Date());
		$("#datepicker02").datepicker({ 
			autoclose: true, 
			todayHighlight: true,
			format:"yyyy-mm-dd",
		}).datepicker('update', new Date());
		$("#datepicker03").datepicker({ 
			autoclose: true, 
			todayHighlight: true,
			format:"yyyy-mm-dd",
		}).datepicker('update', new Date());
		$("#datepicker04").datepicker({ 
			autoclose: true, 
			todayHighlight: true,
			format:"yyyy-mm-dd",
		}).datepicker('update', new Date());
	});
});


/*left_menu*/
$( document ).ready(function() {
	$('.selb_link').click(function(){
		if(!$(this).hasClass('contact'))
			$(this).removeClass('contact');
			$(this).toggleClass('contact');
			$(this).next(".add_menu").slideToggle().siblings(".add_menu:visible").slideToggle();
	});
		
});



/*실시간관제 리스트click*/

/*$(document).ready(function(){
	$(".list_contain").click(function(){
		if ($(".list_zone").hasClass("checking")){
			$(".list_zone").removeClass("checking");
			$(this).parents(".list_zone").toggleClass("checking");
		} else {
			$(this).parents(".list_zone").toggleClass("checking");
		}		
	});
});*/

$(document).ready(function(){
	$(".mark_check").click(function(){
		$(this).parents(".list_zone").toggleClass("checking");	
		//$(".Mark_container").toggleClass("on");
	});

	$(".list_contain").click(function(){
		$(this).parents(".list_zone").toggleClass("checking");	
	});
});

$(document).ready(function(){
	$(".mark_check").click(function(){
		if($(".Mark_container").css("display") == "none"){
			$(".Mark_container").addClass("on");
		}
	});

	$(".list_contain").click(function(){
		if($(".Mark_container").css("display") == "none"){
			$(".Mark_container").addClass("on");
		}
	});

	$(".mark_top .cancel").click(function(){
		$(".Mark_container").removeClass("on");
		$(".list_zone").removeClass("checking");
	});
});



/*설문조건 체크*/
$(document).ready(function(){
	$(".surv_check").click(function(){
		$(this).parents(".survbel").toggleClass("con");
	});

	$(".surv_word").click(function(){
		$(this).parents(".survbel").toggleClass("con");
	});
});



/*설문지 추가*/
$(document).ready(function(){
	$(".btn_survey").click(function(){
		$(this).parents(".record_box").addClass("on");
	});

	$(".btn_delete").click(function(){
		$(this).parents(".record_box").removeClass("on");
	});
});