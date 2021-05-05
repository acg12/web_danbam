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

var dd_more = document.getElementById("more");
var more_content = document.getElementById("dd-more");

dd_more.addEventListener("click", function() {
	if (more_content.classList.contains("more-active")) {
		dd_more.classList.remove("dd-more-active");
		more_content.classList.remove("more-active");
		more_content.classList.add("more-nonactive");
	} else {
		more_content.classList.remove("more-nonactive");
		more_content.classList.add("more-active");
		dd_more.classList.add("dd-more-active");
	}
})