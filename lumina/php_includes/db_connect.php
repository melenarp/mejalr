<?php
$servername = "localhost";
$username = "webmaste_usrconn";
$password = "k!f..wUo]7cC";
$dbName = "webmaste_Estudiar";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbName);

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

mysqli_set_charset($conn, 'utf8');

?>
