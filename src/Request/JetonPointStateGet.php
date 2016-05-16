<?php

namespace Bukoli\Request;

use Bukoli\Exception\RequiredFieldException;
use Bukoli\Response\JetonPointStateGetResponse;

class JetonPointStateGet extends Request implements RequestInterface
{
    /**
     * Noktanın kodu
     *
     * @var string
     */
    protected $jetonPointCode;

    /**
     * @var JetonPointStateGetResponse
     */
    protected $response = null;

    /**
     * @return string
     * @throws \Exception
     */
    public function request()
    {
        if (is_null($this->jetonPointCode)) {
            throw new RequiredFieldException('JetonPointCode');
        }
        $this->response = $this->client->request('JetonPointStateGet', $this->toArray());

        return $this->response();
    }

    /**
     * @return string
     * @throws \Exception
     */
    public function response()
    {
        if (is_null($this->response)) {
            throw new \Exception();
        }

        return $this->response->JetonPointStateGetResult;
    }

    public function toArray()
    {
        return [
            'jetonPointCode' => $this->jetonPointCode,
        ];
    }

    /**
     * Noktanın kodu
     *
     * @param string $jetonPointCode
     */
    public function setJetonPointCode($jetonPointCode)
    {
        $this->jetonPointCode = $jetonPointCode;
    }

}