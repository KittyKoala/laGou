var c = (function($){
	var prev = $(".prev"),
		next = $(".next"),
		panel_list = $(".panel_list"),
		PanelListWidth= $(".panel_list li").length*214,
		pages = Math.ceil(PanelListWidth / 1070) - 1,
		disabledLength = -(pages*1070),
		thisLeft = 0;
	
	//设置滑动的宽度
	panel_list.width(PanelListWidth);
	
	$(".panel").hover(
		function(){
			$(this).children(".panel_cont").children(".panel_det").css({"display":"block"}).animate({"opacity":0.9});
		},
		function(){
			$(this).children(".panel_cont").children(".panel_det").css({"display":"none","opacity":0});
		}
	);
	prev.css({"display":"none"});
	prev.on("click", function(){
		thisLeft = thisLeft + 1070;
		panel_list.animate({"left":thisLeft});
		next.css({"display":"block"});
		if(thisLeft == 0){
			prev.css({"display":"none"});
		}
	});
	
	next.on("click", function(){
		thisLeft = thisLeft - 1070;
		panel_list.animate({"left":thisLeft});
		prev.css({"display":"block"});
		if(disabledLength == thisLeft){
			next.css({"display":"none"});
		}
	});
})(jQuery);