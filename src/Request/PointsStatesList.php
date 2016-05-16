<?php

namespace Bukoli\Request;

use Bukoli\Model\Response\PointStateInfo;
use Bukoli\Response\PointsStatesListResponse;

class PointsStatesList extends Request implements RequestInterface
{
    /**
     * @var PointsStatesListResponse
     */
    protected $response = null;

    /**
     * @return PointStateInfo[]
     * @throws \Exception
     */
    public function request()
    {
        $this->response = $this->client->request('PointsStatesList', $this->toArray());

        return $this->response();
    }

    /**
     * @return PointStateInfo[]
     * @throws \Exception
     */
    public function response()
    {
        if (is_null($this->response)) {
            throw new \Exception();
        }

        return $this->response->PointsStatesListResult->PointStateInfo;
    }

    public function toArray()
    {
        return [];
    }
}