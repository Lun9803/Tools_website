$(document).ready(function(){
	var del = false;
	
	$(".title").click(function(){
		var block = $(this).parent().find(".block");
		var add = block.find(".add");
		add.fadeToggle(300);
	});

		
});