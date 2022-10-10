<?php
$name =$_POST['name'];
$phone =$_POST['phone'];
$email =$_POST['email'];
$msg =$_POST['message'];
$to ="lawalkofo2017@gmail.com";
$subject = "Mail From Gym Website";

$headers = "From: ".$name. "\r\n";

$txt = "You have recieved an email from ".$name ."\r\nEmail: ".$email ."\r\nPhone Number: " .$phone ."\r\nMessage: "
.$message;

if($email !=NULL){
    mail($to, $subject, $txt, $headers);
}

header('Location:gracias.html');
?>

