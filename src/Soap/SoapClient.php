<?php

namespace Bukoli\Soap;

use Bukoli\Bukoli;
use Bukoli\Model\Response\IntegrationResultInfo;
use Bukoli\Model\Response\JetonOrderStatusDetailInfo;
use Bukoli\Model\Response\ResultInfo;
use Bukoli\Response\OrderInsertResponse;
use Bukoli\Response\OrderStatusDetailGetResponse;
use Bukoli\Response\OrderSummaryInsertResponse;

class SoapClient implements ClientInterface
{
    protected $client;

    private $defaultOptions = [
        'soap_version' => SOAP_1_2,
        // Stuff for development.
        'trace'        => 1,
        'exceptions'   => true,
        'cache_wsdl'   => WSDL_CACHE_BOTH,
        'features'     => SOAP_SINGLE_ELEMENT_ARRAYS,
        'classmap'     => [
            'OrderSummaryInsertResponse'   => OrderSummaryInsertResponse::class,
            'ResultInfo'                   => ResultInfo::class,
            'OrderInsertResponse'          => OrderInsertResponse::class,
            'IntegrationResultInfo'        => IntegrationResultInfo::class,
            'OrderStatusDetailGetResponse' => OrderStatusDetailGetResponse::class,
            'JetonOrderStatusDetailInfo'   => JetonOrderStatusDetailInfo::class,
        ]
    ];

    public function __construct($options = [])
    {
        $this->client = new \SoapClient(
            Bukoli::getUrl(),
            array_merge($this->defaultOptions, $options)
        );
    }

    /**
     * @return \SoapClient
     */
    public function getClient()
    {
        return $this->client;
    }

    public function request($name, $params)
    {
        return $this->client->__soapCall($name, [$params]);
    }
}