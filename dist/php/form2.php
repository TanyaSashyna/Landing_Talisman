<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Формы обратной связи</title>
<meta http-equiv="" content="4; URL=">
<style type="text/css">
	html,
	body {
		height: 100%;
	}
	body {
		min-width: 320px;
		background: #2C2C2C;
		margin: 0;
	}
	div {
		display: flex;
		justify-content: center;
    	align-items: center;
		flex-direction: column;
		height: 100%;
		padding: 10px;
	}
	span {
		display: block;
		padding: 30px;
		background: #FEC70B;
		font-size: 16px;
		text-align: center;
		color: #2C2C2C;
		font-weight: bold;
	}
	span a {
		text-decoration: none;
		display: inline-block;
		font-size: 20px;
		transition: 0.5s;
		margin-top: 20px;
		color: #2C2C2C;
	}
	span a:hover {
		border-bottom: 1px solid #2C2C2C;
	}
	a.logo {
		display: block;
		width: 100px;
    	height: 100px;
		margin-bottom: 40px;
	}
	a.logo img {
		width: 100%;
	}
</style>
</head>
<body>

<?php 

$sendto = "viskevicv@gmail.com";
$username = $_POST['name'];   
$usertel = $_POST['phone']; 
$usermail = $_POST['email'];
$message = $_POST['message'];

// Формирование заголовка письма
$subject  = "Новое сообщение с сайта Талисман";
$headers  = "From: " . strip_tags($usermail) . "\r\n";
$headers .= "Reply-To: ". strip_tags($usermail) . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";

// Формирование тела письма
$msg  = "<html><body style='font-family:Arial,sans-serif;'>";
$msg .= "<h2 style='font-weight:bold;border-bottom:1px dotted #ccc;'>Cообщение с сайта</h2>\r\n";
$msg .= "<p><strong>От кого:</strong> ".$username."</p>\r\n";
$msg .= "<p><strong>Почта:</strong> ".$usermail."</p>\r\n";
$msg .= "<p><strong>Телефон:</strong> ".$usertel."</p>\r\n";
$msg .= "<p><strong>Сообщения:</strong> ".$message."</p>\r\n";
$msg .= "</body></html>";

//отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
	echo "<div>
		<a href='/' class='logo'>
			<img src='../img/logo.png'/>
		</a>
		<span>
			Благодарим. Ваше сообщение отправлено.
			<br/><a href='/'>Вернуться на сайт</a>
		</span>
	</div>";
} else {
	echo "<div>
		<a href='/' class='logo'>
			<img src='../img/logo.png'/>
		</a>
		<span>
			Что-то пошло не так. Не отправлено.
			<br/><a href='/'>Вернуться на сайт</a>
		</span>
	</div>";
}

?>

</body>
</html>