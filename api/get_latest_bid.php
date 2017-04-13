<?php

header('Access-Control-Allow-Origin: *'); 
header('Content-Type: application/json');

$slotGUID = $_GET['slotGUID'];


$conn = new mysqli('localhost', 'root', '','zertman_bidder');



$dbResult=array();


if ($conn->connect_error) {
		    die("Connection failed: " . $conn->connect_error);
		    return null;
}else{
	$sql = "SELECT * FROM bids WHERE slotGUID='".$slotGUID."' order by effDate  desc limit 1";
	//error_log($sql);


	mysqli_set_charset($conn,"utf8");

	$result = $conn->query($sql);

	if ($result->num_rows > 0) {
	    while($row = $result->fetch_assoc()) {
	        echo json_encode($row);
	        break;
	    }
	} else {
		$conn->close();
	    echo json_encode(400);
	}
	
	$conn->close();

}


?>