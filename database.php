<?php
function getConnection() {
    $host = "localhost";
    $dbname = "foodie_reppy";
    $username = "root";
    $password = "";

    $con = new mysqli($host, $username, $password, $dbname);
    if ($con->connect_error) {
      echo $con->connect_error;
        } else {
        return $con;
        }
    }
?>
