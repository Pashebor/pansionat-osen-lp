<?php
require ('./phpmailer/PHPMailerAutoload.php');

 $mail = new PHPMailer;
 $mail -> isSMTP();
 $mail->Host = 'smtp.mail.ru';
 $mail->SMTPAuth = true;
 $mail->Username = 'pashebor@mail.ru';
 $mail->Password = 'ltvmzyjd90';
 $mail->SMTPSecure = 'ssl';
 $mail->Port = '465';
 $mail->CharSet = 'UTF-8';

 $mail->From = 'pashebor@mail.ru';
 $mail->FromName = 'Золотая Осень Жизни';
 $mail->addAddress('pashebor@gmail.com', 'Золотая Осень Жизни');
 $mail->addAddress('pm@salesgenerator.pro', 'Золотая Осень Жизни');
 $mail->isHtml(true);


if($_SERVER['REQUEST_METHOD'] == 'POST') {
    $idToDel = $_POST["formData"];
    /*$requestCallback = preg_replace('/(\w+)\s{0,1}:/', '"\1":', str_replace(array("\r\n", "\r", "\n", "\t"), "", $idToDel))*/;
    $arrRequest = json_decode($idToDel, true);
    if (!empty($arrRequest)) {
     switch ($arrRequest['form-name']) {
      case 'callback':
       $mail->Subject = 'Воспользоваться предложением';
       $mail->Body = '<div><p>Номер телефона: '.$arrRequest['phone'].'</p></div>';
       $mail->send();
       echo json_encode(["response" => true]);
             break;
      case 'order':
       $mail->Subject = 'Форма заявки';
       $mail->Body = '<div><p>Имя клиента: '.$arrRequest['name'].'</p></div><div><p>Номер телефона: '.$arrRequest['phone'].'</p></div>';
       $mail->send();
       echo json_encode(["response" => true]);
             break;
     }
    } else {
     echo json_encode(["response" => false]);
    }
}
?>