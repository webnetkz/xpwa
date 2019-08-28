<?php
    if(isset($_POST['sub'])) {
        $to      = 'dbqqbq@gmail.com';
        $subject = 'the subject';
        $message = $_POST['name'] . '---' . $_POST['phone'];
        $headers = 'From: webnet@webnet.kz' . "\r\n" .
            'Reply-To: webmaster@example.com' . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

        mail($to, $subject, $message, $headers);
    }