var m = (function($){
	var bodyBlack = $("#bodyBlack"),
		switchCity = $("#switchCity"),
		cityClose = $(".cityClose"),
		headerSelectCity = $(".header_selectCity"),
		banner = $(".banner"),
		banner_prev = banner.children(".banner_prev"),
		banner_next = banner.children(".banner_next"),
		bannerInner = banner.children(".banner_inner"),
		imgs = bannerInner.children(".bannerImg_item"),
		banner_indicator = banner.children(".banner_indicator"),
		aLi = banner_indicator.children("li"),
		index = 0,
		timer = null,
		imgLength = imgs.length;
	
	//轮播图
	function move($a){
		$a;
		imgs.eq(index).css({"opacity":1}).siblings().css({"opacity":0});
		aLi.eq(index).addClass("active").siblings().removeClass("active");
	}
	imgs.eq(index).css({"opacity":1});
	banner_prev.on("click", function(){
		move(index = --index < 0 ? imgLength - 1 : index);
	});
	banner_next.on("click", function(){
		move(index = ++index % imgLength);
	});
	$(".banner").hover(
		function(){
			clearInterval(timer);
		}, 
		function(){
			timer = setInterval(function(){
				move(index = ++index>(imgLength - 1)?index%(imgLength):index);
			}, 5000);
		}
	);
	timer = setInterval(function (){
		move(index = ++index>(imgLength - 1)?index%(imgLength):index);
	}, 5000);
	
	//显示隐藏切换按钮
	$(".toggleParent").on("mouseover", function(){
		$(this).children(".toggleChild").removeClass("hide").addClass("show");
	}).on("mouseout",function(){
		$(this).children(".toggleChild").removeClass("show").addClass("hide");
	});
	
	//切换城市
	function setStyle(obj1, obj2, setStyle1, setStyle2, animateTyle){
		obj1.css(setStyle1);
		obj2.css(setStyle2).animate(animateTyle);
	}
	
	cityClose.on("click", function(){
		setStyle(bodyBlack, switchCity, 
			{"zIndex":-10,"display":"none"}, 
			{"zIndex":-10,"display":"none"},
			{"opacity":0}
		);
	});
	
	bodyBlack.on("click", function(){
		cityClose.trigger("click");
	});
	
	headerSelectCity.on("click", function(){
		setStyle(bodyBlack, switchCity, 
			{"zIndex":8,"display":"block"}, 
			{"zIndex":9,"display":"block"},
			{"opacity":1}
		);
	});
	
})(jQuery);


