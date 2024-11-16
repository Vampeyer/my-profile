


<?php


// edit and fix later - 

// Get the form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Create an email message
$subject = 'New form submission';
$body = "
From: $name
Email: $email

Message:
$message
";

// Send the email
mail('techsport1024@protonmail.com', $subject, $body);

// Redirect the user to a success page
header('Location: success.html');

?>