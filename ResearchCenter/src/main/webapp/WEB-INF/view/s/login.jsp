<%@ page contentType="text/html;charset=UTF-8"%>
<!DOCTYPE html PUBliC "-//W3C//DTD html 4.01 Transitional//EN" "http://www.w3c.org/TR/1999/REC-html401-19991224/loose.dtd">
<html>
<head>
<title>用户登录</title>
<link href="/ResearchCenter/images/Default.css" type=text/css
	rel=stylesheet>
<link href="/ResearchCenter/images/xtree.css" type=text/css
	rel=stylesheet>
<link href="/ResearchCenter/images/User_Login.css" type=text/css
	rel=stylesheet>
<meta http-equiv=Content-Type content="text/html; charset=UTF-8">
<meta content="MShtml 6.00.6000.16674" name=GENERATOR>
</head>
<body id=userlogin_body>
	<div></div>
	<div id=user_login>
		<dl>
			<dd id=user_top>
				<ul>
					<li class=user_top_l></li>
					<li class=user_top_c></li>
					<li class=user_top_r></li>
				</ul>
			<dd id=user_main>
				<ul>
					<li class=user_main_l></li>
					<li class=user_main_c>
						<div class=user_main_box>
							<ul>
								<li class=user_main_text>用户名：</li>
								<li class=user_main_input><INPUT
									class="TxtUserNameCssClass" id="name" maxLength="20"
									name="name"></li>
							</ul>
							<ul>
								<li class=user_main_text>密 码：</li>
								<li class=user_main_input><INPUT
									class="TxtPasswordCssClass" id="password" type="password"
									name="password"></li>
							</ul>
						</div>
					</li>
					<li class=user_main_r><INPUT class="IbtnEnterCssClass"
						id="login"
						style="BORDER-TOP-WIDTH: 0px; BORDER-LEFT-WIDTH: 0px; BORDER-BOTTOM-WIDTH: 0px; BORDER-RIGHT-WIDTH: 0px"
						type="image" src="/ResearchCenter/images/user_botton.gif"></li>
				</ul>
			<dd id=user_bottom>
				<ul>
					<li class=user_bottom_l></li>
					<li class=user_bottom_c></li>
					<li class=user_bottom_r></li>
				</ul>
			</dd>
		</dl>
	</div>
	<span id=ValrUserName style="DISPLAY: none; COLOR: red"></span>
	<span id=ValrPassword style="DISPLAY: none; COLOR: red"></span>
	<span id=ValrValidateCode style="DISPLAY: none; COLOR: red"></span>
	<div id=ValidationSummary1 style="DISPLAY: none; COLOR: red"></div>
	<div></div>
	<script src="/ResearchCenter/jsb/common/js/jquery-1.8.2.min.js"></script>
	<script type="text/javascript">
		//js动态创建form 提交表单
		$('#login').click(function() {
			var turnForm = document.createElement("form");
			//一定要加入到body中！！   
			document.body.appendChild(turnForm);
			turnForm.method = 'post';
			turnForm.action = '/ResearchCenter/login/login';
			turnForm.target = '_blank';

			var name = $('#name').val();
			if (typeof (name) == "undefined" || name == "") {
				alert("用户名不能为空");
				return;
			}
			var password = $('#password').val();
			if (typeof (password) == "undefined" || password == "") {
				alert("密码不能为空");
				return;
			}
			//创建隐藏表单
			var newElement = document.createElement("input");
			newElement.setAttribute("name", "name");
			newElement.setAttribute("type", "hidden");
			newElement.setAttribute("value", name);
			//创建隐藏表单
			newElement = document.createElement("input");
			newElement.setAttribute("name", "password");
			newElement.setAttribute("type", "hidden");
			newElement.setAttribute("value", password);
			turnForm.appendChild(newElement);
			turnForm.submit();
		});
	</script>
</body>
</html>
