<?php
require 'php_includes/db_connect.php';

$sql = "SELECT * FROM MAZO";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
	$dataArray = array();
	while ($row = $result->fetch_assoc()) {
		$dataArray[] = $row;
	}
	echo json_encode($dataArray);
}

?>