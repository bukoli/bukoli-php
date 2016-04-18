<?php

// Manually Loading
require_once(__DIR__ . '/../BukoliBootstrap.php');

use Bukoli\Bukoli;
use Bukoli\Model\IntegrationOrderSummaryInfo;
use Bukoli\Request\OrderSummaryInsert;

Bukoli::init('customer password');

$orderSummaryInfo = new IntegrationOrderSummaryInfo();
$orderSummaryInfo->setFirstName('First Name');
$orderSummaryInfo->setLastName('Last Name');
$orderSummaryInfo->setPhone('5551234567');
$orderSummaryInfo->setEmail('email@bukoli.com');
$orderSummaryInfo->setAddress('Address');
$orderSummaryInfo->setSelectedJetonPointCode('TDR-2275');

$orderSummaryInsert = new OrderSummaryInsert();
$orderSummaryInsert->setIntegrationOrderSummaryInfo($orderSummaryInfo);

try {
    $response = $orderSummaryInsert->request();
    if ($response->getStatus() == 1) {
        // Success
        echo 'Status: ' . $response->getStatus() . PHP_EOL;
        echo 'Message: ' . $response->getMessage() . PHP_EOL;
    } else {
        // Fail
        echo 'Status: ' . $response->getStatus() . PHP_EOL;
        echo 'Message: ' . $response->getMessage() . PHP_EOL;
    }
} catch (SoapFault $e) {
    // Soap Exception
}
