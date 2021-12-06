// JavaScript Document

var sidebar = document.querySelector("#sidebar");
var sidebarBtn = sidebar.querySelector("#sidebar .on");
sidebarBtn.onclick = function(){
	sidebar.classList.toggle('on');
}

var returnTop = document.getElementById("returnTop");
window.onscroll = function (){
	var top = document.documentElement.scrollTop || document.body.scrollTop;
	if(top >= 50){
		returnTop.style.opacity = "1";
	}else{
		returnTop.style.opacity = "0";
	}
}