<?php

namespace Bukoli\Request;

use Bukoli\Exception\RequiredFieldException;
use Bukoli\Response\OrderStatusDetailGetResponse;

class OrderStatusDetailGet extends Request implements RequestInterface
{
    /**
     * Size ait sipariş numarası
     *
     * @var string
     */
    protected $requestOrderId;

    /**
     * @var OrderStatusDetailGetResponse
     */
    protected $response = null;

    /**
     * @return \Bukoli\Model\Response\JetonOrderStatusDetailInfo
     * @throws \Exception
     */
    public function request()
    {
        if (is_null($this->requestOrderId)) {
            throw new RequiredFieldException('RequestOrderId');
        }
        $this->response = $this->client->request('OrderStatusDetailGet', $this->toArray());

        return $this->response();
    }

    /**
     * @return \Bukoli\Model\Response\JetonOrderStatusDetailInfo
     * @throws \Exception
     */
    public function response()
    {
        if (is_null($this->response)) {
            throw new \Exception();
        }

        return $this->response->OrderStatusDetailGetResult;
    }

    public function toArray()
    {
        return [
            'servicePassword' => $this->getServicePassword(),
            'requestOrderId'  => $this->requestOrderId,
        ];
    }

    /**
     * Size ait sipariş numarası
     *
     * @param mixed $requestOrderId
     */
    public function setRequestOrderId($requestOrderId)
    {
        $this->requestOrderId = $requestOrderId;
    }
}