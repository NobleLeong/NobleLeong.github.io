$(document).ready(function(){
				totalprices();
				
			});
			function totalprices(){
				$("#gouwuchelist .price").each(function(){
					var price=$(this).text();
					//alert(price);
					var num=$(this).parent().parent().children("td").find("input").val();
					//alert(num);
					$(this).parent().parent().children("td").find(".smalltotal").text(price*num);
				});
				var total=0.00;
				var rows=0;
				$("#gouwuchelist .smalltotal").each(function(){
					total=total+parseFloat($(this).text())
					rows++;
					$(".count").text(rows);
					$(".total").text(total);
					$("#count").text(rows);
					$("#total").text(total);
					$("#disprice").text(total);
				});
			}
			function removebutton(){
		        $("#qx2").click(function(){
		        	$(this).parent().parent().remove();
		        })
					
				
			}