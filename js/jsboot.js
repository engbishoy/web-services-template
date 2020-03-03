// JavaScript Document
$(function(){
	"use strict";
$(".carousel").carousel({
	interval:2000
});
$(window).on("scroll",function(){
	var sc=$(window).scrollTop();
	console.log($(sc));

	if(sc>=1386.666748046875){
			$(".our_client .person").slideDown(2000);
	}
	if(sc>=2325.5556640625){
	$(".stac .font").fadeIn(3000);
	}
if(sc>=3396.666748046875){
	$(".top").fadeIn(1000);	
	}
	else{
		$(".top").fadeOut(1000);
	
	}
});
	
	$(".top").click(function(){
	$("html,body").animate({
		scrollTop:0 
	},2000);
	});
	var color= $(".color-option ul li");
	color.eq("0").css({
		background:"#BD0003"
	}).end()
	.eq("1").css({
		background:"#0095F4"
	}).end()
	.eq("2").css({
		background:"#009E3E"
	}).end()
	.eq("3").css({
		background:" #02E3FF"
	});
	$(color).click(function(){
		$("link[href*='theme']").attr('href',$(this).attr("data-value"));
	});
	$(".option-box i").click(function(){
		$(".option-box .color-option").toggle(2000);
	});
	/*
	$(window).load("click",function(){
		$(" #fountainTextG").delay(5000).fadeOut(1000,function(){
	$(this).parent().remove();
			$("body").css({
			overflow:"auto"
		
		});	
	 });
	
	});
	*/
});