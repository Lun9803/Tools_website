$(document).ready(function(){

	if(localStorage.getItem("block")){
		$(document.body).html(localStorage.getItem("block"));
	}
	
	var add = $(this).find(".add");
	add.hide();
	
	var del = $(this).find(".del");
	del.hide();
	
	var del_img = $(this).find(".del_img");
	del_img.hide();
	
	$(".title").click(function(){
		var block = $(this).parent().find(".block");
		var add = block.find(".add");
		add.fadeToggle(300);
		var del = block.find(".del");
		del.fadeToggle(300);
		
		var del_img = block.find(".del_img");
		del_img.hide(300);
	});
	
	$(".add").click(function(){
		var del_img = $(this).parent().find(".del_img");
		del_img.hide();
		
		var name = prompt("enter the name of the website");
		if(name.length==0){
			alert("name not entered");
			return;
		}
		
		var url = prompt("enter the url of the website\ne.g. www.lun.com");
		if(url.length==0){
			alert("url not entered");
			return;
		}
		
		if(url.charAt(url.length-1)=='/'){
			url=url.slice(0,url.length-1);
		}
		
		if(url.slice(0,8)!='https://'){
			url='https://'+url;
		}
		
		var e="<a class='nav' target='_blank' href="+url+">"+name+"</a>"+'<img src="img/del.jpg" class="del_img"></img>';
		$(this).before(e);
		
		localStorage.setItem("block", $(document.body).html());
	});
		
	$(".del").click(function(){
		var block = $(this).parent();
		var del_img = block.find(".del_img");
		del_img.fadeToggle(300);
	});
	
	$(".del_img").click(function(){
		var target=$(this).prev();
		if(confirm("确定删除"+target.html()+"?")){
			target.remove();
			$(this).remove();
			localStorage.setItem("block", $(document.body).html());
		}

	});
	
	$("#initialize").click(function(){
		if(confirm("确认初始化？")){
			localStorage.clear();
			window.location.reload();
		}
	})
		
});