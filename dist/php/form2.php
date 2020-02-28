<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Формы обратной связи</title>
<meta http-equiv="Refresh" content="4; URL="> 
</head>
<body>

<?php 

$sendto   = "sashina51@gmail.com"; 
$username = $_GET['name'];   
$usertel = $_GET['phone']; 
$usermail = $_GET['email'];
$message = $_GET['message'];  

// Формирование заголовка письма
$subject  = "Новое сообщение";
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

отправка сообщения
if(@mail($sendto, $subject, $msg, $headers)) {
	echo "<center><img src='pro/spasibo.png'></center>";
} else {
	echo "<center><img src='images/ne-otpravleno.png'></center>";
}

?>

</body>
</html>