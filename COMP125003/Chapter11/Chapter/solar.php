<?php
/* To make this app work, you must replace the text "apikey" in the following statement with a valid API key */
$WeatherSource = "https://api.forecast.io/forecast/8ad6ca745ce56ab9703576aff3517925/" . $_GET["lat"] . "," . $_GET["lng"];
header("Content-Type: application/json");
header("Cache-Control: no-cache");
readfile($WeatherSource);
?>