$(function(){$("svg.radial-progress").each(function(c,d){$(this).find($("circle.complete")).removeAttr("style")});$(window).on("scroll",function(){$("svg.radial-progress").each(function(c,d){if($(window).scrollTop()>$(this).offset().top-($(window).height()*0.75)&&$(window).scrollTop()<$(this).offset().top+$(this).height()-($(window).height()*0.25)){percent=$(d).data("percentage");radius=$(this).find($("circle.complete")).attr("r");circumference=2*Math.PI*radius;strokeDashOffset=circumference-((percent*circumference)/100);$(this).find($("circle.complete")).animate({"stroke-dashoffset":strokeDashOffset},2500)}})}).trigger("scroll");var b=document.querySelector(".port-item");var a=mixitup(b);$(window).on("scroll",function(){var c=$(this).scrollTop();if(c>600){$(".navbar").addClass("sticky")}else{$(".navbar").removeClass("sticky")}});$("a").click(function(c){if(this.hash!==""){c.preventDefault();var d=this.hash;$("html,body").animate({scrollTop:$(d).offset().top},3800,function(){window.location.hash=d})}});new WOW().init()});