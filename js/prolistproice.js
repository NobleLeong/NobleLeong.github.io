$(document).ready(function(e){
				var color="#F5F5F5";
				$(".tablist tr:even").css("background-color",color);//改变偶数行背景颜色
				$(".tablist tr:even").css("bg",color);				//把背景色保存到属性中
				$(".tablist tr:odd").css("bg","#fff");
				//鼠标移动上去的时候改变背景颜色
				$(".tablist tr td").mouseover(function(){
					$(this).parent().find("td").css("background-color","#FEE453");
				});
				
				//鼠标离开恢复背景颜色
				$(".tablist tr td").mouseout(function(){
					$(this).parent().find("td").css("background-color","");
				});
			
			});