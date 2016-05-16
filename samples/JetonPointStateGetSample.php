<?php

// Manually Loading
require_once(__DIR__ . '/../BukoliBootstrap.php');

use Bukoli\Bukoli;
use Bukoli\Request\JetonPointStateGet;

Bukoli::init('customer password');

$jetonPointStateGet = new JetonPointStateGet();
$jetonPointStateGet->setJetonPointCode('TDR-0001');

try {
    $response = $jetonPointStateGet->request();
    echo $response . PHP_EOL;
} catch (SoapFault $e) {
    //Soap Exception
}