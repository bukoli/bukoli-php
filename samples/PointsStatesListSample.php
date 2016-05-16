<?php

// Manually Loading
require_once(__DIR__ . '/../BukoliBootstrap.php');

use Bukoli\Bukoli;
use Bukoli\Request\PointsStatesList;

Bukoli::init('customer password');

$pointsStatesList = new PointsStatesList();

try {
    $response = $pointsStatesList->request();
    foreach ($response as $point) {
        echo $point->getJetonPointCode() . ' - ' . $point->getJetonPointStateId() . PHP_EOL;
    }
} catch (SoapFault $e) {
    //Soap Exception
}