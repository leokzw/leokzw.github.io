<?php
// Configure your Subject Prefix and Recipient here
$subjectPrefix = 'Contato via website - ';
$emailTo       = '<leonardo.kzw@gmail.com>,<me@leokz.com>';

$errors = array(); // array to hold validation errors
$data   = array(); // array to pass back data

if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name    = stripslashes(trim($_POST['name']));
    $email   = stripslashes(trim($_POST['email']));
    $subject = stripslashes(trim($_POST['subject']));
    $message = stripslashes(trim($_POST['message']));


    if (empty($name)) {
        $errors['name'] = 'Nome é obrigatório.';
    }

    if (!preg_match('/^[^0-9][A-z0-9._%+-]+([.][A-z0-9_]+)*[@][A-z0-9_]+([.][A-z0-9_]+)*[.][A-z]{2,4}$/', $email)) {
        $errors['email'] = 'E-mail inválido.';
    }

    if (empty($subject)) {
        $errors['subject'] = 'Assunto é obrigatório.';
    }

    if (empty($message)) {
        $errors['message'] = 'Mensagem é obrigatório.';
    }

    // if there are any errors in our errors array, return a success boolean or false
    if (!empty($errors)) {
        $data['success'] = false;
        $data['errors']  = $errors;
    } else {
        $subject = "$subjectPrefix $subject";
        $body    = '
            <strong>Nome: </strong>'.$name.'<br />
            <strong>E-mail: </strong>'.$email.'<br />
            <strong>Mensagem: </strong>'.nl2br($message).'<br />
        ';

        $headers  = 'MIME-Version: 1.1' . PHP_EOL;
        $headers .= 'Content-type: text/html; charset=UTF-8' . PHP_EOL;
        $headers .= "From: $name <$email>" . PHP_EOL;
        $headers .= "Return-Path: $emailTo" . PHP_EOL;
        $headers .= "Reply-To: $email" . PHP_EOL;
        $headers .= "X-Mailer: PHP/". phpversion() . PHP_EOL;

        mail($emailTo, $subject, $body, $headers);

        $data['success'] = true;
        $data['message'] = 'Obrigado! Responderei em breve :)';
    }

    // return all our data to an AJAX call
    echo json_encode($data);
}