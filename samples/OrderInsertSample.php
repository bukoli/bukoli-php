<?php

// Manually Loading
require_once(__DIR__ . '/../BukoliBootstrap.php');

use Bukoli\Bukoli;
use Bukoli\Model\IntegrationEndUserInfo;
use Bukoli\Model\IntegrationOrderDetailInfo;
use Bukoli\Model\IntegrationOrderInfo;
use Bukoli\Model\MartialStatus;
use Bukoli\Model\Sex;
use Bukoli\Request\OrderInsert;

Bukoli::init('customer password');

$endUser = new IntegrationEndUserInfo();
$endUser->setEndUserCode('1');
$endUser->setFirstName('First Name');
$endUser->setLastName('Last Name');
$endUser->setPhone('5551234567');
$endUser->setEmail('email@bukoli.com');
$endUser->setTcIdentityNo('12345678901');
$endUser->setAddress('Address');
$endUser->setBirthDate(new DateTime('2000-01-13', Bukoli::getDateTimeZone()));
$endUser->setJob('Job');
$endUser->setMartialStatus(MartialStatus::SECILMEDI);
$endUser->setSex(Sex::SECILMEDI);

$orderDetail = new IntegrationOrderDetailInfo();
$orderDetail->setDeci(3.4);
$orderDetail->setInfo('Gift');
$orderDetail->setBarcode('123456789');

$orderDetail2 = new IntegrationOrderDetailInfo();
$orderDetail2->setDeci(4.5);
$orderDetail2->setInfo('Gift 2');
$orderDetail2->setBarcode('123456789');

$orderInfo = new IntegrationOrderInfo();
$orderInfo->setRequestOrderId('ORDER-ID');
$orderInfo->setParentRequestOrderId('');
$orderInfo->setEndUserData($endUser);
$orderInfo->setIntegrationOrderDetailInfoArr([
    $orderDetail,
    $orderDetail2,
]);
$orderInfo->setSelectedJetonPointCode("TDR-2275");
$orderInfo->setInvoiceNo("INVOICE-1");
$orderInfo->setIrsaliyeNo("IRSALIYE-X");
$orderInfo->setOrderDate("20160113180000");
$orderInfo->setOrderAmount('10000');
$orderInfo->setCargoAmount('500');
$orderInfo->setPromotionCodes([
    'Promo Code 1',
    'Promo Code 2',
]);
$orderInfo->setReservedFields([
    'Reserved Field 1',
    'Reserved Field 1',
]);

$orderInsert = new OrderInsert();
$orderInsert->setIntegrationOrderInfo($orderInfo);

try {
    $response = $orderInsert->request();
    if ($response->getStatus() == 1) {
        // Success
        echo 'Status: ' . $response->getStatus() . PHP_EOL;
        echo 'Message: ' . $response->getMessage() . PHP_EOL;
        echo 'JetonOrderId: ' . $response->getJetonOrderId() . PHP_EOL;
        echo 'TrackingNo: ' . $response->getTrackingNo() . PHP_EOL;
    } else {
        // Fail
        echo 'Status: ' . $response->getStatus() . PHP_EOL;
        echo 'Message: ' . $response->getMessage() . PHP_EOL;
        echo 'JetonOrderId: ' . $response->getJetonOrderId() . PHP_EOL;
        echo 'TrackingNo: ' . $response->getTrackingNo() . PHP_EOL;
    }
} catch (SoapFault $e) {
    // Soap Exception
}