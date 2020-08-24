<!DOCTYPE html>
<html>
<head>
	<style type="text/css">
		
		table{
			border-collapse: separate;
			border-spacing: 10px;
		}
		table th{
			padding: 10px;
			font-weight: 10px;
		}
		table td{
			margin: 10px;
		}
		body{
			font-family: open sans;
		}

	</style>
</head>
<body>

<?php
		$host = "localhost:3308";
		$userName = "root";
		$password = "";
		$dbName = "agency_landing_db";
		$conn = new mysqli($host, $userName, $password, $dbName);
		if ($conn->connect_error) {
			die("Connection failed: " . $conn->connect_error);
		}

		if ($_SERVER["REQUEST_METHOD"] == "POST") {
			$name = $_POST['name'];
			$phonenumber = $_POST['phonenumber'];
			$email = $_POST['email'];
			$category = $_POST['category'];
			$budgetrange = $_POST['budgetrange'];
			$projectdeadline = $_POST['projectdeadline'];
			$message = $_POST['message'];

			$sql= "INSERT INTO agency_landing_table (name, phonenumber, email, category, budgetrange, projectdeadline, message)VALUES ('$name', '$phonenumber', '$email', '$category', '$budgetrange', '$projectdeadline', '$message')";
			mysqli_query($conn, $sql);
			$conn->close();
			header("Refresh:0");
		}

		$query = "SELECT * FROM agency_landing_table ORDER BY cast(budgetrange as unsigned) DESC, projectdeadline ASC";
		$result = $conn -> query($query);

		echo "<table> <tr> 
		<th>Date</th> 
		<th>Time</th> 
		<th>Client name</th> 
		<th>Project Size</th> 
		<th>Contact</th> 
		<th>Email</th> </tr>";
		$date_counter = date("d/m/Y");
		$time_counter = "09:00";
		while($row = $result->fetch_array(MYSQLI_ASSOC))
		{
			$new_date = date("Y-m-d",strtotime($row["projectdeadline"]));
			echo "<tr> <td>";
			printf ("%s", $date_counter);
			echo "</td>";

			echo "<td>";
			printf ("%s", $time_counter);
			echo "</td>";

			echo "<td>";
			printf ("%s", $row["name"]);
			echo "</td>";

			echo "<td> <center>";
			printf ("%s", $row["budgetrange"]);
			echo "</td> </center>";

			echo "<td>";
			printf ("%s", $row["phonenumber"]);
			echo "</td>";

			echo "<td>";
			printf ("%s", $row["email"]);
			echo "</td> </tr>";

			$time_counter = date('H:i', strtotime("+150 minutes",strtotime($time_counter)));
			if (strtotime($time_counter) >= strtotime('18:00:00')) {
				$time_counter = date_create('09:00')->format('H:i');

				$date_counter = str_replace('/', '-', $date_counter);
				$date_counter = date('Y-m-d', strtotime($date_counter));
				$date_counter = date("d/m/Y", strtotime($date_counter. "+1 day"));
			}
		}
		echo "</table>";
		$result->close();

		?>

</body>
</html>
