<?php

namespace Bukoli\Request;

use Bukoli\Exception\RequiredFieldException;
use Bukoli\Model\IntegrationOrderInfo;
use Bukoli\Response\OrderInsertResponse;

class OrderInsert extends Request implements RequestInterface
{
    /**
     * @var IntegrationOrderInfo
     */
    protected $integrationOrderInfo;

    /**
     * @var OrderInsertResponse
     */
    protected $response;

    /**
     * @return \Bukoli\Model\Response\IntegrationResultInfo
     * @throws \Exception
     */
    public function request()
    {
        if (is_null($this->integrationOrderInfo)) {
            throw new RequiredFieldException('IntegrationOrderInfo');
        }
        $this->response = $this->client->request('OrderInsert', $this->toArray());

        return $this->response();
    }

    /**
     * @return \Bukoli\Model\Response\IntegrationResultInfo
     * @throws \Exception
     */
    public function response()
    {
        if (is_null($this->response)) {
            throw new \Exception();
        }

        return $this->response->OrderInsertResult;
    }

    public function toArray()
    {
        return [
            'integrationOrderInfo' => $this->integrationOrderInfo->toArray(),
        ];
    }

    /**
     * @param IntegrationOrderInfo $integrationOrderInfo
     */
    public function setIntegrationOrderInfo(IntegrationOrderInfo $integrationOrderInfo)
    {
        $this->integrationOrderInfo = $integrationOrderInfo;
    }

}