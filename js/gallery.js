/*
	This js file is using jQuery framework is made for image gallery.
	File doesn't require changing anythig in the code.
	
	Author: Dominik Nowak
	E-mail: dominik.nowak.92@gmail.com
	
	Licence: GNU
*/

/* declaring variables */
var srcArray = new Array();
var indexGlobal = 0;
var index;
var current = 0;

/* counting minatures on page load */
$( document ).ready(function() {
	$("a#minature").each(function(index){
		srcArray[index] = $(this).children().attr("src");
		indexGlobal = index;
	});
});

/* arrows hover animation and click functionality */
$("a.left").on({
	mouseenter: function(){
		$(this).children().attr("src","img/arrow-left-black.png");
	},
	mouseleave: function(){
		$(this).children().attr("src","img/arrow-left-grey.png");
	},
	click: function(){
		if(current > 0){
			current -= 1;
		}
		else{
			current = indexGlobal;
		}
		$("#curr").attr("src", srcArray[current]);
	}
});
$("a.right").on({
	mouseenter: function(){
		$(this).children().attr("src","img/arrow-right-black.png");
	},
	mouseleave: function(){
		$(this).children().attr("src","img/arrow-right-grey.png");
	},
	click: function(){
		if(current < indexGlobal){
			current += 1;
		}
		else{
			current = 0;
		}
		$("#curr").attr("src", srcArray[current]);
	}
});

/* onclick event minatures */
$("a#minature").on({
	click: function(){
		var src;
		src = $(this).children().attr("src");
		$("#curr").attr("src", src);
		current = $(this).children().attr("id");
	}
});
