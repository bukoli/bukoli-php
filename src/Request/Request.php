<?php

namespace Bukoli\Request;

use Bukoli\Bukoli;
use Bukoli\Soap\ClientInterface;
use Bukoli\Soap\SoapClient;

abstract class Request
{
    /**
     * @var ClientInterface
     */
    protected $client;

    public function __construct(ClientInterface $client = null)
    {
        $this->client = $client ?: new SoapClient();
    }

    /**
     * @return ClientInterface
     */
    public function getClient()
    {
        return $this->client;
    }

    /**
     * @param ClientInterface $client
     */
    public function setClient($client)
    {
        $this->client = $client;
    }

    /**
     * @return string
     */
    protected function getServicePassword()
    {
        return Bukoli::getServicePassword();
    }
}