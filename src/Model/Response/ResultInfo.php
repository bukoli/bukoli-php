<?php

namespace Bukoli\Model\Response;

class ResultInfo
{
    /**
     * Durum
     * 1 - Başarılı
     * 0 - Hata
     *
     * @var int
     */
    public $Status;

    /**
     * Hata varsa hata mesajı döner
     *
     * @var string
     */
    public $Message;

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
     * Hata varsa hata mesajı döner
     *
     * @return string
     */
    public function getMessage()
    {
        return $this->Message;
    }

}