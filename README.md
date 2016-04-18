# Bukoli Php Api

You can sign up for a Bukoli account at http://www.bukoli.com.

## Requirements

PHP 5.3.3 and later.

[Soap Extension](http://php.net/manual/tr/book.soap.php)

## Composer

The recommended way to install Bukoli Php Api is through [Composer](http://getcomposer.org/). 

```bash
composer require bukoli/bukoli-php
```

To use the sdk, use Composer's [autoload](https://getcomposer.org/doc/00-intro.md#autoloading):

```php
require_once('vendor/autoload.php');
```

## Manual Installation

If you do not wish to use Composer, you can download the [latest release](https://github.com/bukoli/bukoli-php/releases). Then, to use php api, include the `BukoliBootstrap.php` file.

```php
require_once('/path/to/bukoli/BukoliBootstrap.php');
```

## Samples

* [OrderInsert](https://github.com/bukoli/bukoli-php/blob/master/samples/OrderInsertSample.php)
* [OrderSummaryInsert](https://github.com/bukoli/bukoli-php/blob/master/samples/OrderSummaryInsertSample.php)
* [OrderStatusDetailGet](https://github.com/bukoli/bukoli-php/blob/master/samples/OrderStatusDetailGetSample.php)

## Getting Started

```php

<?php

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

```

## Api Documentation

```php
You can find api documentation in docs/ folder
```

## Development

Install dependencies:

``` bash
composer install
```