<?php

namespace Bukoli\Model\Response;

class IntegrationResultInfo
{
    /**
     * Durum
     * 1 - Başarılı
     * 0 - Hata
     *
     * @var int
     */
    protected $Status;

    /**
     * Hata varsa hata mesajı döner
     *
     * @var string
     */
    protected $Message;

    /**
     * Jeton işyeri idsi
     *
     * @var int
     */
    protected $JetonOrderId;

    /**
     * Sipariş Sistemindeki Takip Numarası
     *
     * @var string
     */
    protected $TrackingNo;

    /**
     * Durum
     * 1 - Başarılı
     * 0 - Hata
     *
     * @return int
     */
    public function getStatus()
    {
        return $this->Status;
    }

    /**
     *  Hata varsa hata mesajı döner
     *
     * @return string
     */
    public function getMessage()
    {
        return $this->Message;
    }

    /**
     * Jeton işyeri idsi
     *
     * @return int
     */
    public function getJetonOrderId()
    {
        return $this->JetonOrderId;
    }

    /**
     * Sipariş Sistemindeki Takip Numarası
     *
     * @return string
     */
    public function getTrackingNo()
    {
        return $this->TrackingNo;
    }

}