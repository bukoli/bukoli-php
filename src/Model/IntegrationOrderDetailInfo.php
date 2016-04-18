<?php

namespace Bukoli\Model;

class IntegrationOrderDetailInfo extends Model
{
    /**
     * Desi Bilgisi
     * 3.4 gibi
     *
     * @var double
     */
    protected $Deci;

    /**
     * İçindekini tanımlayan bir bilgi
     * Konfeksiyon, kitap, hediyelik gibi
     *
     * @var string
     */
    protected $Info;

    /**
     * Kutu üzerine depoda yapıştırılan etiketin barkod idsi
     *
     * @var string
     */
    protected $Barcode;

    /**
     * Desi Bilgisi
     * 3.4 gibi
     *
     * @return float
     */
    public function getDeci()
    {
        return $this->Deci;
    }

    /**
     * Desi Bilgisi
     * 3.4 gibi
     *
     * @param float $Deci
     */
    public function setDeci($Deci)
    {
        $this->Deci = $Deci;
    }

    /**
     * İçindekini tanımlayan bir bilgi
     * Konfeksiyon, kitap, hediyelik gibi
     *
     * @return string
     */
    public function getInfo()
    {
        return $this->Info;
    }

    /**
     * İçindekini tanımlayan bir bilgi
     * Konfeksiyon, kitap, hediyelik gibi
     *
     * @param string $Info
     */
    public function setInfo($Info)
    {
        $this->Info = $Info;
    }

    /**
     * Kutu üzerine depoda yapıştırılan etiketin barkod idsi
     *
     * @return string
     */
    public function getBarcode()
    {
        return $this->Barcode;
    }

    /**
     * Kutu üzerine depoda yapıştırılan etiketin barkod idsi
     *
     * @param string $Barcode
     */
    public function setBarcode($Barcode)
    {
        $this->Barcode = $Barcode;
    }

    /**
     * @inheritdoc
     * @return array
     */
    public function getRequiredFields()
    {
        return [
            'Deci',
            'Info',
            'Barcode'
        ];
    }

}