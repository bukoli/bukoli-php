<?php

// Manually Loading
require_once(__DIR__ . '/../BukoliBootstrap.php');

use Bukoli\Bukoli;
use Bukoli\Request\OrderStatusDetailGet;

Bukoli::init('customer password');

$orderStatusDetailGet = new OrderStatusDetailGet();
$orderStatusDetailGet->setRequestOrderId('ORDER-ID');

try {
    $response = $orderStatusDetailGet->request();

    echo 'JetonOrderId: ' . $response->getJetonOrderId() . PHP_EOL;
    echo 'RequestOrderID: ' . $response->getRequestOrderID() . PHP_EOL;
    echo 'TrackingNo: ' . $response->getTrackingNo() . PHP_EOL;
    echo 'Status: ' . $response->getStatus() . PHP_EOL;
    echo 'DeliveryDate: ' . $response->getDeliveryDate()->format('Y-m-d H:i:s') . PHP_EOL;
    echo 'PointCode: ' . $response->getPointCode() . PHP_EOL;
    echo 'PointName: ' . $response->getPointName() . PHP_EOL;
    echo 'PointAddress: ' . $response->getPointAddress() . PHP_EOL;
    echo 'NeighborhoodName: ' . $response->getNeighborhoodName() . PHP_EOL;
    echo 'BoroughName: ' . $response->getBoroughName() . PHP_EOL;
    echo 'CityName: ' . $response->getCityName() . PHP_EOL;
    echo 'BoxCount: ' . $response->getBoxCount() . PHP_EOL;
    echo 'DeciSum: ' . $response->getDeciSum() . PHP_EOL;
} catch (SoapFault $e) {
    // Soap Exception
}