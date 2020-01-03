<?
header('Content-Type: text/html; charset=utf-8', true); 
if($_POST){
	$from = "noreply@wh-develop.com";
	$to = 'westhub.develop@gmail.com';
	$subject = (isset($_POST['sub']))?$_POST['sub']:'Зворотній зв`язок';
	$message = '
		<b>Ім`я</b>: '.$_POST['name'].'<br>
		<b>E-mail</b>: '.$_POST['email'].'<br>
		<b>Повідомлення</b>: '.$_POST['mess']
	;
	$header = 'MIME-Version: 1.0' . "\n" . 'Content-type: text/html; charset=UTF-8'
    	. "\n" . 'From: wh-develop.com<' . $from . ">\n";
 	mail($to, '=?UTF-8?B?'.base64_encode($subject).'?=', $message, $header);
}
?>
