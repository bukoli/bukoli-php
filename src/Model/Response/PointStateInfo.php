<?php
namespace Bukoli\Model\Response;

class PointStateInfo
{
    /**
     * Noktanın Kodu
     *
     * @var string
     */
    public $JetonPointCode;

    /**
     * Noktanın Durumu
     * Aktif, Kapali
     *
     * @var string
     */
    public $JetonPointStateId;

    /**
     * Noktanın Kodu
     *
     * @return string
     */
    public function getJetonPointCode()
    {
        return $this->JetonPointCode;
    }

    /**
     * Noktanın Durumu
     * Aktif, Kapali
     *
     * @return string
     */
    public function getJetonPointStateId()
    {
        return $this->JetonPointStateId;
    }

}