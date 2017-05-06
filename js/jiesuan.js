function checkyouhuika(){
				var cardnum=document.getElementById("cardnum");
				var cardpassword=document.getElementById("cardpassword");
				
				if(cardnum.value==""){
					alert("卡号不能为空");
					return false;
				}
				if(cardpassword.value==""){
					alert("密码不能为空");
					return false;
				}
			}
			//验证用户信息
			function checksuerinfo(){
				
				var name=document.getElementById("name");
				var tel=document.getElementById("tel");
				var mail=document.getElementById("mail");
				var addr=document.getElementById("addr");
				var zipcord=document.getElementById("zipcord");
				
				var ClientName=document.getElementById("ClientName");
				var phonenumber=document.getElementById("phonenumber");
				var E_mail=document.getElementById("E_mail");
				var contactaddr=document.getElementById("contactaddr");
				var postcord=document.getElementById("postcord");
				
				    
				if(name.value==""){
					alert("姓名不能为空");
					return false;
				}
				
				
				if(tel.value==""){
					alert("电话不能为空");
					return false;
				}
				//验证手机号格式
				var telchart=/^1[3|4|5|7|8][0-9]{9}$/;
				
				if(!tel.value.match(telchart)){
					alert("电话号码不正确");
					return false;
				}
				
				
				if(mail.value==""){
					alert("邮箱不能为空");
					return false;
				}
				//验证邮箱格式
				var mailchart=/^[A-Za-z0-9d]+([-_][A-Za-z0-9d]+)*@([A-Za-z0-9d]+[-.])+[A-Za-z0-9d]{2,5}$/;
				
				if(!mail.value.match(mailchart)){
					alert("邮箱格式不正确");
					return false;
				}
				
				
				if(addr.value==""){
					alert("地址不能为空");
					return false;
				}
				
				
				if(zipcord.value==""){
					alert("邮编不能为空");
					return false;
				}
				//验证邮编格式
				var zipcordchart=/^[1-9][0-9]{5}$/;
				
				if(!zipcord.value.match(zipcordchart)){
					alert("邮编格式不正确");
					return false;
				}
				
				
				if(ClientName.value==""){
					alert("客户姓名不能为空");
					return false;
				}
				
				
				if(phonenumber.value==""){
					alert("联系电话不能为空");
					return false;
				}
				//验证手机号格式
				var phonenumberchart=/^1[3|4|5|7|8][0-9]{9}$/;
				
				if(!phonenumber.value.match(phonenumberchart)){
					alert("联系电话号码不正确");
					return false;
				}
				
				
				if(E_mail.value==""){
					alert("电子邮箱不能为空");
					return false;
				}
				//验证邮箱格式
				var E_mailchart=/^[A-Za-z0-9d]+([-_][A-Za-z0-9d]+)*@([A-Za-z0-9d]+[-.])+[A-Za-z0-9d]{2,5}$/;
				
				if(!E_mail.value.match(E_mailchart)){
					alert("电子邮箱格式不正确");
					return false;
				}
				
				
				if(contactaddr.value==""){
					alert("联系地址不能为空");
					return false;
				}
				
				
				if(postcord.value==""){
					alert("邮编不能为空");
					return false;
				}
				//验证邮编格式
				var postcordchart=/^[1-9][0-9]{5}$/;
				if(!postcord.value.match(postcordchart)){
					alert("邮政骗码格式不正确");
					return false;
				}
			}