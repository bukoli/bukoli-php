<?php

namespace Bukoli\Soap;

use Bukoli\Bukoli;

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
            'OrderSummaryInsertResponse'   => 'Bukoli\Response\OrderSummaryInsertResponse',
            'ResultInfo'                   => 'Bukoli\Model\Response\ResultInfo',
            'OrderInsertResponse'          => 'Bukoli\Response\OrderInsertResponse',
            'IntegrationResultInfo'        => 'Bukoli\Model\Response\IntegrationResultInfo',
            'OrderStatusDetailGetResponse' => 'Bukoli\Response\OrderStatusDetailGetResponse',
            'JetonOrderStatusDetailInfo'   => 'Bukoli\Model\Response\JetonOrderStatusDetailInfo',
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