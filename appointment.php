<?php
    $name = $_POST['name'];
    $sender_email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    if (!empty($sender_email) && !empty($message)){

    }else{
        echo "NO email and message";
    }
    // $email_from = 'abdubori02@gmail.com';

    // $email_subject = "New User Appointment Submission";
    
    // $email_body = "User Name: $name.\n".
    //                 "User Email: $sender_email.\n".
    //                     "User Subject: $subject.\n". 
    //                         "User Message: $message.\n";

    // $to = "aabduvakhobov02@gmail.com";

    // $headers = "From: $email_from \r\n";

    // $headers = "Reply-To: $sender_email \r\n";

    // mail($to,$email_subject,$email_body,$headers);

    // header("Location: contact.html");
?>