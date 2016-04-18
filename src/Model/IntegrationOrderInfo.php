<?php

namespace Bukoli\Model;

use Bukoli\Bukoli;
use Bukoli\Exception\Exception;

class IntegrationOrderInfo extends Model
{

    /**
     * Müşteri Sipariş No
     *
     * @var string
     */
    public $RequestOrderId;

    /**
     * Parçalı gönderim ise, bu siparişin bağlı olduğu ana sipariş no
     * Boş gönderilmesi durumunda RequestOrderId alanı buraya otomatik yazılır.
     * Sms – maillerde sipariş no olarak bu alan gösterilir.
     *
     * @var string
     */
    public $ParentRequestOrderId;

    /**
     * Son Kullanıcı
     *
     * @var IntegrationEndUserInfo
     */
    public $EndUserData;

    /**
     * Kutuların Detay Bilgisi
     *
     * @var IntegrationOrderDetailInfo[]
     */
    public $IntegrationOrderDetailInfoArr;

    /**
     * Haritadan seçilmiş olan Bukoli noktasının kodu
     *
     * @var string
     */
    public $SelectedJetonPointCode;

    /**
     * Size özel verdiğimiz şifre
     *
     * @var string
     */
    public $CustomerServicePassword;

    /**
     * Siparişin Fatura Nosu
     *
     * @var string
     */
    public $InvoiceNo;

    /**
     * Siparişin Irsaliye nosu
     *
     * @var string
     */
    public $IrsaliyeNo;

    /**
     * YYYYMMDDHHMMSS formatında.
     * Müşterinin e-ticaret sitesinde ödemesini yaptığı tarih, çağrı merkezinde müşteriye destek için
     *
     * @var string
     */
    public $OrderDate;
    /**
     * Siparişin kuruş olarak ederi
     * Örneğin 100 TL -> 10000 Kuruş
     *
     * @var string
     */
    public $OrderAmount;

    /**
     * siparişte kargo tutarı olarak müşteriye yansıtılan tutarın kuruş olarak ederi
     * Örneğin 5 TL -> 500 Kuruş
     *
     * @var string
     */
    public $CargoAmount;

    /**
     * Müşteriye yapılan Bukoli özelinde bir kampanya var ise kodları
     *
     * @var string[]
     */
    public $PromotionCodes = [];

    /**
     * Müşteri bazlı Entegrasyonlarda gerekli olan bilgi aktarımları içindir.
     *
     * @var string[]
     */
    public $ReservedFields = [];

    /**
     * @return string
     */
    public function getRequestOrderId()
    {
        return $this->RequestOrderId;
    }

    /**
     * @param string $RequestOrderId
     */
    public function setRequestOrderId($RequestOrderId)
    {
        $this->RequestOrderId = $RequestOrderId;
    }

    /**
     * @return string
     */
    public function getParentRequestOrderId()
    {
        return $this->ParentRequestOrderId;
    }

    /**
     * @param string $ParentRequestOrderId
     */
    public function setParentRequestOrderId($ParentRequestOrderId)
    {
        $this->ParentRequestOrderId = $ParentRequestOrderId;
    }

    /**
     * @return IntegrationEndUserInfo
     */
    public function getEndUserData()
    {
        return $this->EndUserData;
    }

    /**
     * @param IntegrationEndUserInfo $EndUserData
     */
    public function setEndUserData($EndUserData)
    {
        $this->EndUserData = $EndUserData;
    }

    /**
     * @return IntegrationOrderDetailInfo[]
     */
    public function getIntegrationOrderDetailInfoArr()
    {
        return $this->IntegrationOrderDetailInfoArr;
    }

    /**
     * @param IntegrationOrderDetailInfo[] $IntegrationOrderDetailInfoArr
     *
     * @throws Exception
     */
    public function setIntegrationOrderDetailInfoArr(array $IntegrationOrderDetailInfoArr)
    {
        foreach ($IntegrationOrderDetailInfoArr as $integrationOrderDetailInfo) {
            if (!$integrationOrderDetailInfo instanceof IntegrationOrderDetailInfo) {
                throw new Exception('Invalid IntegrationOrderDetailInfo');
            }
        }
        $this->IntegrationOrderDetailInfoArr = $IntegrationOrderDetailInfoArr;
    }

    /**
     * @return string
     */
    public function getSelectedJetonPointCode()
    {
        return $this->SelectedJetonPointCode;
    }

    /**
     * @param string $SelectedJetonPointCode
     */
    public function setSelectedJetonPointCode($SelectedJetonPointCode)
    {
        $this->SelectedJetonPointCode = $SelectedJetonPointCode;
    }

    /**
     * @return string
     */
    public function getCustomerServicePassword()
    {
        return Bukoli::getServicePassword();
    }

    /**
     * @return string
     */
    public function getInvoiceNo()
    {
        return $this->InvoiceNo;
    }

    /**
     * @param string $InvoiceNo
     */
    public function setInvoiceNo($InvoiceNo)
    {
        $this->InvoiceNo = $InvoiceNo;
    }

    /**
     * @return string
     */
    public function getIrsaliyeNo()
    {
        return $this->IrsaliyeNo;
    }

    /**
     * @param string $IrsaliyeNo
     */
    public function setIrsaliyeNo($IrsaliyeNo)
    {
        $this->IrsaliyeNo = $IrsaliyeNo;
    }

    /**
     * @return string
     */
    public function getOrderDate()
    {
        return $this->OrderDate;
    }

    /**
     * @param string $OrderDate
     */
    public function setOrderDate($OrderDate)
    {
        //TODO: Order Date Kontrolü
        $this->OrderDate = $OrderDate;
    }

    /**
     * @return string
     */
    public function getOrderAmount()
    {
        return $this->OrderAmount;
    }

    /**
     * @param string $OrderAmount
     */
    public function setOrderAmount($OrderAmount)
    {
        $this->OrderAmount = $OrderAmount;
    }

    /**
     * @return string
     */
    public function getCargoAmount()
    {
        return $this->CargoAmount;
    }

    /**
     * @param string $CargoAmount
     */
    public function setCargoAmount($CargoAmount)
    {
        $this->CargoAmount = $CargoAmount;
    }

    /**
     * @return \string[]
     */
    public function getPromotionCodes()
    {
        return $this->PromotionCodes;
    }

    /**
     * @param \string[] $PromotionCodes
     */
    public function setPromotionCodes($PromotionCodes)
    {
        $this->PromotionCodes = $PromotionCodes;
    }

    /**
     * @return \string[]
     */
    public function getReservedFields()
    {
        return $this->ReservedFields;
    }

    /**
     * @param \string[] $ReservedFields
     */
    public function setReservedFields($ReservedFields)
    {
        $this->ReservedFields = $ReservedFields;
    }

    /**
     * @inheritdoc
     * @return array
     */
    protected function getRequiredFields()
    {
        return [
            'RequestOrderId',
            'EndUserData',
            'SelectedJetonPointCode',
            'IrsaliyeNo',
            'OrderDate',
        ];
    }
}