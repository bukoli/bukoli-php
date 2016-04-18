<?php

namespace Bukoli\Model\Response;

use Bukoli\Bukoli;
use DateTime;

class JetonOrderStatusDetailInfo
{
    /**
     * @var int
     */
    protected $JetonOrderId;

    /**
     * @var string
     */
    protected $RequestOrderID;

    /**
     * @var string
     */
    protected $TrackingNo;

    /**
     * @var string
     */
    protected $Status;

    /**
     * @var DateTime
     */
    protected $DeliveryDate;

    /**
     * @var string
     */
    protected $PointCode;

    /**
     * @var string
     */
    protected $PointName;

    /**
     * @var string
     */
    protected $PointAddress;

    /**
     * @var string
     */
    protected $NeighborhoodName;

    /**
     * @var string
     */
    protected $BoroughName;

    /**
     * @var string
     */
    protected $CityName;

    /**
     * @var int
     */
    protected $BoxCount;

    /**
     * @var double
     */
    protected $DeciSum;

    /**
     * @return int
     */
    public function getJetonOrderId()
    {
        return $this->JetonOrderId;
    }

    /**
     * @return string
     */
    public function getRequestOrderID()
    {
        return $this->RequestOrderID;
    }

    /**
     * @return string
     */
    public function getTrackingNo()
    {
        return $this->TrackingNo;
    }

    /**
     * @return string
     */
    public function getStatus()
    {
        return $this->Status;
    }

    /**
     * @return DateTime
     */
    public function getDeliveryDate()
    {
        return new DateTime($this->DeliveryDate, Bukoli::getDateTimeZone());
    }

    /**
     * @return string
     */
    public function getPointCode()
    {
        return $this->PointCode;
    }

    /**
     * @return string
     */
    public function getPointName()
    {
        return $this->PointName;
    }

    /**
     * @return string
     */
    public function getPointAddress()
    {
        return $this->PointAddress;
    }

    /**
     * @return string
     */
    public function getNeighborhoodName()
    {
        return $this->NeighborhoodName;
    }

    /**
     * @return string
     */
    public function getBoroughName()
    {
        return $this->BoroughName;
    }

    /**
     * @return string
     */
    public function getCityName()
    {
        return $this->CityName;
    }

    /**
     * @return int
     */
    public function getBoxCount()
    {
        return $this->BoxCount;
    }

    /**
     * @return float
     */
    public function getDeciSum()
    {
        return $this->DeciSum;
    }
}