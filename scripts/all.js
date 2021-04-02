$("#menu-bar").click(function() {
    if ($("#drop-down").height() == $(window).height()) {
    	$("#drop-down").css("height", 0);
		$(".bar:nth-child(2)").css(
			"opacity", "100%"
		);
		$(".bar:nth-child(1)").css(
			"transform", "rotate(0)"
		);
		$(".bar:nth-child(3)").css(
			"transform", "rotate(0)"
		);
    } else {
		$("#drop-down").css("height", "100%");
		$(".bar:nth-child(2)").css(
			"opacity", 0
		);
		$(".bar:nth-child(1)").css(
			"transform", "translateY(9px) rotate(45deg)"
		);
		$(".bar:nth-child(3)").css(
			"transform", "translateY(-9px) rotate(-45deg)"
		);
	}
})