<?php

namespace Bukoli\Request;

use Bukoli\Exception\RequiredFieldException;
use Bukoli\Model\IntegrationOrderSummaryInfo;
use Bukoli\Response\OrderSummaryInsertResponse;

class OrderSummaryInsert extends Request implements RequestInterface
{
    /**
     * @var IntegrationOrderSummaryInfo
     */
    protected $integrationOrderSummaryInfo;

    /**
     * @var OrderSummaryInsertResponse
     */
    protected $response = null;

    /**
     * @return \Bukoli\Model\Response\ResultInfo
     *
     * @throws RequiredFieldException
     * @throws \Exception
     */
    public function request()
    {
        if (is_null($this->integrationOrderSummaryInfo)) {
            throw new RequiredFieldException('IntegrationOrderSummaryInfo');
        }
        $this->response = $this->client->request('OrderSummaryInsert', $this->toArray());

        return $this->response();
    }

    /**
     * @return \Bukoli\Model\Response\ResultInfo
     * @throws \Exception
     */
    public function response()
    {
        if (is_null($this->response)) {
            throw new \Exception();
        }

        return $this->response->OrderSummaryInsertResult;
    }

    public function toArray()
    {
        return [
            'integrationOrderSummaryInfo' => $this->integrationOrderSummaryInfo->toArray()
        ];
    }

    /**
     * @param IntegrationOrderSummaryInfo $integrationOrderSummaryInfo
     *
     * @return OrderSummaryInsert
     */
    public function setIntegrationOrderSummaryInfo(IntegrationOrderSummaryInfo $integrationOrderSummaryInfo)
    {
        $this->integrationOrderSummaryInfo = $integrationOrderSummaryInfo;

        return $this;
    }

}