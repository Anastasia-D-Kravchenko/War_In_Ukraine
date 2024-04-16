<?php
  $email = $_POST['text'];
  $mail = $_POST['maile'];
  $tel = $_POST['phone'];

  $error = '';

  $subject = "=?utf-8?B?".base64_encode("Волонтерство")."?=";
  $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html;charset=utf-8\r\n";
  mail('info@dveri-optom.com', $subject, $mail, $tel, $headers);

  header('Location: volonter.html')
?>
